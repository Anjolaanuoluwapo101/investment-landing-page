import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

const CeoSection = () => {
  const accent = useScrollAnimation("fade", 0);
  const text = useScrollAnimation("up", 0.2);
  const signature = useScrollAnimation("fade", 0.5);

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-muted blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <div ref={accent.ref} style={accent.style} className="flex justify-center mb-8">
          <Quote className="w-12 h-12 text-secondary/50" />
        </div>

        <div ref={text.ref} style={text.style} className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            A Message from Our CEO
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-10" />

          <div className="space-y-6 text-primary-foreground/80 font-sans leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
            <p>
              Since we opened our doors in 2011, Verdant Capital Partners has been guided by a singular conviction: that the African continent, and Nigeria in particular, represents one of the greatest long term investment opportunities of our generation.
            </p>
            <p>
              In a market where short term speculation is common, we have chosen a different path. We believe in rigorous fundamental analysis, transparent governance, and the patient deployment of capital into sectors that drive real economic growth, from infrastructure and real estate to agriculture and technology.
            </p>
            <p>
              Our promise to every investor is straightforward: we will treat your capital with the same discipline and care with which we manage our own. That is not a slogan. It is a standard we hold ourselves to, every single day.
            </p>
          </div>
        </div>

        <div ref={signature.ref} style={signature.style} className="mt-12 text-center">
          <div className="inline-block">
            <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
            <p className="font-serif text-xl font-semibold text-primary-foreground">
              Adebayo Ogundimu
            </p>
            <p className="text-primary-foreground/60 font-sans text-sm mt-1">
              Chief Executive Officer
            </p>
            <p className="text-primary-foreground/60 font-sans text-sm">
              Verdant Capital Partners Limited
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoSection;