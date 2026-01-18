import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StrategicPointBlock from "@/components/StrategicPointBlock";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, ChevronRight, CheckCircle2, Wrench, Coins, Gavel } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Maintenance = () => {
    const navigate = useNavigate();

    const handleCTA = (target: string = "simulator") => {
        navigate("/", { state: { scrollTo: target } });
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [{
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Accueil",
                        "item": "https://lead-square.vercel.app/"
                    }, {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Expertise",
                        "item": "https://lead-square.vercel.app/expertise"
                    }, {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Gains de Maintenance LED",
                        "item": "https://lead-square.vercel.app/expertise/gains-maintenance"
                    }]
                })}
            </script>

            <main className="pt-32 pb-24">
                <article className="container px-4">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
                        <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link to="/expertise" className="hover:text-primary transition-colors">Expertise</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-foreground font-medium truncate">Gains de maintenance</span>
                    </nav>

                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <header className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Maintenance
                                </span>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar className="w-4 h-4" /> 12 Janvier 2026 à 11:10
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Clock className="w-4 h-4" /> 4 min de lecture
                                </div>
                            </div>

                            <h1 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight text-slate-900">
                                Gains de maintenance : l'impact caché de la LED ou comment réduire vos coûts de 80%
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-slate-400 pl-6 py-2">
                                L’éclairage LED est souvent plébiscité pour sa faible consommation électrique. Pourtant, pour les gestionnaires de sites industriels, le véritable trésor se cache ailleurs : dans la réduction drastique des frais de maintenance.
                            </p>
                        </header>

                        {/* Featured Image */}
                        <div className="rounded-3xl overflow-hidden mb-16 shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1200"
                                alt="Maintenance industrielle et éclairage LED"
                                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700">
                            <h2 className="text-3xl mt-12 mb-6 flex items-center gap-3">
                                <Clock className="w-8 h-8 text-blue-600" /> Le Fait : Une longévité qui change la donne
                            </h2>
                            <p>
                                Contrairement aux technologies traditionnelles (fluorescent, sodium haute pression ou halogène), la technologie LED ne repose pas sur un filament ou un gaz qui se dégrade rapidement. Une installation LED de qualité industrielle est conçue pour durer entre <strong>50 000 et 100 000 heures</strong>, contre seulement 10 000 à 15 000 heures pour les anciennes générations.
                            </p>
                            <p>
                                Cette robustesse permet d'espacer les cycles de remplacement de manière spectaculaire. Là où une équipe technique devait intervenir tous les deux ans pour changer des ballasts ou des ampoules grillées, la LED offre une tranquillité opérationnelle de <strong>plus de 10 ans en usage intensif</strong>.
                            </p>

                            <h2 className="text-3xl mt-12 mb-6 flex items-center gap-3">
                                <Coins className="w-8 h-8 text-emerald-600" /> L'Impact : Jusqu'à 80% d'économies de maintenance
                            </h2>
                            <p>
                                Le gain financier ne se limite pas à l'achat du matériel. L'impact réel se mesure sur trois leviers majeurs :
                            </p>
                            <ul className="space-y-4 my-8">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                                    <span><strong>Réduction des coûts de main-d'œuvre :</strong> Moins de remplacements signifie moins d'heures facturées pour les électriciens ou les agents de maintenance.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                                    <span><strong>Élimination des équipements de levage :</strong> Finie la location récurrente de nacelles ou le montage d'échafaudages pour atteindre les luminaires à 10 mètres de haut.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                                    <span><strong>Fiabilité des composants :</strong> Les LED sont insensibles aux vibrations industrielles et aux cycles d'allumages fréquents, évitant les interruptions de production.</span>
                                </li>
                            </ul>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center my-12">
                                <p className="text-4xl font-bold text-blue-900 mb-2">80%</p>
                                <p className="text-blue-700 font-medium">de baisse moyenne du budget maintenance lié à l'éclairage</p>
                            </div>

                            <h2 className="text-3xl mt-12 mb-6 flex items-center gap-3">
                                <Gavel className="w-8 h-8 text-slate-700" /> La Loi : Un cadre réglementaire qui accélère la transition
                            </h2>
                            <p>
                                La législation européenne renforce l'intérêt économique de ce passage à la LED :
                            </p>
                            <ul className="space-y-4 my-8">
                                <li><strong>Règlement RoHS & Éco-conception :</strong> Depuis 2023, la vente des tubes fluorescents (T5, T8) est interdite dans l'UE. Les pièces de rechange deviennent rares et chères.</li>
                                <li><strong>Certificats d'Économies d'Énergie (CEE) :</strong> Des fiches comme la <strong>IND-BA-116</strong> permettent de financer massivement le passage à la LED.</li>
                                <li><strong>Décret Tertiaire :</strong> L'objectif de -40% d'ici 2030 rend la LED incontournable pour les bâtiments industriels.</li>
                            </ul>

                            {/* REUSABLE STRATEGIC BLOCK */}
                            <StrategicPointBlock />

                            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 my-12 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="max-w-xl">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Marre de louer des nacelles pour changer des ampoules ?</h3>
                                        <p className="text-slate-400 text-lg">Nos solutions LED industrielles sont garanties 5 ans et sans aucune maintenance.</p>
                                    </div>
                                    <button
                                        onClick={() => handleCTA("simulator")}
                                        className="whitespace-nowrap px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all shadow-xl hover:shadow-blue-600/20 text-white"
                                    >
                                        Simuler mes gains de maintenance
                                    </button>
                                </div>
                            </div>

                            {/* Strategic Internal Linking */}
                            <div className="pt-12 border-t border-slate-100">
                                <p className="font-bold flex items-center gap-2 mb-4 uppercase tracking-widest text-sm text-slate-400">
                                    Lire aussi
                                </p>
                                <div className="grid gap-4">
                                    <Link to="/expertise/financement-cee" className="group flex items-center justify-between p-6 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">2</div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Comment financer votre projet LED ?</h4>
                                                <p className="text-sm text-slate-500">Tout savoir sur les primes CEE pour votre entreprise.</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
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

export default Maintenance;
