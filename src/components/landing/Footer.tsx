import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const content = useScrollAnimation("fade", 0);

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Approach", href: "#approach" },
    { name: "What We Do", href: "#whatwedo" },
    { name: "Contact Us", href: "#contact" },
  ];

  const services = [
    "Fixed Income & Money Market",
    "Real Estate Investment",
    "Equity Portfolio Management",
    "Alternative Assets",
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden pt-10">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-muted blur-3xl" />
      </div>

      <div ref={content.ref} style={content.style} className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <img src={logo} alt="Verdant Capital Partners" className="h-14 w-auto mt-4 mb-4 filter" />
              <p className="text-primary-foreground/70 font-sans text-sm leading-relaxed max-w-xs">
                Building sustainable wealth through disciplined investment strategies across Nigeria and West Africa.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-xl font-semibold text-primary-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 font-sans text-sm block py-1">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-xl font-semibold text-primary-foreground mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="text-primary-foreground/80 font-sans text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-xl font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a href="mailto:info@verdantcapitalng.com" className="flex items-start gap-3 text-primary-foreground/80 hover:text-secondary transition-colors group">
                <div className="mt-1 w-5 h-5 flex-shrink-0">
                  <Mail size={16} className="group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="font-sans text-sm block">info@verdantcapitalng.com</span>
                  <span className="font-sans text-xs text-primary-foreground/60 block">Email us anytime</span>
                </div>
              </a>
              <a href="tel:+2341280510" className="flex items-start gap-3 text-primary-foreground/80 hover:text-secondary transition-colors group">
                <div className="mt-1 w-5 h-5 flex-shrink-0">
                  <Phone size={16} className="group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="font-sans text-sm block">+234 1 280 5100</span>
                  <span className="font-sans text-xs text-primary-foreground/60 block">Mon-Fri 8AM-5PM WAT</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
            <p className="text-primary-foreground/50 font-sans text-sm text-center md:text-left">
              © {new Date().getFullYear()} Verdant Capital Partners Limited (RC 1428753). All rights reserved. SEC Reg. No. SEC/DLR/2011/045.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/50 hover:text-secondary font-sans text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/50 hover:text-secondary font-sans text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/50 hover:text-secondary font-sans text-sm transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;