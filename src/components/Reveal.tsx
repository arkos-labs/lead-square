
import { useEffect, useRef, useState } from "react";

type RevealProps = {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
};

export const Reveal = ({
    children,
    width = "fit-content",
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.5,
}: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
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

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    const getTransform = () => {
        if (!isVisible) {
            switch (direction) {
                case "up":
                    return "translateY(75px)";
                case "down":
                    return "translateY(-75px)";
                case "left":
                    return "translateX(75px)";
                case "right":
                    return "translateX(-75px)";
                case "none":
                default:
                    return "none";
            }
        }
        return "none";
    };

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                width,
                overflow: "visible", // Changed from hidden to visible to avoid clipping shadows/tooltips
            }}
            className={className}
        >
            <div
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: getTransform(),
                    transition: `all ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
                }}
            >
                {children}
            </div>
        </div>
    );
};
