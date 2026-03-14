import { useEffect, useRef, useState } from "react";

type Direction = "left" | "right" | "up" | "down" | "fade";

export const useScrollAnimation = (direction: Direction = "up", delay: number = 0) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    switch (direction) {
      case "left": return "translateX(-60px)";
      case "right": return "translateX(60px)";
      case "down": return "translateY(40px)";
      case "fade": return "none";
      default: return "translateY(40px)";
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "none" : getTransform(),
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  };

  return { ref, style, isVisible };
};
