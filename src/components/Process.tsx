import { FileSearch, Wrench, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
    {
        icon: FileSearch,
        title: "1. Audit Gratuit",
        description: "Nos experts analysent vos installations actuelles et définissent votre potentiel d'économies.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: Wrench,
        title: "2. Installation Premium",
        description: "Nos équipes certifiées installent votre nouvel éclairage LED sans interrompre votre activité.",
        color: "bg-indigo-100 text-indigo-600",
    },
    {
        icon: TrendingUp,
        title: "3. Économies Immédiates",
        description: "Votre facture baisse dès le premier mois. Le projet est autofinancé par les économies.",
        color: "bg-emerald-100 text-emerald-600",
    },
];

const Process = () => {
    return (
        <section id="process" className="py-12 md:py-24 bg-secondary/20 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="container px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                        Bureau d'étude et étude photométrique : Votre projet clé en main
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Nous avons simplifié la transition énergétique de votre <strong>éclairage industriel</strong> pour qu'elle soit transparente et sans effort pour vous.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative max-w-6xl mx-auto mb-8 md:mb-16">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-border via-primary/30 to-border -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center group">
                            {/* Step Number Badge */}
                            <div
                                className={`w-24 h-24 rounded-2xl ${step.color} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10 bg-background border-4 border-white`}
                            >
                                <step.icon className="w-10 h-10" />
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                                {step.description}
                            </p>

                            {/* Mobile Arrow */}
                            {index < steps.length - 1 && (
                                <div className="md:hidden mt-8 mb-4">
                                    <ArrowRight className="w-6 h-6 text-border rotate-90" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <a
                        href="#audit-form"
                        onClick={(e) => { e.preventDefault(); document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg font-bold transition-all shadow-lg hover:shadow-xl"
                    >
                        Demander mon audit gratuit
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Process;
