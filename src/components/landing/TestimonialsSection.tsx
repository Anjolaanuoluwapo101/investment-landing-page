import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Verdant Capital has consistently demonstrated a level of professionalism and transparency that is rare in this market. Their disciplined approach to portfolio construction has delivered above benchmark results for our pension fund.",
    name: "Funke Adeyemi",
    title: "Head of Investments, Sterling Pension Managers Limited",
  },
  {
    quote: "Over eight years of partnership, their commitment to capital preservation during volatile naira cycles has been outstanding. They understand the Nigerian market deeply and act with genuine fiduciary responsibility.",
    name: "Emeka Obiora",
    title: "Chief Investment Officer, Atlantic Trust & Securities",
  },
  {
    quote: "What sets Verdant Capital apart is their ability to identify high quality opportunities across asset classes while maintaining strict risk controls. They are exactly the kind of partner institutional investors need in West Africa.",
    name: "Amina Bello Kano",
    title: "Managing Director, Sahel Capital Advisors",
  },
];

const TestimonialsSection = () => {
  const heading = useScrollAnimation("up", 0);

  return (
    <section className="py-12 lg:py-16 bg-muted">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div ref={heading.ref} style={heading.style} className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Partners Say
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto">
            Trusted by pension administrators, family offices, and institutional investors across Nigeria.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => {
            const card = useScrollAnimation("up", 0.15 * i + 0.2);
            return (
              <div key={t.name} ref={card.ref} style={card.style}>
                <Card className="bg-background border-border h-full shadow-sm hover:shadow-md transition-shadow duration-500">
                  <CardContent className="p-8 flex flex-col h-full">
                    <Quote className="w-8 h-8 text-secondary/40 mb-4 flex-shrink-0" />
                    <p className="text-foreground/70 font-sans leading-relaxed italic flex-1 mb-6">
                      "{t.quote}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-serif font-semibold text-primary">{t.name}</p>
                      <p className="text-muted-foreground font-sans text-sm">{t.title}</p>
                    </div>
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

export default TestimonialsSection;