import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VisionSection = () => {
  const heading = useScrollAnimation("up", 0);
  const vision = useScrollAnimation("left", 0.2);
  const commitment = useScrollAnimation("right", 0.3);

  return (
    <section className="py-12 lg:py-16 bg-muted">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div ref={heading.ref} style={heading.style}>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Vision & Commitment
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-16" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div ref={vision.ref} style={vision.style} className="border-l-2 border-secondary pl-8">
            <h3 className="font-serif text-xl font-semibold text-primary mb-4">Our Vision</h3>
            <p className="text-foreground/80 font-sans leading-relaxed text-base md:text-lg">
              To be the most trusted investment management firm in West Africa, recognised for delivering consistent, risk adjusted returns and setting the standard for governance, transparency, and investor protection across the continent.
            </p>
          </div>
          <div ref={commitment.ref} style={commitment.style} className="border-l-2 border-secondary pl-8">
            <h3 className="font-serif text-xl font-semibold text-primary mb-4">Our Commitment</h3>
            <p className="text-foreground/80 font-sans leading-relaxed text-base md:text-lg">
              For over 13 years, we have remained committed to transparency, regulatory compliance, and long term value creation. We operate under the oversight of the Securities and Exchange Commission of Nigeria and adhere to the highest standards of corporate governance. At Verdant Capital Partners, growth isn't rushed. It's engineered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;