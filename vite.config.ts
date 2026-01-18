import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { compression } from 'vite-plugin-compression2';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Compression Gzip et Brotli pour réduire la taille des fichiers
    compression({
      include: [/\.(js)$/, /\.(css)$/, /\.(html)$/, /\.(svg)$/],
      deleteOriginalAssets: false,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimisations de build
    target: 'es2015',
    minify: 'esbuild', // Utilisation de esbuild (plus rapide, moins de dépendances)
    rollupOptions: {
      output: {
        // Code splitting pour de meilleurs temps de chargement
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-accordion'],
          'email-vendor': ['@emailjs/browser'],
        },
      },
    },
    // Optimisation des chunks
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: mode !== 'production', // Sourcemaps uniquement en dev
  },
  // Optimisation des dépendances
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));
