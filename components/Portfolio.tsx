// components/Portfolio.tsx
"use client";

import {
  Navbar,
  Hero,
  AboutA,
  Projects,
  Contact,
  CTA,
} from "@/components/sections";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white font-archivo antialiased overflow-hidden">
      <Navbar />
      <Hero />
      <AboutA />
      <Projects />
      <Contact />
      <CTA />
    </div>
  );
};

export default Portfolio;
