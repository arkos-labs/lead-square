import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StrategicPointBlock from "@/components/StrategicPointBlock";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, ChevronRight, CheckCircle2, Eye, ShieldAlert, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Productivite = () => {
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
                        "name": "Productivité & Éclairage",
                        "item": "https://lead-square.vercel.app/expertise/productivite-eclairage"
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
                        <span className="text-foreground font-medium truncate">Productivité & Confort</span>
                    </nav>

                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <header className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Performance
                                </span>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar className="w-4 h-4" /> 05 Janvier 2026 à 16:45
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Clock className="w-4 h-4" /> 6 min de lecture
                                </div>
                            </div>

                            <h1 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight text-slate-900">
                                Productivité et éclairage : le confort visuel en entrepôt
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-orange-500 pl-6 py-2">
                                Dans le secteur industriel et logistique, l'éclairage est trop souvent considéré comme une simple charge fixe. Pourtant, en 2026, la qualité de la lumière influence directement la performance de vos collaborateurs.
                            </p>
                        </header>

                        {/* Featured Image */}
                        <div className="rounded-3xl overflow-hidden mb-16 shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
                                alt="Éclairage LED et productivité en entrepôt"
                                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700">
                            <h2 className="text-3xl mt-12 mb-6">La lumière : un levier de performance insoupçonné</h2>
                            <p>
                                Un éclairage médiocre (vieillissant, clignotant ou trop jaune) entraîne une fatigue oculaire rapide. En entrepôt, cela se traduit par des impacts concrets sur votre exploitation :
                            </p>
                            <ul className="space-y-4 my-8">
                                <li className="flex gap-3">
                                    <ShieldAlert className="w-6 h-6 text-orange-600 shrink-0" />
                                    <span><strong>Une hausse des erreurs logistiques :</strong> Difficulté à lire les étiquettes ou les bons de commande, provoquant des retours clients coûteux.</span>
                                </li>
                                <li className="flex gap-3">
                                    <ShieldAlert className="w-6 h-6 text-orange-600 shrink-0" />
                                    <span><strong>Une baisse de la vigilance :</strong> Augmentation du risque d'accidents du travail, notamment lors des co-activités piétons/chariots.</span>
                                </li>
                                <li className="flex gap-3">
                                    <ShieldAlert className="w-6 h-6 text-orange-600 shrink-0" />
                                    <span><strong>L'effet stroboscopique :</strong> Les anciens tubes fluorescents peuvent créer une illusion d'immobilité sur les pièces en rotation, un danger critique en maintenance.</span>
                                </li>
                            </ul>

                            <h2 className="text-3xl mt-12 mb-6">Les 3 piliers d'un éclairage LED performant</h2>
                            <p>
                                Pour transformer votre éclairage en outil de productivité, nous concentrons nos études d'éclairement sur trois critères techniques fondamentaux :
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 my-12">
                                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 relative group">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold mb-3">L'uniformité (Uo)</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">Nous évitons les zones d'ombre entre les racks pour fluidifier le mouvement des préparateurs.</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 relative group">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                                        <Eye className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold mb-3">Rendu des Couleurs</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">Un IRC {'>'} 80 est indispensable pour le contrôle qualité et la lecture précise des marquages.</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 relative group">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold mb-3">Blancheur (4000K)</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">Le blanc neutre imite la lumière du jour et maintient le niveau d'énergie des opérateurs.</p>
                                </div>
                            </div>

                            {/* REUSABLE STRATEGIC BLOCK */}
                            <StrategicPointBlock />

                            <h2 className="text-3xl mt-12 mb-6">Conclusion : Un investissement humain et financier</h2>
                            <p>
                                Améliorer le confort visuel, c'est réduire l'absentéisme et booster le moral des troupes. Un collaborateur qui travaille dans un environnement clair et sécurisé est un collaborateur plus efficace et plus engagé.
                            </p>

                            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 my-12 text-white relative overflow-hidden group">
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="max-w-xl">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Offrez à vos équipes le confort qu'elles méritent</h3>
                                        <p className="text-slate-400 text-lg">Contactez-nous pour une étude d'éclairement gratuite et personnalisée de votre site.</p>
                                    </div>
                                    <button
                                        onClick={() => handleCTA("audit-form")}
                                        className="whitespace-nowrap px-8 py-4 bg-orange-600 hover:bg-orange-500 rounded-xl font-bold transition-all shadow-xl hover:shadow-orange-600/20 text-white"
                                    >
                                        Étude d'éclairement offerte
                                    </button>
                                </div>
                            </div>

                            {/* Strategic Internal Linking */}
                            <div className="pt-12 border-t border-slate-100">
                                <p className="font-bold flex items-center gap-2 mb-4 uppercase tracking-widest text-sm text-slate-400">
                                    Lire aussi
                                </p>
                                <div className="grid gap-4">
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

                                    <Link to="/expertise/decret-tertiaire" className="group flex items-center justify-between p-6 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Le Décret Tertiaire 2024-2026</h4>
                                                <p className="text-sm text-slate-500">Préparez votre site industriel aux nouvelles normes.</p>
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

export default Productivite;
