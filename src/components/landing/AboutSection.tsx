import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const heading = useScrollAnimation("up", 0);
  const para1 = useScrollAnimation("left", 0.2);
  const para2 = useScrollAnimation("right", 0.4);
  const imageAnim = useScrollAnimation("up", 0.1);

  return (
    <section id="about" className="py-12 lg:py-16 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-5 w-72 h-72 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-10 right-5 w-64 h-64 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div ref={heading.ref} style={heading.style} className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            About Us
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto">
            Building generational wealth through disciplined investment strategies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={imageAnim.ref} style={imageAnim.style} className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-lg border border-border/20">
              <img
                src="/images/about-us.png"
                alt="Professional investment team collaborating"
                className="w-full h-auto transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          <div className="space-y-8">
            <div ref={para1.ref} style={para1.style} className="group">
              <div className="bg-background/70 backdrop-blur-sm border border-border/30 rounded-xl p-7 shadow-sm hover:shadow transition-all duration-500">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors">
                  Our Foundation
                </h3>
                <p className="text-foreground/80 font-sans leading-relaxed text-lg">
                  Founded on February 26, 2009, Greener Vile Investment Inc. was established during one of the most pivotal periods in modern financial history. Where others saw uncertainty, we recognized an opportunity, not merely to invest, but to fundamentally rethink how capital should be stewarded for the long term.
                </p>
              </div>
            </div>

            <div ref={para2.ref} style={para2.style} className="group">
              <div className="bg-background/70 backdrop-blur-sm border border-border/30 rounded-xl p-7 shadow-sm hover:shadow transition-all duration-500">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors">
                  Who We Are Today
                </h3>
                <p className="text-foreground/80 font-sans leading-relaxed text-lg">
                  Over 17 years later, our core principles remain unchanged: disciplined strategy, rigorous risk management, and sustainable capital growth. We are a modern investment firm specializing in structured portfolio management, private market opportunities, real asset investments, and long term wealth architecture, combining data driven analysis with forward thinking strategy to deliver measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
