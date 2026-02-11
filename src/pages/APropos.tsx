import { ArrowLeft, Building2, Leaf, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Seo from "@/components/Seo";

const APropos = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title="À propos | Square Lighting Solutions"
        description="Découvrez Square Lighting Solutions : expert en relamping LED industriel, audit précis, conformité et accompagnement sur tout le territoire."
      />
      <Header />

      <main id="main-content" className="flex-grow container px-4 py-8 md:py-16 mx-auto mt-20">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary">
            À propos de Square Lighting Solutions
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Square Lighting Solutions accompagne les sites industriels, plateformes logistiques et bâtiments tertiaires
            dans la modernisation de leur éclairage LED. Notre mission : réduire durablement vos coûts énergétiques tout
            en améliorant le confort visuel, la sécurité et la performance opérationnelle.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-display font-semibold">Expertise terrain</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Diagnostic complet, plan d'éclairage sur mesure, installation certifiée et suivi post‑projet.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Leaf className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-display font-semibold">Impact carbone</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Jusqu'à 60% d'économies d'énergie et une baisse immédiate des émissions liées à l'éclairage.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-display font-semibold">Conformité & aides</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Optimisation des dispositifs CEE, conformité Décret Tertiaire et garanties constructeur.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-display font-semibold">Accompagnement humain</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Un interlocuteur dédié, des délais maîtrisés et une coordination fluide avec vos équipes.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default APropos;
