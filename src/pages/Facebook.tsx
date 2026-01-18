
import { useEffect } from "react";
import { ArrowRight, CheckCircle2, Facebook as FacebookIcon, Instagram, Linkedin, MessageCircle, Phone, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Facebook = () => {
    useEffect(() => {
        document.title = "Square Groupe | Bienvenue aux visiteurs Facebook";
    }, []);

    const scrollToSimulator = () => {
        // Si nous sommes sur la page d'accueil, scroller, sinon rediriger
        if (window.location.pathname === '/') {
            document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/#simulator';
        }
    };

    const socialLinks = [
        { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://linkedin.com/company/squarelighting", color: "hover:bg-blue-700" },
        { icon: <Instagram className="w-5 h-5" />, label: "Instagram", url: "https://instagram.com/squarelighting", color: "hover:bg-pink-600" },
        { icon: <Youtube className="w-5 h-5" />, label: "YouTube", url: "https://youtube.com/@squarelighting", color: "hover:bg-red-600" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Header />

            <main className="pt-24 pb-16">
                <div className="container px-4 mx-auto max-w-4xl">

                    {/* Header Section */}
                    <Reveal width="100%" direction="down">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center p-3 mb-6 bg-blue-100 rounded-full text-blue-600">
                                <FacebookIcon className="w-8 h-8" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
                                Bienvenue chez <span className="text-primary">Square Groupe</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Vous nous avez découvert sur Facebook ? Vous êtes au bon endroit pour réduire vos factures d'énergie industrielle.
                            </p>
                        </div>
                    </Reveal>

                    {/* Quick Actions (Mobile Optimized) */}
                    <div className="grid gap-4 md:grid-cols-2 mb-16">
                        <Reveal width="100%" delay={0.1}>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Audit Gratuit</h3>
                                <p className="text-muted-foreground mb-6">
                                    Analysez votre consommation actuelle et découvrez vos économies potentielles en 2 minutes.
                                </p>
                                <Button onClick={scrollToSimulator} className="w-full mt-auto" size="lg">
                                    Lancer mon audit gratuit <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </Reveal>

                        <Reveal width="100%" delay={0.2}>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Contact Direct</h3>
                                <p className="text-muted-foreground mb-6">
                                    Une question spécifique ? Nos experts sont disponibles pour échanger sur votre projet.
                                </p>
                                <div className="space-y-3 w-full mt-auto">
                                    <Button asChild variant="outline" className="w-full justify-start text-left" size="lg">
                                        <a href="tel:+33635880886">
                                            <Phone className="mr-3 w-5 h-5 text-green-600" />
                                            06 35 88 08 86
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" className="w-full justify-start text-left" size="lg">
                                        <Link to="/#contact">
                                            <MessageCircle className="mr-3 w-5 h-5 text-blue-600" />
                                            Formulaire de contact
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Why Choose Us (Simplified) */}
                    <Reveal width="100%" direction="up" delay={0.3}>
                        <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Pourquoi choisir Square Groupe ?</h2>
                                <ul className="grid md:grid-cols-3 gap-6 text-center">
                                    <li className="flex flex-col items-center">
                                        <span className="text-4xl font-bold mb-2">-70%</span>
                                        <span className="opacity-90">sur votre facture d'éclairage</span>
                                    </li>
                                    <li className="flex flex-col items-center">
                                        <span className="text-4xl font-bold mb-2">100%</span>
                                        <span className="opacity-90">Financement via CEE possible</span>
                                    </li>
                                    <li className="flex flex-col items-center">
                                        <span className="text-4xl font-bold mb-2">5 ans</span>
                                        <span className="opacity-90">Garantie matériel et main d'œuvre</span>
                                    </li>
                                </ul>
                            </div>
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        </div>
                    </Reveal>

                    {/* Connect on other platforms */}
                    <div className="text-center border-t pt-12">
                        <h3 className="text-lg font-semibold mb-6">Retrouvez-nous aussi sur</h3>
                        <div className="flex justify-center gap-4 flex-wrap">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm text-slate-700 transition-all ${social.color} hover:text-white hover:border-transparent`}
                                >
                                    {social.icon}
                                    <span>{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Facebook;
