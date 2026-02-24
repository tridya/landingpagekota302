"use client";

import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import TeamSection from "@/app/components/TeamSection";
import ProjectSection from "@/app/components/ProjectSection";
import ProjectDetails from "@/app/components/ProjectDetails";
import ObjectivesSection from "@/app/components/ObjectivesSection";
import BenefitsSection from "@/app/components/BenefitsSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ProjectSection />
      <ProjectDetails />
      <ObjectivesSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
}
