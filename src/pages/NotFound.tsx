import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, FileQuestion } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(var(--primary)/0.15),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container relative z-10 px-4 text-center">
        {/* Icon */}
        <div className="mx-auto mb-8 w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/20 shadow-[0_0_40px_rgba(37,99,235,0.2)] animate-in zoom-in duration-500">
          <FileQuestion className="w-10 h-10 text-blue-400" />
        </div>

        {/* Title */}
        <h1 className="text-8xl font-bold mb-2 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 animate-in slide-in-from-bottom-5 duration-700 fade-in">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white/90 animate-in slide-in-from-bottom-6 duration-700 delay-100 fade-in">
          Page introuvable
        </h2>

        {/* Description */}
        <p className="max-w-md mx-auto text-lg text-gray-400 mb-10 leading-relaxed animate-in slide-in-from-bottom-7 duration-700 delay-200 fade-in">
          Désolé, la page que vous recherchez semble avoir été déplacée, n'existe plus ou l'URL est incorrecte.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom-8 duration-700 delay-300 fade-in">
          <Link to="/">
            <Button size="lg" className="font-semibold bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] text-white min-w-[200px] h-12 border-none transition-all duration-300">
              <Home className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>

          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/40 shadow-lg min-w-[200px] h-12 transition-all duration-300 backdrop-blur-sm"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Page précédente
          </Button>
        </div>
      </div>

      {/* Decorative footer text */}
      <div className="absolute bottom-8 text-xs text-white/20 font-mono">
        Error Code: 404_NOT_FOUND
      </div>
    </div>
  );
};

export default NotFound;
