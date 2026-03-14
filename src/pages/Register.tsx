import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-sans text-sm mb-10 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>

          <div className="lg:hidden mb-8">
            <img src={logo} alt="Verdant Capital Partners" className="h-10 w-auto mb-6" />
          </div>

          <h1 className="font-serif text-3xl font-bold text-primary mb-2">Create Account</h1>
          <p className="text-muted-foreground font-sans mb-10">Begin your journey towards sustainable wealth creation.</p>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name" className="font-sans text-sm font-medium text-foreground">First Name</Label>
                <Input id="first-name" placeholder="First name" className="h-12 border-border focus:border-secondary focus:ring-secondary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name" className="font-sans text-sm font-medium text-foreground">Last Name</Label>
                <Input id="last-name" placeholder="Last name" className="h-12 border-border focus:border-secondary focus:ring-secondary" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-sans text-sm font-medium text-foreground">Email Address</Label>
              <Input id="email" type="email" placeholder="Enter your email" className="h-12 border-border focus:border-secondary focus:ring-secondary" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username" className="font-sans text-sm font-medium text-foreground">Username</Label>
              <Input id="username" placeholder="Choose a username" className="h-12 border-border focus:border-secondary focus:ring-secondary" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="font-sans text-sm font-medium text-foreground">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="h-12 border-border focus:border-secondary focus:ring-secondary pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="accent-secondary w-4 h-4 mt-0.5" />
              <span className="font-sans text-sm text-muted-foreground">
                I agree to the <a href="#" className="text-secondary hover:underline">Terms of Service</a> and <a href="#" className="text-secondary hover:underline">Privacy Policy</a>
              </span>
            </div>
            <Button className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-sans text-base">
              Create Account
            </Button>
            <p className="text-center font-sans text-sm text-muted-foreground">
              Already have an account?{" "}
              <button onClick={() => navigate("/login")} className="text-secondary hover:underline font-medium">Login</button>
            </p>
          </div>
        </motion.div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 bg-primary relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="h-full w-full" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 md:bottom-20 md:left-20 md:w-64 md:h-64 rounded-full border border-secondary/20"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 text-center px-12">
          <img src={logo} alt="Verdant Capital Partners" className="h-16 w-auto mx-auto mb-4" />
          <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-4">Start Investing Smarter</h2>
          <p className="text-primary-foreground/60 font-sans max-w-sm mx-auto">
            Join a community of forward-thinking investors building sustainable wealth across Nigeria.
          </p>
          <div className="w-16 h-0.5 bg-secondary mx-auto mt-8" />
        </div>
      </div>
    </div>
  );
};

export default Register;