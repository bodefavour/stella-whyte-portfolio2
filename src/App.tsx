import React from "react";
import { NavHeroCombo } from "./components/HeroSection";
import AchievementSection from "./components/achievement";
import { TimelineCarousel } from "./components/TimelineSection";

const App: React.FC = () => {
  return (
    <main>
      <NavHeroCombo />
      <AchievementSection />
      <TimelineCarousel />
    </main>
  );
};

export default App;