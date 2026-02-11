import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Seo from "@/components/Seo";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title="Contact | Square Lighting Solutions"
        description="Contactez Square Lighting Solutions pour un audit LED industriel, une étude photométrique ou un projet multi‑sites."
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

          <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary">Contact</h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Une question, un audit LED ou un projet multi‑sites ? Écrivez‑nous et nous vous répondrons sous 24h ouvrées.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-display font-semibold">Téléphone</h2>
              </div>
              <a href="tel:+33635880886" className="text-muted-foreground hover:text-primary transition-colors">
                +33 6 35 88 08 86
              </a>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-display font-semibold">Email</h2>
              </div>
              <a href="mailto:contact@square-solutions.fr" className="text-muted-foreground hover:text-primary transition-colors">
                contact@square-solutions.fr
              </a>
            </div>

            <div className="md:col-span-2 bg-card p-6 rounded-lg border border-border/50 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-display font-semibold">Adresse</h2>
              </div>
              <p className="text-muted-foreground">84 rue de Montreuil, 75011 Paris, France</p>
              <p className="text-muted-foreground mt-2">Interventions partout en France et DOM‑TOM sur demande.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
