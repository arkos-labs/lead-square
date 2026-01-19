import { Wrench, Eye, Shield, Zap, Award, Clock } from "lucide-react";
import ledBulbsImage from "@/assets/led-bulbs-closeup.jpg";
import officeImage from "@/assets/office-led-workspace.jpg";
import sustainabilityImage from "@/assets/sustainability-concept.jpg";

const benefits = [
  {
    icon: Wrench,
    title: "Maintenance Zéro",
    subtitle: "Pendant 10 ans",
    description: "Oubliez les interventions coûteuses. Nos LED industrielles affichent une durée de vie de 100 000 heures, soit plus de 10 ans en utilisation intensive. Zéro remplacement, zéro arrêt de production, zéro surcoût imprévu.",
    highlight: "100 000h de durée de vie",
  },
  {
    icon: Eye,
    title: "Confort Visuel Optimal",
    subtitle: "Pour vos équipes",
    description: "La fatigue visuelle des caristes diminue de 40% grâce à notre spectre lumineux calibré. Moins de maux de tête, moins d'erreurs de picking, plus de productivité. Un IRC > 90 pour une vision parfaite des couleurs et des codes-barres.",
    highlight: "-40% de fatigue visuelle",
  },
  {
    icon: Shield,
    title: "Conformité Garantie",
    subtitle: "RT2020 & ISO 50001",
    description: (
      <>
        Anticipez les réglementations. Square garantit la conformité au{" "}
        <a href="https://www.ecologie.gouv.fr/dispositif-eco-energie-tertiaire-deet" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
          Décret Tertiaire 2024
        </a>
        {" "}et à la{" "}
        <a href="https://www.rt-batiment.fr/la-re-2020-a-1.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
          RT2020
        </a>.
      </>
    ),
    highlight: "Certification incluse",
  },
  {
    icon: Zap,
    title: "Installation Express",
    subtitle: "Sans arrêt d'activité",
    description: "Notre équipe intervient en dehors de vos heures de production. Installation complète en 48h pour un entrepôt standard. Aucun impact sur votre activité.",
    highlight: "48h d'installation",
  },
  {
    icon: Award,
    title: "Garantie Résultats",
    subtitle: "Économies contractuelles",
    description: "Nous nous engageons par écrit sur vos économies. Si les résultats ne sont pas au rendez-vous après 12 mois, nous compensons la différence. Zéro risque pour vous.",
    highlight: "Engagement contractuel",
  },
  {
    icon: Clock,
    title: "Pilotage Intelligent",
    subtitle: "Éclairage adaptatif",
    description: "Détection de présence et ajustement automatique de l'intensité. Vos allées s'éclairent uniquement quand c'est nécessaire. Jusqu'à 30% d'économies supplémentaires.",
    highlight: "+30% d'économies",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-12 md:py-24">
      <div className="container px-4">


        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Solutions d'éclairage LED haute performance pour l'industrie et la logistique
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Maximisez vos économies d'énergie avec Square, l'expert en <strong>remplacement de lampes LED</strong> qui transforme votre environnement de travail. <a href="#audit-form" onClick={(e) => { e.preventDefault(); document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary hover:underline font-semibold">Commencez par un audit gratuit de votre installation</a>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group card-pro rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>

              <div className="mb-3">
                <h3 className="font-display text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-primary font-medium">{benefit.subtitle}</p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {benefit.description}
              </p>

              <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                {benefit.highlight}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Benefits;
