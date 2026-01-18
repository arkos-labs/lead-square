import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, Clock, ChevronRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const expertisePosts = [
    {
        title: "Gains de maintenance : l'impact caché de la LED",
        excerpt: "Au-delà de la facture énergétique, découvrez comment réduire vos coûts opérationnels de maintenance de 80%.",
        category: "Maintenance",
        readTime: "4 min",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
        slug: "gains-maintenance",
        date: "12 Janvier 2026",
        time: "11:10"
    },
    {
        title: "Le Décret Tertiaire 2024 : Tout ce qu'il faut savoir pour l'industrie",
        excerpt: "Découvrez les obligations légales et comment le relamping LED vous permet d'atteindre les objectifs d'efficacité énergétique.",
        category: "Réglementation",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        slug: "decret-tertiaire",
        date: "10 Janvier 2026",
        time: "14:30"
    },
    {
        title: "Comment financer votre projet LED grâce aux CEE ?",
        excerpt: "Le dispositif des Certificats d'Économies d'Énergie peut couvrir jusqu'à 100% de votre investissement. Voici la marche à suivre.",
        category: "Financement",
        readTime: "4 min",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
        slug: "financement-cee",
        date: "08 Janvier 2026",
        time: "09:15"
    },
    {
        title: "Productivité et éclairage : le confort visuel en entrepôt",
        excerpt: "Une étude montre que la qualité de la lumière réduit les erreurs logistiques et améliore le bien-être des opérateurs.",
        category: "Actualités",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        slug: "productivite-eclairage",
        date: "05 Janvier 2026",
        time: "16:45"
    }
];

const Expertise = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            <main className="pt-32 pb-24">
                <div className="container px-4">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                        <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-foreground font-medium">Actualités</span>
                    </nav>

                    <header className="max-w-3xl mb-16">
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-slate-900">
                            Centre d'<span className="text-blue-600">Actualités</span> Square
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Retrouvez nos analyses détaillées sur l'efficacité énergétique, les réglementations industrielles et les innovations technologiques du secteur de l'éclairage.
                        </p>
                    </header>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {expertisePosts.map((post, index) => (
                            <article
                                key={index}
                                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5" /> {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="font-display text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                                        {post.title}
                                    </h2>

                                    <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="pt-6 border-t border-slate-100 mt-auto">
                                        <Link
                                            to={`/expertise/${post.slug}`}
                                            className="text-sm font-bold inline-flex items-center text-slate-900 group-hover:text-blue-600 transition-all"
                                        >
                                            Lire la suite <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Newsletter / CTA Section */}
                    <div className="mt-24 bg-blue-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">Restez informé des aides et normes</h3>
                            <p className="text-blue-100 text-lg mb-10">
                                Abonnez-vous à notre veille réglementaire et technologique pour optimiser votre parc industriel.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <input
                                    type="email"
                                    placeholder="Votre adresse email"
                                    className="px-6 py-4 rounded-xl text-slate-900 focus:outline-none w-full sm:w-80"
                                />
                                <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-colors">
                                    S'abonner
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default Expertise;
