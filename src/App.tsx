import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Expertise from "./pages/Expertise";
import ScrollToTop from "./components/ScrollToTop";
import DecretTertiaire from "./pages/articles/DecretTertiaire";
import FinancementCEE from "./pages/articles/FinancementCEE";
import Productivite from "./pages/articles/Productivite";
import Maintenance from "./pages/articles/Maintenance";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import Facebook from "./pages/Facebook";
import CGV from "./pages/CGV";
import PlanDuSite from "./pages/PlanDuSite";
import MarketingTools from "./pages/MarketingTools";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Aller au contenu principal
        </a>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/expertise/decret-tertiaire" element={<DecretTertiaire />} />
          <Route path="/expertise/financement-cee" element={<FinancementCEE />} />
          <Route path="/expertise/productivite-eclairage" element={<Productivite />} />
          <Route path="/expertise/gains-maintenance" element={<Maintenance />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/plan-du-site" element={<PlanDuSite />} />
          <Route path="/admin/marketing" element={<MarketingTools />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
