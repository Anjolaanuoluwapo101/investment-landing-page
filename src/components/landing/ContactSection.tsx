import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const ContactSection = () => {
  const heading = useScrollAnimation("up", 0);
  const formAnim = useScrollAnimation("left", 0.2);
  const infoAnim = useScrollAnimation("right", 0.2);

  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      const res = await fetch("https://formspree.io/f/mgolqzrq", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-12 lg:py-16 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div ref={heading.ref} style={heading.style} className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Contact Us
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto">
            Have a question or concern? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Column */}
          <div ref={infoAnim.ref} style={infoAnim.style} className="space-y-8">
            <div className="bg-background/70 backdrop-blur-sm border border-border/30 rounded-xl p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                Get In Touch
              </h3>
              <p className="text-foreground/80 font-sans leading-relaxed text-lg mb-6">
                Whether you have a complaint, inquiry, or feedback, our team is ready to assist you. We aim to respond within 24 business hours.
              </p>
              <div className="space-y-4 text-foreground/70 font-sans">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Send className="w-4 h-4 text-secondary" />
                  </div>
                  <span>info@verdantcapitalng.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div ref={formAnim.ref} style={formAnim.style}>
            <div className="bg-background/70 backdrop-blur-sm border border-border/30 rounded-xl p-8 shadow-sm">
              {formState === "success" ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle className="w-16 h-16 text-secondary mx-auto" />
                  <h3 className="font-serif text-2xl font-semibold text-primary">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setFormState("idle")}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="text-foreground/80 font-sans">
                      Full Name
                    </Label>
                    <Input
                      id="contact-name"
                      name="name"
                      required
                      maxLength={100}
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-border/50 focus:border-secondary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email" className="text-foreground/80 font-sans">
                      Email Address
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      maxLength={255}
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border/50 focus:border-secondary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-subject" className="text-foreground/80 font-sans">
                      Subject
                    </Label>
                    <Input
                      id="contact-subject"
                      name="subject"
                      required
                      maxLength={200}
                      placeholder="Complaint / Inquiry / Feedback"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-background border-border/50 focus:border-secondary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message" className="text-foreground/80 font-sans">
                      Message
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      required
                      maxLength={2000}
                      rows={5}
                      placeholder="Describe your concern in detail..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background border-border/50 focus:border-secondary resize-none"
                    />
                  </div>

                  {formState === "error" && (
                    <div className="flex items-center gap-2 text-destructive text-sm font-sans">
                      <AlertCircle className="w-4 h-4" />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={formState === "sending"}
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-sans"
                  >
                    {formState === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
