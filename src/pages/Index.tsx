import { useThemeInitialization } from "@/hooks/useThemeInitialization";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import PhaseSection from "@/components/PhaseSection";
import MentorSection from "@/components/MentorSection";
import WhatYouGet from "@/components/WhatYouGet";
import BonusSection from "@/components/BonusSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import ScrollAnimateWrapper from "@/components/ScrollAnimateWrapper";
import ThemeToggle from "@/components/ThemeToggle";

const animatedSections = [
  { Component: WhoIsThisFor, delay: 0 },
  { Component: ProblemSection, delay: 100 },
  { Component: PhaseSection, delay: 100 },
  { Component: MentorSection, delay: 100 },
  { Component: WhatYouGet, delay: 100 },
  { Component: BonusSection, delay: 100 },
  { Component: CTASection, delay: 100 },
];

const Index = () => {
  useThemeInitialization();

  return (
    <main className="min-h-screen bg-background">
      {/* <ThemeToggle /> */}
      <HeroSection />
      
      {animatedSections.map(({ Component, delay }, index) => (
        <ScrollAnimateWrapper key={index} delay={delay}>
          <Component />
        </ScrollAnimateWrapper>
      ))}
      
      <Footer />
      <StickyCtaBar />
    </main>
  );
};

export default Index;
