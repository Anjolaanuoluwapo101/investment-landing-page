import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Fixed Income & Money Market",
    description: "Federal Government bonds, treasury bills, and high-yield money market instruments for stable, predictable returns"
  },
  {
    title: "Real Estate Investment",
    description: "Commercial and residential property portfolios across Lagos, Abuja, and key growth corridors in Nigeria"
  },
  {
    title: "Equity Portfolio Management",
    description: "Actively managed exposure to blue chip and mid cap equities listed on the Nigerian Exchange (NGX)"
  },
  {
    title: "Alternative & Private Market Assets",
    description: "Strategic allocations to agriculture, infrastructure, and technology ventures with high growth potential"
  },
];

const WhatWeDoSection = () => {
  const heading = useScrollAnimation("up", 0);
  const quote = useScrollAnimation("fade", 0.6);

  return (
    <section id="whatwedo" className="py-12 lg:py-16 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-5 w-48 h-48 md:top-20 md:left-10 md:w-64 md:h-64 rounded-full bg-secondary blur-3xl"></div>
        <div className="absolute bottom-10 right-5 w-32 h-32 md:bottom-20 md:right-10 md:w-48 md:h-48 rounded-full bg-primary blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <div ref={heading.ref} style={heading.style} className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            What We Do
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
            We build diversified portfolios tailored to the Nigerian and West African investment landscape
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, i) => {
            const item = useScrollAnimation("up", 0.1 * i + 0.2);
            return (
              <div 
                key={service.title} 
                ref={item.ref} 
                style={item.style}
                className="group"
              >
                <div className="bg-background border border-border rounded-xl p-8 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-foreground/70 font-sans text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div ref={quote.ref} style={quote.style} className="text-center max-w-4xl mx-auto">
          <div className="border-t border-border pt-12">
            <p className="text-muted-foreground font-sans italic text-lg md:text-xl mb-6">
              "Our investment philosophy is rooted in patience, rigour, and an unwavering commitment to the long-term prosperity of our clients."
            </p>
            <div className="w-12 h-0.5 bg-secondary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;