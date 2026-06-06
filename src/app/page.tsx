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
    <main className="relative overflow-hidden bg-[#011a14] text-emerald-50">

      {/* Global gradient background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,#0b3b2e,transparent_40%),radial-gradient(circle_at_bottom,#022c22,transparent_35%)]" />

      <section className="relative">
        <HeroSection />
      </section>

      <section className="relative">
        <Intro />
      </section>

      <section className="relative">
        <About />
      </section>

      <section className="relative">
        <Experience />
      </section>

      <section className="relative">
        <QuoteSection />
      </section>

      <section className="relative">
        <SkillsSection />
      </section>

      <section className="relative">
        <MyProjects />
      </section>

      <section className="relative">
        <HireMe />
      </section>

    </main>
  );
}