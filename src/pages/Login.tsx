import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="h-full w-full" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>
        <motion.div
          className="absolute top-10 right-10 w-48 h-48 md:top-20 md:right-20 md:w-64 md:h-64 rounded-full border border-secondary/20"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 text-center px-12">
          <img src={logo} alt="Verdant Capital Partners" className="h-16 w-auto mx-auto mb-4" />
          <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-4">Welcome Back</h2>
          <p className="text-primary-foreground/60 font-sans max-w-sm mx-auto">
            Access your portfolio dashboard and track your investment performance.
          </p>
          <div className="w-16 h-0.5 bg-secondary mx-auto mt-8" />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
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

          <h1 className="font-serif text-3xl font-bold text-primary mb-2">Login</h1>
          <p className="text-muted-foreground font-sans mb-10">Enter your credentials to access your account.</p>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="font-sans text-sm font-medium text-foreground">Username</Label>
              <Input id="username" placeholder="Enter your username" className="h-12 border-border focus:border-secondary focus:ring-secondary" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="font-sans text-sm font-medium text-foreground">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-secondary w-4 h-4" />
                <span className="font-sans text-sm text-muted-foreground">Remember me</span>
              </label>
              <a href="#" className="font-sans text-sm text-secondary hover:underline">Forgot password?</a>
            </div>
            <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-sans text-base">
              Sign In
            </Button>
            <p className="text-center font-sans text-sm text-muted-foreground">
              Don't have an account?{" "}
              <button onClick={() => navigate("/register")} className="text-secondary hover:underline font-medium">Register</button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;