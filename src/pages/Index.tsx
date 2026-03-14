import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ApproachSection from "@/components/landing/ApproachSection";
import StatsSection from "@/components/landing/StatsSection";
import WhatWeDoSection from "@/components/landing/WhatWeDoSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import VisionSection from "@/components/landing/VisionSection";
import ContactSection from "@/components/landing/ContactSection";
import CeoSection from "@/components/landing/CeoSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <>
    <Navbar />
    <main className="pt-20 overflow-x-hidden">
      <HeroSection />
      <ApproachSection />
      <StatsSection />
      <WhatWeDoSection />
      <TestimonialsSection />
      <VisionSection />
      <ContactSection />
      <CeoSection />
      <AboutSection />
    </main>
    <Footer />
  </>
);

export default Index;
