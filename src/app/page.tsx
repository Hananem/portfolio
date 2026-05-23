"use client";


import Experience from "@/components/experience";
import Intro from "@/components/intro";
import About from "@/components/about";
import HireMe from "@/components/hire";
import MyProjects from "@/components/projects";
import SkillsSection from "@/components/skills";
import QuoteSection from "@/components/last";
import HeroSection from "@/components/herosection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#011a14] text-emerald-50">

      {/* Hero */}
      <HeroSection />

      <Intro />

      <About />

      <Experience />

      <QuoteSection />

      <SkillsSection />

      <MyProjects />

      <HireMe />

    </main>
  );
}