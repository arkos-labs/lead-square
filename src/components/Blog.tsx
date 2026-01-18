import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

interface BlogPost {
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    image: string;
}

const posts: BlogPost[] = [
    {
        title: "Le Décret Tertiaire 2024 : Tout ce qu'il faut savoir pour l'industrie",
        excerpt: "Découvrez les obligations légales et comment le relamping LED vous permet d'atteindre les objectifs d'efficacité énergétique.",
        category: "Réglementation",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Comment financer votre projet LED grâce aux CEE ?",
        excerpt: "Le dispositif des Certificats d'Économies d'Énergie peut couvrir jusqu'à 100% de votre investissement. Voici la marche à suivre.",
        category: "Financement",
        readTime: "4 min",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Productivité et éclairage : le confort visuel en entrepôt",
        excerpt: "Une étude montre que la qualité de la lumière réduit les erreurs logistiques et améliore le bien-être des opérateurs.",
        category: "Actualités",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    },
];

const Blog = () => {
    return (
        <section id="expertise" className="py-24 bg-white">
            <div className="container px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                            Centre d' <span className="gradient-text">Actualités</span> Square
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Décryptage des normes, conseils techniques et stratégies d'économies d'énergie pour les leaders de l'industrie.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
                    >
                        Voir tous les articles <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <article
                            key={index}
                            className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {post.readTime}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <BookOpen className="w-3 h-3" /> Actualités
                                    </span>
                                </div>

                                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                                    {post.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="pt-4 border-t border-gray-50">
                                    <span className="text-sm font-bold inline-flex items-center text-gray-900 group-hover:text-primary transition-colors">
                                        Lire l'article <ArrowRight className="w-4 h-4 ml-2" />
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
