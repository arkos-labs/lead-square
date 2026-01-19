
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PolitiqueConfidentialite = () => {
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
                        Politique de Confidentialité
                    </h1>

                    <div className="space-y-8 text-muted-foreground leading-relaxed">
                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">1. Préambule</h2>
                            <p>
                                La présente politique de confidentialité a pour but d'exposer aux utilisateurs du site :
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>La manière dont sont collectées et traitées leurs données à caractère personnel.</li>
                                <li>Quels sont les droits des utilisateurs concernant ces données.</li>
                                <li>Qui est responsable du traitement des données collectées et traités.</li>
                                <li>À qui ces données sont transmises.</li>
                            </ul>
                        </section>

                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">2. Données collectées</h2>
                            <p>
                                Nous collectons les données suivantes via nos formulaires de contact et d'audit :
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Nom et Prénom</li>
                                <li>Adresse email</li>
                                <li>Numéro de téléphone</li>
                                <li>Nom de l'entreprise</li>
                                <li>Informations relatives à votre projet d'éclairage</li>
                            </ul>
                            <p className="mt-2">
                                Ces données sont nécessaires pour répondre à vos demandes, réaliser des audits énergétiques et vous proposer des offres commerciales adaptées.
                            </p>
                        </section>

                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">3. Responsable du traitement</h2>
                            <p>
                                Le responsable du traitement des données à caractère personnel est la société SQUARE. Vous pouvez nous contacter à l'adresse suivante : <strong>contact@square-solutions.fr</strong>.
                            </p>
                        </section>

                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">4. Destinataires des données</h2>
                            <p>
                                Les données collectées sont destinées exclusivement à la société SQUARE et, le cas échéant, à ses sous-traitants techniques (hébergeur, outils d'analyse) dans la stricte limite nécessaire à l'exécution de leurs missions. Aucune donnée n'est vendue à des tiers.
                            </p>
                        </section>

                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">5. Vos droits</h2>
                            <p>
                                Conformément à la réglementation en vigueur, vous disposez des droits suivants :
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Droit d'accès et de rectification de vos données.</li>
                                <li>Droit à l'effacement de vos données.</li>
                                <li>Droit à la limitation du traitement.</li>
                                <li>Droit d'opposition au traitement.</li>
                                <li>Droit à la portabilité de vos données.</li>
                            </ul>
                            <p className="mt-2">
                                Pour exercer ces droits, veuillez nous contacter par email à contact@square-solutions.fr.
                            </p>
                        </section>

                        <section className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                            <h2 className="text-xl font-display font-semibold text-foreground mb-4">6. Sécurité des données</h2>
                            <p>
                                SQUARE met en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté au risque, afin de protéger vos données contre la perte, l'accès non autorisé, la divulgation ou l'altération.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PolitiqueConfidentialite;
