
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const MentionsLegales = () => {
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
                        Mentions Légales
                    </h1>

                    <div className="space-y-8 text-muted-foreground leading-relaxed">
                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">1. Éditeur du site</h2>
                            <p className="mb-2">
                                Le site internet <strong>Square</strong> est édité par :
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Dénomination sociale :</strong> SQUARE</li>
                                <li><strong>Forme juridique :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)</li>
                                <li><strong>Siège social :</strong> 84 rue de Montreuil, 75011 Paris, France</li>
                                <li><strong>RCS :</strong> Paris B 884 694 333</li>
                                <li><strong>Numéro SIREN :</strong> 884 694 333</li>
                                <li><strong>Capital social :</strong> 100 000 €</li>
                                <li><strong>Directeur de la publication :</strong> M. Cherki Nicolas</li>
                                <li><strong>Contact :</strong> pro.squaregroup@gmail.com</li>
                            </ul>
                        </section>

                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">2. Hébergement</h2>
                            <p>
                                Le site est hébergé par :
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>Hébergeur :</strong> Vercel Inc.</li>
                                <li><strong>Adresse :</strong> 340 S Lemon Ave #4133 Walnut, CA 91789, USA</li>
                                <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com</a></li>
                            </ul>
                        </section>

                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">3. Propriété intellectuelle</h2>
                            <p>
                                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                            </p>
                            <p className="mt-2">
                                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                            </p>
                        </section>

                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">4. Protection des données personnelles (RGPD)</h2>
                            <p>
                                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
                            </p>
                            <p className="mt-2">
                                Pour exercer ce droit, vous pouvez nous contacter à l'adresse suivante : <strong>contact@square.fr</strong>
                            </p>
                            <p className="mt-2">
                                Les informations recueillies via les formulaires de ce site sont destinées exclusivement à l'usage de la société SQUARE pour la gestion de la relation client et ne sont en aucun cas communiquées à des tiers.
                            </p>
                        </section>

                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">5. Cookies</h2>
                            <p>
                                Ce site peut être amené à utiliser des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visites. Vous avez la possibilité de désactiver les cookies en vous rendant dans les options de votre navigateur.
                            </p>
                        </section>

                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">6. Limitation de responsabilité</h2>
                            <p>
                                La société SQUARE ne saurait être tenue pour responsable des erreurs rencontrées sur le site, problèmes techniques, interprétation des informations publiée et conséquences de leur utilisation. L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MentionsLegales;
