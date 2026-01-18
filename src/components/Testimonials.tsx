import { Star, Quote } from "lucide-react";
import warehouseImage from "@/assets/warehouse-testimonials.png";
import { useEffect, useState, useRef } from "react";

const CountUp = ({ end, duration = 2000, suffix = "", prefix = "", decimals = 0 }: { end: number, duration?: number, suffix?: string, prefix?: string, decimals?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function: easeOutQuart
      const easeOut = 1 - Math.pow(1 - percentage, 4);

      setCount(easeOut * end);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const testimonials = [
  {
    quote: "L'investissement a été rentabilisé en 14 mois, soit 4 mois avant les prévisions. Nos équipes ont immédiatement remarqué la différence de confort visuel.",
    author: "Marc Leblanc",
    role: "Directeur des Opérations",
    company: "Logistique Express Nord",
    savings: "47 000€/an",
  },
  {
    quote: "Nous étions inquiets pour la conformité RT2020. Square nous a non seulement mis en règle, mais a divisé notre facture par deux.",
    author: "Sophie Mercier",
    role: "Responsable RSE",
    company: "Groupe Frigostock",
    savings: "82 000€/an",
  },
  {
    quote: "Zéro intervention de maintenance depuis 3 ans. C'est exactement ce qu'ils avaient promis. Je recommande sans hésitation.",
    author: "Thomas Durant",
    role: "Directeur Technique",
    company: "Transports Duval",
    savings: "31 000€/an",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${warehouseImage})` }}
      />

      <div className="container px-4 relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Des résultats <span className="gradient-text">prouvés</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Testimonials (Span 2) */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div
                key={index}
                className="card-pro rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <p className="text-foreground mb-4 leading-relaxed text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                      <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {testimonial.savings}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Key Stats (Compact Vertical List) */}
          <div className="lg:col-span-1">
            <div className="card-pro rounded-xl p-8 border border-primary/20 h-full flex flex-col justify-center gap-8 bg-background/80 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-border/50 pb-4">
                <div>
                  <p className="text-3xl font-display font-bold text-primary"><CountUp end={2.4} suffix="M€" decimals={1} /></p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Économies / an</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-border/50 pb-4">
                <div>
                  <p className="text-3xl font-display font-bold text-primary"><CountUp end={350} prefix="+" /></p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Sites équipés</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-display font-bold text-primary"><CountUp end={16} /></p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Mois pour rentabiliser</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
