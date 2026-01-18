import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "L'audit énergétique est-il vraiment 100% gratuit ?",
        answer:
            "Oui, absolument. Nous réalisons une étude complète de vos installations actuelles et une projection chiffrée de vos économies sans aucun frais ni engagement de votre part. C'est notre investissement pour vous prouver la rentabilité du projet.",
    },
    {
        question: "L'installation va-t-elle perturber mon activité ?",
        answer:
            "Nos équipes interviennent du lundi au vendredi. Sur les zones de production, une gêne ponctuelle est possible, mais nos installateurs s'adaptent pour se mettre en retrait et faciliter votre travail dès que nécessaire.",
    },
    {
        question: "Quelles sont les garanties sur le matériel ?",
        answer:
            "Tous nos luminaires LED industriels sont garantis 5 ans pièces et main d'œuvre. Avec une durée de vie de 100 000 heures (environ 10 ans), vous êtes tranquille pour longtemps. Plus de maintenance à gérer.",
    },
    {
        question: "À partir de quand mon installation Square devient-elle rentable ?",
        answer:
            "En moyenne, nos clients rentabilisent leur investissement en 16 mois. Dès le premier mois, les économies sur votre facture d'électricité couvrent souvent le coût du leasing si vous choisissez cette option.",
    },
    {
        question: "Existe-t-il des aides de l'État pour financer le relamping LED ?",
        answer: (
            <>
                Oui, votre projet est éligible aux <strong>Certificats d'Économie d'Énergie (CEE)</strong>. Ces primes peuvent financer jusqu'à 80% de votre installation. Vous pouvez consulter les détails du dispositif sur le site du{" "}
                <a href="https://www.ecologie.gouv.fr/dispositif-des-certificats-deconomies-denergie-cee" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                    Ministère de la Transition Écologique
                </a>.
            </>
        ),
    },
];

const FAQ = () => {
    return (
        <section className="py-12 md:py-20 bg-background">
            <div className="container px-4 max-w-3xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
                        FAQ sur le Relamping LED Industriel
                    </h2>
                    <p className="text-muted-foreground">
                        Tout savoir sur l'optimisation de votre éclairage LED industriel et vos économies d'énergie.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors text-lg">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ;
