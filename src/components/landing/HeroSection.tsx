import { motion } from "framer-motion";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    />
    <div className="absolute inset-0 bg-primary/85" />

    <div className="absolute inset-0 opacity-[0.04]">
      <div className="h-full w-full" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
    </div>

    <motion.div
      className="absolute top-20 right-[5%] w-48 h-48 md:right-[15%] md:w-72 md:h-72 rounded-full border border-secondary/20"
      animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute bottom-32 left-[5%] w-32 h-32 md:left-[10%] md:w-48 md:h-48 rounded-full border border-secondary/15"
      animate={{ scale: [1, 1.15, 1], rotate: [0, -90, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute top-[40%] left-[2%] w-2 h-2 md:left-[5%] rounded-full bg-secondary/40"
      animate={{ y: [0, -30, 0], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
    <motion.div
      className="absolute top-[30%] right-[2%] w-1.5 h-1.5 md:right-[8%] rounded-full bg-secondary/30"
      animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 5, repeat: Infinity }}
    />

    <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-5xl py-32">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "80px" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-0.5 bg-secondary mx-auto mb-10"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-secondary font-sans text-sm tracking-[0.3em] uppercase mb-8"
      >
        Verdant Capital Partners Limited
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-primary-foreground mb-8"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Precision Over Speculation.
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-secondary"
        >
          Sustainable Wealth Creation.
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="text-lg md:text-xl text-primary-foreground/70 font-sans font-light tracking-wide max-w-2xl mx-auto mb-12"
      >
        Institutional grade portfolio management for discerning investors across Africa.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        className="flex justify-center gap-6"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1, delay: 2 }}
          className="h-0.5 bg-secondary/40 self-center"
        />
        <span className="text-secondary/60 font-sans text-xs tracking-[0.2em] uppercase">Est. 2011 · Lagos, Nigeria</span>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1, delay: 2 }}
          className="h-0.5 bg-secondary/40 self-center"
        />
      </motion.div>
    </div>

    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
        <motion.div
          className="w-1 h-2 bg-secondary rounded-full"
          animate={{ opacity: [1, 0], y: [0, 8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;