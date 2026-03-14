import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "What We Do", href: "#whatwedo" },
  { label: "Contact", href: "#contact" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        <a href="#home" onClick={() => scrollTo("#home")}>
          <img src={logo} alt="Verdant Capital Partners" className="h-12 w-auto" />
        </a>

        <div className="hidden md:flex items-center">
          {navLinks.map((link, i) => (
            <div key={link.href} className="flex items-center">
              {i > 0 && (
                <span className="mx-1 text-secondary">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <line x1="10" y1="2" x2="10" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              )}
              <button
                onClick={() => scrollTo(link.href)}
                className="relative px-4 py-2 text-sm font-medium tracking-wide text-foreground/80 hover:text-secondary transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-3/4" />
              </button>
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
          <div className="flex gap-3 pt-2">
            <Button variant="outline" className="flex-1 border-primary text-primary" onClick={() => { setMobileOpen(false); navigate("/login"); }}>Login</Button>
            <Button className="flex-1 bg-secondary text-secondary-foreground" onClick={() => { setMobileOpen(false); navigate("/register"); }}>Register</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;