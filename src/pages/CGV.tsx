
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const CGV = () => {
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
                        Conditions Générales de Vente (CGV)
                    </h1>

                    <div className="space-y-8 text-muted-foreground leading-relaxed">
                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">1. Champ d'application</h2>
                            <p>
                                Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les ventes de produits et prestations de services conclues par la société SQUARE auprès de clients professionnels.
                            </p>
                            <p className="mt-2">
                                Toute commande implique l'acceptation sans réserve par l'acheteur et son adhésion pleine et entière aux présentes CGV.
                            </p>
                        </section>

                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">2. Commandes</h2>
                            <p>
                                Les ventes ne sont parfaites qu'après acceptation expresse et par écrit de la commande du client par le vendeur. Les devis établis par SQUARE sont valables pour une durée de 30 jours, sauf mention contraire.
                            </p>
                        </section>

                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">3. Tarifs</h2>
                            <p>
                                Les produits sont fournis aux tarifs en vigueur au jour de la passation de la commande. Les prix sont exprimés en euros et hors taxes. La TVA applicable est celle en vigueur au jour de la facturation.
                            </p>
                        </section>

                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">4. Conditions de paiement</h2>
                            <p>
                                Sauf accord particulier, le prix est payable comptant, en totalité au jour de la passation de la commande. En cas de retard de paiement, des pénalités de retard égales à trois fois le taux d'intérêt légal seront exigibles de plein droit.
                            </p>
                        </section>

                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">5. Livraison</h2>
                            <p>
                                Les délais de livraison ne sont donnés qu'à titre indicatif. Les retards de livraison ne peuvent donner lieu à dommages-intérêts, à retenue ni à annulation des commandes en cours.
                            </p>
                        </section>

                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">6. Garantie et Responsabilité</h2>
                            <p>
                                Nos produits bénéficient de la garantie constructeur dont la durée et les modalités sont définies dans les fiches techniques. Notre responsabilité ne saurait être engagée en cas de mauvaise utilisation, négligence ou défaut d'entretien de la part du client.
                            </p>
                        </section>

                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">7. Droit applicable</h2>
                            <p>
                                De convention expresse entre les parties, les présentes conditions générales de vente et les opérations d'achat et de vente qui en découlent sont régies par le droit français.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CGV;
