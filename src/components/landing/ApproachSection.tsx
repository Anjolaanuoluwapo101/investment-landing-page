import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, ShieldCheck, TrendingUp } from "lucide-react";

const principles = [
  {
    title: "Precision Over Speculation",
    text: "Every investment decision is backed by rigorous fundamental analysis, macroeconomic research, and structured risk evaluation. We prioritise calculated growth over market hype.",
    icon: Target,
  },
  {
    title: "Capital Preservation First",
    text: "Growth matters, but protecting capital matters more. Our frameworks are designed to navigate naira volatility, inflation cycles, and global headwinds while maintaining long term stability.",
    icon: ShieldCheck,
  },
  {
    title: "Sustainable Expansion",
    text: "We focus on scalable opportunities that create durable economic value across Nigeria and West Africa, aligning financial performance with responsible investment standards.",
    icon: TrendingUp,
  },
];

const ApproachSection = () => {
  const heading = useScrollAnimation("up", 0);

  return (
    <section className="py-12 lg:py-16 bg-muted">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div ref={heading.ref} style={heading.style} className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Approach
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto">
            We operate at the intersection of strategy and sustainability.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((p, i) => {
            const card = useScrollAnimation(i === 0 ? "left" : i === 2 ? "right" : "up", 0.15 * i);
            const Icon = p.icon;
            return (
              <div key={p.title} ref={card.ref} style={card.style}>
                <Card className="bg-background border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-none bg-primary flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-500">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-primary mb-4">{p.title}</h3>
                    <p className="text-foreground/70 font-sans leading-relaxed">{p.text}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;