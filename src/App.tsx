import React from "react";
import { NavHeroCombo } from "./components/HeroSection";
import AchievementSection from "./components/achievement";
import { TimelineCarousel } from "./components/TimelineSection";
import { AboutSection } from "./components/AboutSection";

const App: React.FC = () => {
  return (
    <main>
      <NavHeroCombo />
      <AboutSection />
      <TimelineCarousel />
    </main>
  );
};

export default App;