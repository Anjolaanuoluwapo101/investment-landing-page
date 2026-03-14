import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 13, suffix: "+", label: "Years of Excellence" },
  { value: 85, suffix: "B+", label: "Assets Under Management (₦)" },
  { value: 200, suffix: "+", label: "Institutional Clients" },
  { value: 97, suffix: "%", label: "Client Retention Rate" },
];

const CountUp = ({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return <span>{count}{suffix}</span>;
};

const StatsSection = () => {
  const section = useScrollAnimation("up", 0);

  return (
    <section className="py-12 bg-primary">
      <div ref={section.ref} style={section.style} className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const item = useScrollAnimation("up", 0.15 * i);
            return (
              <div key={stat.label} ref={item.ref} style={item.style} className="text-center">
                <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} isVisible={item.isVisible} />
                </p>
                <p className="text-primary-foreground/70 font-sans text-sm tracking-wide uppercase">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;