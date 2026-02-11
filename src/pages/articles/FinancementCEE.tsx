import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StrategicPointBlock from "@/components/StrategicPointBlock";
import Seo from "@/components/Seo";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, ChevronRight, CheckCircle2, PiggyBank, Receipt, TrendingUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const FinancementCEE = () => {
    const navigate = useNavigate();

    const handleCTA = (target: string = "simulator") => {
        navigate("/", { state: { scrollTo: target } });
    };

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Financement CEE | Square Lighting Solutions"
                description="Comment financer un relamping LED industriel avec les aides CEE : étapes, montants et ROI accéléré."
            />
            <Header />
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [{
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Accueil",
                        "item": "https://www.square-solutions.fr/"
                    }, {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Expertise",
                        "item": "https://www.square-solutions.fr/expertise"
                    }, {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Financement CEE",
                        "item": "https://www.square-solutions.fr/expertise/financement-cee"
                    }]
                })}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "Comment financer votre projet LED grâce aux CEE ?",
                    "datePublished": "2026-01-08",
                    "dateModified": "2026-02-11",
                    "author": {
                        "@type": "Person",
                        "name": "Benaroche David Benjamin"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Square Lighting Solutions",
                        "url": "https://www.square-solutions.fr"
                    },
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://www.square-solutions.fr/expertise/financement-cee"
                    }
                })}
            </script>

            <main id="main-content" className="pt-32 pb-24">
                <article className="container px-4">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
                        <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link to="/expertise" className="hover:text-primary transition-colors">Expertise</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-foreground font-medium truncate">Financement CEE</span>
                    </nav>

                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <header className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-4 py-1.5 bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Financement
                                </span>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar className="w-4 h-4" /> 08 Janvier 2026 à 09:15
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Clock className="w-4 h-4" /> 4 min de lecture
                                </div>
                            </div>

                            <h1 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight text-slate-900">
                                Comment financer votre projet LED grâce aux CEE ?
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-emerald-500 pl-6 py-2">
                                L'investissement initial est souvent perçu comme le principal obstacle à la modernisation de l'éclairage industriel. Pourtant, en 2026, il existe un levier financier puissant et sous-utilisé : les Certificats d’Économies d’Énergie (CEE).
                            </p>
                        </header>

                        {/* Featured Image */}
                        <div className="rounded-3xl overflow-hidden mb-16 shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
                                alt="Financement et économies d'énergie"
                                width={1200}
                                height={500}
                                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700">
                            <p>
                                Ce dispositif peut couvrir une part majeure, voire la totalité, de votre facture de relamping. Ne laissez pas l'aspect financier freiner votre transition vers une performance éclairée.
                            </p>

                            <h2 className="text-3xl mt-12 mb-6">Le dispositif CEE : Qu'est-ce que c'est ?</h2>
                            <p>
                                Le principe est simple : l'État impose aux fournisseurs d'énergie (les "obligés" comme EDF, TotalEnergies, etc.) de financer des travaux d'efficacité énergétique chez les professionnels et les particuliers.
                            </p>
                            <p>
                                Si vous remplacez vos anciens luminaires par des LED, vous générez des économies d'énergie que vous pouvez "revendre" à ces fournisseurs sous forme de certificats. <strong>C'est une subvention directe pour votre entreprise.</strong>
                            </p>

                            <h2 className="text-3xl mt-12 mb-6">Quelles sont les opérations éligibles en industrie ?</h2>
                            <p>
                                Toutes les installations LED ne se valent pas aux yeux de la loi. Pour obtenir le financement, votre projet doit respecter des critères techniques stricts :
                            </p>
                            <ul className="space-y-4 my-8">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                                    <span><strong>La performance :</strong> Les luminaires doivent avoir une efficacité lumineuse élevée (mesurée en lumens par watt).</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                                    <span><strong>La fiche IND-BA-116 :</strong> C'est la référence pour le secteur industriel. Elle concerne le remplacement de luminaires d'usage général par des luminaires à modules LED.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                                    <span><strong>La gestion d'éclairage :</strong> En 2026, les primes sont fortement bonifiées si vous installez un système de détection de présence ou de gradation selon la lumière du jour.</span>
                                </li>
                            </ul>
                            <p className="text-sm text-slate-500 italic mt-4">
                                Retrouvez les textes de loi officiels concernant les CEE sur le portail <a href="https://www.legifrance.gouv.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Legifrance</a> ou sur le site du <a href="https://www.ecologie.gouv.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ministère de la Transition Écologique</a>.
                            </p>

                            <h2 className="text-3xl mt-12 mb-6">Un financement qui va au-delà des CEE</h2>
                            <p>
                                Pour maximiser votre budget, nous vous accompagnons dans le cumul des aides disponibles cette année :
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 my-12">
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <PiggyBank className="w-8 h-8 text-emerald-600 mb-4" />
                                    <h4 className="font-bold mb-2">Prêt Éco-Énergie</h4>
                                    <p className="text-sm text-slate-500">Un prêt BPI France à taux préférentiel pour financer le reste à charge.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <Receipt className="w-8 h-8 text-emerald-600 mb-4" />
                                    <h4 className="font-bold mb-2">Amortissement Accéléré</h4>
                                    <p className="text-sm text-slate-500">Déduisez l'investissement plus rapidement de votre résultat imposable.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <TrendingUp className="w-8 h-8 text-emerald-600 mb-4" />
                                    <h4 className="font-bold mb-2">Aides Régionales</h4>
                                    <p className="text-sm text-slate-500">Subventions locales additionnelles selon votre implantation.</p>
                                </div>
                            </div>

                            <h2 className="text-3xl mt-12 mb-6">Exemple de financement : Entrepôt de 2 000 m²</h2>
                            <div className="my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="p-6 font-bold">Poste de dépense</th>
                                            <th className="p-6 font-bold">Coût estimé</th>
                                            <th className="p-6 font-bold">Financement CEE</th>
                                            <th className="p-6 font-bold">Reste à charge</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="p-6 font-medium">Matériel LED & Pose</td>
                                            <td className="p-6 text-slate-500">35 000 €</td>
                                            <td className="p-6 font-bold text-emerald-600">22 000 €</td>
                                            <td className="p-6 font-bold text-slate-900">13 000 €</td>
                                        </tr>
                                        <tr className="bg-emerald-50">
                                            <td className="p-6 font-bold" colSpan={3}>Économie annuelle générée</td>
                                            <td className="p-6 font-bold text-emerald-700">9 500 €</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-center font-bold text-slate-900 mt-4">👉 Projet amorti en seulement 16 mois</p>

                            {/* REUSABLE STRATEGIC BLOCK */}
                            <StrategicPointBlock />

                            <h2 className="text-3xl mt-12 mb-6">Comment bénéficier de ces aides ?</h2>
                            <p>
                                La démarche administrative peut être complexe. Pour garantir l'obtention de vos primes, le dossier doit être constitué <strong>avant la signature du devis</strong>.
                            </p>
                            <p>
                                Notre expertise à votre service : Nous ne nous contentons pas d'installer des LED. Nous gérons l'intégralité de votre dossier CEE pour vous garantir le montant maximal de subvention.
                            </p>

                            <div className="bg-emerald-600 rounded-3xl p-8 md:p-12 my-12 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="max-w-xl">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ne laissez pas l'argent sur la table</h3>
                                        <p className="text-emerald-100 text-lg">Nos experts calculent pour vous le montant exact de vos subventions CEE.</p>
                                    </div>
                                    <button
                                        onClick={() => handleCTA("simulator")}
                                        className="whitespace-nowrap px-8 py-4 bg-slate-900 hover:bg-slate-800 rounded-xl font-bold transition-all shadow-xl text-white"
                                    >
                                        Demander ma simulation gratuite
                                    </button>
                                </div>
                            </div>

                            {/* Strategic Internal Linking */}
                            <div className="pt-12 border-t border-slate-100">
                                <p className="font-bold flex items-center gap-2 mb-4 uppercase tracking-widest text-sm text-slate-400">
                                    Lire aussi
                                </p>
                                <div className="grid gap-4">
                                    <Link to="/expertise/decret-tertiaire" className="group flex items-center justify-between p-6 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Le Décret Tertiaire 2024-2026</h4>
                                                <p className="text-sm text-slate-500">Tout ce qu'il faut savoir pour l'industrie.</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                                    </Link>

                                    <Link to="/expertise/gains-maintenance" className="group flex items-center justify-between p-6 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">4</div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Réduisez vos coûts de maintenance de 80%</h4>
                                                <p className="text-sm text-slate-500">L'impact réel de la longévité LED sur vos frais d'exploitation.</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <footer className="mt-20 pt-12 border-t border-slate-100 flex items-center justify-between">
                            <Link to="/expertise" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium transition-colors">
                                <ArrowLeft className="w-4 h-4" /> Retour aux articles
                            </Link>
                            <div className="flex items-center gap-4">
                                <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400" aria-label="Partager sur LinkedIn">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </footer>
                    </div>
                </article>
            </main>

            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default FinancementCEE;

