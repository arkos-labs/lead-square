import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StrategicPointBlock from "@/components/StrategicPointBlock";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const DecretTertiaire = () => {
    const navigate = useNavigate();

    const handleCTA = (target: string = "audit-form") => {
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
                        "name": "Décret Tertiaire 2024",
                        "item": "https://lead-square.vercel.app/expertise/decret-tertiaire"
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
                        <span className="text-foreground font-medium truncate">Décret Tertiaire 2024</span>
                    </nav>

                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <header className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Réglementation
                                </span>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar className="w-4 h-4" /> 10 Janvier 2026 à 14:30
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Clock className="w-4 h-4" /> 5 min de lecture
                                </div>
                            </div>

                            <h1 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight text-slate-900">
                                Le Décret Tertiaire 2024-2026 : Tout ce qu'il faut savoir pour l'industrie
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-blue-600 pl-6 py-2">
                                Le compte à rebours a commencé. Pour toutes les entreprises du secteur industriel et tertiaire occupant des bâtiments de plus de 1 000 m², les obligations de réduction de consommation énergétique ne sont plus de simples recommandations.
                            </p>
                        </header>

                        {/* Featured Image */}
                        <div className="rounded-3xl overflow-hidden mb-16 shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                                alt="Industrie et expertise énergétique"
                                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700">
                            <p>
                                En 2026, nous entrons dans la phase active de contrôle et de mise en conformité. Le <strong>relamping LED</strong> s'impose comme la solution la plus rapide et la plus rentable pour répondre aux exigences de l'État tout en préservant votre trésorerie.
                            </p>

                            <h2 className="text-3xl mt-12 mb-6">Qu’est-ce que le Décret Tertiaire (Éco Énergie Tertiaire) ?</h2>
                            <p>
                                Issu de la loi ELAN, ce décret impose une réduction progressive de la consommation d’énergie finale pour les bâtiments à usage tertiaire. Les objectifs sont clairs :
                            </p>
                            <ul className="space-y-4 my-8">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                                    <span><strong>-40%</strong> d'ici 2030.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                                    <span><strong>-50%</strong> d'ici 2040.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                                    <span><strong>-60%</strong> d'ici 2050.</span>
                                </li>
                            </ul>
                            <p>
                                En 2026, les entreprises doivent déjà avoir déclaré leurs consommations de référence sur la plateforme <strong>OPERAT</strong>. Si vos chiffres ne montrent pas une tendance à la baisse, vous vous exposez à des sanctions financières et à une dégradation de votre image de marque (le "Name & Shame").
                            </p>

                            <h2 className="text-3xl mt-12 mb-6">Pourquoi l'éclairage LED est votre meilleur allié ?</h2>
                            <p>
                                Dans un entrepôt ou une usine, l'éclairage peut représenter jusqu'à <strong>40% de la facture d'électricité</strong>. Le remplacement de vos vieux tubes fluorescents ou projecteurs iodures par des solutions LED de dernière génération permet :
                            </p>

                            <h3 className="text-2xl mt-8 mb-4">1. Une réduction immédiate de la consommation</h3>
                            <p>
                                Contrairement à une isolation thermique qui demande de lourds travaux, le passage à la LED est une opération chirurgicale. Vous divisez instantanément par 3 ou 4 la puissance appelée pour l'éclairage.
                            </p>

                            <h3 className="text-2xl mt-8 mb-4">2. Une intégration de la gestion intelligente</h3>
                            <p>
                                En 2026, la LED ne suffit plus. Pour respecter le décret, nous installons des <strong>capteurs de luminosité et de présence</strong>. Si une zone de votre entrepôt est vide ou si la lumière du jour est suffisante, vos luminaires se tamisent automatiquement. C'est ce gain supplémentaire qui vous permet d'atteindre les -40% sans effort.
                            </p>

                            <h3 className="text-2xl mt-8 mb-4">3. Une maintenance réduite à zéro</h3>
                            <p>
                                Le décret tertiaire vous oblige à déclarer vos consommations annuelles. La durée de vie des LED (50 000 à 100 000 heures) garantit une stabilité de vos performances énergétiques sur plus de 10 ans, sans coûts de maintenance imprévus.
                            </p>

                            {/* Table */}
                            <div className="my-16 overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="p-6 font-bold">Poste</th>
                                            <th className="p-6 font-bold">Avant (Fluo/Halogène)</th>
                                            <th className="p-6 font-bold">Après (LED + Gestion)</th>
                                            <th className="p-6 font-bold">Gain Énergétique</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="p-6 font-medium">Consommation annuelle</td>
                                            <td className="p-6 text-slate-500">100 000 kWh</td>
                                            <td className="p-6 font-bold text-blue-600">25 000 kWh</td>
                                            <td className="p-6"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-bold">-75%</span></td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="p-6 font-medium">Coût de maintenance</td>
                                            <td className="p-6 text-slate-500">Élevé (Remplacement régulier)</td>
                                            <td className="p-6 font-bold text-blue-600">Quasi nul</td>
                                            <td className="p-6 text-slate-500 italic">Optimisé</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="p-6 font-medium">Conformité Décret</td>
                                            <td className="p-6 text-red-500 font-bold">Non conforme</td>
                                            <td className="p-6 font-bold text-blue-600">Objectif 2040 atteint</td>
                                            <td className="p-6 font-bold text-green-600">Sécurisé</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* REUSABLE STRATEGIC BLOCK */}
                            <StrategicPointBlock />

                            <h2 className="text-3xl mt-12 mb-6">Comment démarrer votre mise en conformité ?</h2>
                            <p>
                                Ne subissez pas la réglementation. Utilisez-la pour moderniser votre outil de travail. La première étape est de réaliser un <strong>audit d'éclairement</strong> pour identifier les zones les plus énergivores de votre bâtiment.
                            </p>

                            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 my-12 text-white relative overflow-hidden group">
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="max-w-xl">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Prêt à réduire vos factures et sécuriser votre conformité ?</h3>
                                        <p className="text-slate-400 text-lg">Nos experts vous accompagnent pour bénéficier des primes CEE et optimiser votre installation.</p>
                                    </div>
                                    <button
                                        onClick={() => handleCTA("audit-form")}
                                        className="whitespace-nowrap px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all shadow-xl hover:shadow-blue-600/20 text-white"
                                    >
                                        Demander mon audit offert
                                    </button>
                                </div>
                            </div>

                            {/* Strategic Internal Linking */}
                            <div className="pt-12 border-t border-slate-100">
                                <p className="font-bold flex items-center gap-2 mb-4 uppercase tracking-widest text-sm text-slate-400">
                                    Lire aussi
                                </p>
                                <div className="grid gap-4">
                                    <Link to="/expertise/financement-cee" className="group flex items-center justify-between p-6 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Comment financer votre projet LED grâce aux CEE ?</h4>
                                                <p className="text-sm text-slate-500">Découvrez comment couvrir jusqu'à 100% de l'investissement.</p>
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

                        {/* Sidebar / Social Share floating? Skip for now, keep it clean */}
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

export default DecretTertiaire;
