import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
    Zap,
    TrendingDown,
    Shield,
    Clock,
    CheckCircle2,
    Phone,
    Mail,
    MapPin,
    Star,
    ArrowRight,
    Lightbulb,
    Euro
} from "lucide-react";

const LandingPage = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        entreprise: "",
        surface: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulation d'envoi - À remplacer par votre logique d'envoi réelle
            await new Promise(resolve => setTimeout(resolve, 1500));

            toast({
                title: "✅ Demande envoyée avec succès !",
                description: "Nous vous contacterons dans les plus brefs délais.",
            });

            // Réinitialiser le formulaire
            setFormData({
                nom: "",
                prenom: "",
                email: "",
                telephone: "",
                entreprise: "",
                surface: "",
                message: ""
            });
        } catch (error) {
            toast({
                title: "❌ Erreur",
                description: "Une erreur est survenue. Veuillez réessayer.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const benefits = [
        {
            icon: TrendingDown,
            title: "Jusqu'à 75% d'économies",
            description: "Réduisez drastiquement votre facture énergétique"
        },
        {
            icon: Euro,
            title: "Financement CEE",
            description: "Profitez des aides pour financer votre projet"
        },
        {
            icon: Lightbulb,
            title: "Technologie LED",
            description: "Éclairage de qualité supérieure et durable"
        },
        {
            icon: Clock,
            title: "Installation rapide",
            description: "Mise en service en moins de 48h"
        }
    ];

    const features = [
        "Audit énergétique gratuit",
        "Accompagnement CEE complet",
        "Garantie 5 ans",
        "Maintenance incluse",
        "ROI en moins de 2 ans",
        "Conformité décret tertiaire"
    ];

    const testimonials = [
        {
            name: "Jean Dupont",
            company: "Entreprise XYZ",
            text: "Nous avons réduit notre facture d'électricité de 70% grâce à Square Solutions. Un investissement rentabilisé en 18 mois !",
            rating: 5
        },
        {
            name: "Marie Martin",
            company: "Commerce ABC",
            text: "Service impeccable, installation rapide et résultats immédiats. Je recommande vivement !",
            rating: 5
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative container mx-auto px-4 py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white space-y-6"
                        >
                            <div className="inline-block">
                                <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    🎁 Offre Spéciale Facebook
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                Réduisez votre facture d'électricité de{" "}
                                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    75%
                                </span>
                            </h1>

                            <p className="text-xl text-blue-100">
                                Passez à l'éclairage LED professionnel avec un financement CEE jusqu'à 100%
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 * index }}
                                        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
                                    >
                                        <benefit.icon className="w-5 h-5 text-blue-400" />
                                        <span className="text-sm font-medium">{benefit.title}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 pt-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"></div>
                                    ))}
                                </div>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-sm text-blue-100">+500 clients satisfaits</span>
                            </div>
                        </motion.div>

                        {/* Right Column - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8"
                        >
                            <div className="text-center mb-6">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    Audit Gratuit
                                </h2>
                                <p className="text-gray-600">
                                    Découvrez vos économies potentielles en 2 minutes
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Prénom *
                                        </label>
                                        <Input
                                            type="text"
                                            name="prenom"
                                            value={formData.prenom}
                                            onChange={handleChange}
                                            required
                                            placeholder="Jean"
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Nom *
                                        </label>
                                        <Input
                                            type="text"
                                            name="nom"
                                            value={formData.nom}
                                            onChange={handleChange}
                                            required
                                            placeholder="Dupont"
                                            className="w-full"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email professionnel *
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="jean.dupont@entreprise.fr"
                                        className="w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Téléphone *
                                    </label>
                                    <Input
                                        type="tel"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        required
                                        placeholder="06 12 34 56 78"
                                        className="w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Entreprise *
                                    </label>
                                    <Input
                                        type="text"
                                        name="entreprise"
                                        value={formData.entreprise}
                                        onChange={handleChange}
                                        required
                                        placeholder="Nom de votre entreprise"
                                        className="w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Surface à éclairer (m²)
                                    </label>
                                    <Input
                                        type="text"
                                        name="surface"
                                        value={formData.surface}
                                        onChange={handleChange}
                                        placeholder="500"
                                        className="w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Message (optionnel)
                                    </label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Décrivez votre projet..."
                                        rows={3}
                                        className="w-full"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    {isSubmitting ? (
                                        "Envoi en cours..."
                                    ) : (
                                        <>
                                            Obtenir mon audit gratuit
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </>
                                    )}
                                </Button>

                                <p className="text-xs text-gray-500 text-center">
                                    🔒 Vos données sont sécurisées et ne seront jamais partagées
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white/5 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Pourquoi choisir Square Solutions ?
                        </h2>
                        <p className="text-blue-100 text-lg">
                            L'expertise LED au service de votre rentabilité
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-300"
                            >
                                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                                <span className="text-white font-medium">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ils nous font confiance
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-white mb-4 italic">"{testimonial.text}"</p>
                                <div>
                                    <p className="text-blue-300 font-semibold">{testimonial.name}</p>
                                    <p className="text-blue-200 text-sm">{testimonial.company}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Prêt à réduire vos coûts énergétiques ?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Rejoignez les centaines d'entreprises qui ont déjà fait le choix de l'efficacité
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#main-content">
                                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold shadow-xl">
                                    Demander mon audit gratuit
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </a>
                            <a href="tel:0123456789">
                                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                                    <Phone className="mr-2 w-5 h-5" />
                                    Appelez-nous
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 py-8 border-t border-white/10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                        <div>
                            <h3 className="text-white font-bold text-lg mb-3">Square Solutions</h3>
                            <p className="text-blue-200 text-sm">
                                Expert en rénovation énergétique LED
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-3">Contact</h3>
                            <div className="space-y-2 text-blue-200 text-sm">
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <Phone className="w-4 h-4" />
                                    <span>01 23 45 67 89</span>
                                </div>
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <Mail className="w-4 h-4" />
                                    <span>contact@square-solutions.fr</span>
                                </div>
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <MapPin className="w-4 h-4" />
                                    <span>84 rue de Montreuil, 75011 Paris</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-3">Légal</h3>
                            <div className="space-y-2 text-blue-200 text-sm">
                                <a href="/mentions-legales" className="block hover:text-white transition-colors">
                                    Mentions légales
                                </a>
                                <a href="/politique-confidentialite" className="block hover:text-white transition-colors">
                                    Politique de confidentialité
                                </a>
                                <a href="/cgv" className="block hover:text-white transition-colors">
                                    CGV
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/10 text-center text-blue-200 text-sm">
                        <p>© 2024 Square Solutions. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
