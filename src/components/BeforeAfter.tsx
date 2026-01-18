import { useState, useRef, useEffect } from "react";
import { ArrowLeftRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import afterImage from "@/assets/warehouse-before-final.jpg";
import beforeImage from "@/assets/warehouse-after-final.jpg";

const BeforeAfter = () => {
    const scrollToSimulator = () => {
        document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' });
    };

    const [sliderPosition, setSliderPosition] = useState(50);
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = () => setIsResizing(true);
    const handleMouseUp = () => setIsResizing(false);

    const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
        if (!isResizing || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        setSliderPosition(Math.min(maxSlider, Math.max(minSlider, x)));
    };

    const handleTouchMove = (e: React.TouchEvent | TouchEvent) => {
        if (!isResizing || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const touch = e.touches ? e.touches[0] : null;
        if (touch) {
            const x = ((touch.clientX - rect.left) / rect.width) * 100;
            setSliderPosition(Math.min(maxSlider, Math.max(minSlider, x)));
        }
    }

    const maxSlider = 95;
    const minSlider = 5;

    useEffect(() => {
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mousemove", handleMouseMove as any);
        document.addEventListener("touchend", handleMouseUp);
        document.addEventListener("touchmove", handleTouchMove as any); // Type cast for touch events

        return () => {
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mousemove", handleMouseMove as any);
            document.removeEventListener("touchend", handleMouseUp);
            document.removeEventListener("touchmove", handleTouchMove as any);
        };
    }, [isResizing]);


    return (
        <section className="py-12 md:py-24 bg-background overflow-hidden relative">
            <div className="container px-4">
                <Reveal width="100%" direction="up">
                    <div className="text-center mb-8 md:mb-16 max-w-3xl mx-auto">
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                            L'impact visuel est <span className="gradient-text">immédiat</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Faites glisser le curseur pour voir la différence entre un éclairage traditionnel vieillissant et notre technologie LED haute performance.
                        </p>
                    </div>
                </Reveal>

                <Reveal width="100%" direction="up" delay={0.2}>
                    <div
                        ref={containerRef}
                        className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border select-none"
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleMouseDown}
                    >
                        {/* After Image (Full width, underneath) */}
                        <img
                            src={afterImage}
                            alt="Résultat après relamping LED industriel - Entrepôt Square haute luminosité"
                            className="absolute inset-0 w-full h-full object-cover contrast-110 saturate-105"
                            loading="lazy"
                        />
                        <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                            APRÈS
                        </div>


                        {/* Before Image (Clipped on top) */}
                        <div
                            className="absolute inset-0 w-full h-full overflow-hidden"
                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                            <img
                                src={beforeImage}
                                alt="Avant relamping LED - Éclairage industriel obsolète et énergivore"
                                className="absolute inset-0 w-full h-full object-cover contrast-110 saturate-105"
                                loading="lazy"
                            />
                            <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                AVANT
                            </div>
                        </div>

                        {/* Slider Handle */}
                        <div
                            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center hover:scale-110 transition-transform"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-primary">
                                <ArrowLeftRight className="w-5 h-5 text-primary" />
                            </div>
                        </div>
                    </div>
                </Reveal>

                <Reveal width="100%" direction="up" delay={0.4}>
                    <div className="flex justify-center mt-12">
                        <Button
                            onClick={scrollToSimulator}
                            variant="cta"
                            size="lg"
                            className="rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl"
                        >
                            Demandez ma simulation gratuite
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default BeforeAfter;
