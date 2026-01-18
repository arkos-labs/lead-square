
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PlanDuSite = () => {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />

            <main className="flex-grow container px-4 py-8 md:py-16 mx-auto mt-20">
                <div className="max-w-4xl mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Retour à l'accueil
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-display font-bold mb-8 text-primary">
                        Plan du site
                    </h1>

                    <div className="bg-card p-8 rounded-lg border border-border/50 shadow-sm">
                        <ul className="space-y-4 text-lg">
                            <li>
                                <Link to="/" className="text-foreground hover:text-primary font-semibold transition-colors">
                                    🏠 Accueil
                                </Link>
                                <ul className="ml-6 mt-2 space-y-2 text-base text-muted-foreground border-l-2 border-border pl-4">
                                    <li><a href="/#benefits" className="hover:text-primary transition-colors">Avantages du relamping LED</a></li>
                                    <li><a href="/#simulator" className="hover:text-primary transition-colors">Simulateur d'économies</a></li>
                                    <li><a href="/#testimonials" className="hover:text-primary transition-colors">Témoignages clients</a></li>
                                    <li><a href="/#faq" className="hover:text-primary transition-colors">Questions fréquentes</a></li>
                                    <li><a href="/#contact" className="hover:text-primary transition-colors">Demande d'audit gratuit</a></li>
                                </ul>
                            </li>

                            <li className="pt-4">
                                <Link to="/expertise" className="text-foreground hover:text-primary font-semibold transition-colors">
                                    📰 Actualités & Expertise
                                </Link>
                                <ul className="ml-6 mt-2 space-y-2 text-base text-muted-foreground border-l-2 border-border pl-4">
                                    <li>
                                        <Link to="/expertise/gains-maintenance" className="hover:text-primary transition-colors">
                                            Gains de maintenance : l'impact caché de la LED
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/expertise/decret-tertiaire" className="hover:text-primary transition-colors">
                                            Le Décret Tertiaire 2024
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/expertise/financement-cee" className="hover:text-primary transition-colors">
                                            Comment financer votre projet LED grâce aux CEE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/expertise/productivite-eclairage" className="hover:text-primary transition-colors">
                                            Productivité et éclairage : le confort visuel en entrepôt
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="pt-4">
                                <span className="font-semibold text-foreground">⚙️ Services</span>
                                <ul className="ml-6 mt-2 space-y-2 text-base text-muted-foreground border-l-2 border-border pl-4">
                                    <li><a href="/#simulator" className="hover:text-primary transition-colors">Audit énergétique gratuit</a></li>
                                    <li><a href="/#benefits" className="hover:text-primary transition-colors">Installation LED industrielle</a></li>
                                    <li><a href="/#benefits" className="hover:text-primary transition-colors">Maintenance et garantie 10 ans</a></li>
                                    <li><a href="/#simulator" className="hover:text-primary transition-colors">Financement CEE jusqu'à 100%</a></li>
                                </ul>
                            </li>

                            <li className="pt-4">
                                <span className="font-semibold text-foreground">📋 Informations Légales</span>
                                <ul className="ml-6 mt-2 space-y-2 text-base text-muted-foreground border-l-2 border-border pl-4">
                                    <li>
                                        <Link to="/mentions-legales" className="hover:text-primary transition-colors">
                                            Mentions Légales
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/politique-confidentialite" className="hover:text-primary transition-colors">
                                            Politique de Confidentialité
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cgv" className="hover:text-primary transition-colors">
                                            Conditions Générales de Vente (CGV)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/plan-du-site" className="hover:text-primary transition-colors">
                                            Plan du site
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="pt-4">
                                <span className="font-semibold text-foreground">📞 Contact</span>
                                <ul className="ml-6 mt-2 space-y-2 text-base text-muted-foreground border-l-2 border-border pl-4">
                                    <li>Téléphone : <a href="tel:+33635880886" className="hover:text-primary transition-colors">+33 6 35 88 08 86</a></li>
                                    <li>Email : <a href="mailto:cherkinicolas@gmail.com" className="hover:text-primary transition-colors">cherkinicolas@gmail.com</a></li>
                                    <li>Adresse : 128 Rue de la Boétie, 75008 Paris, France</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PlanDuSite;
