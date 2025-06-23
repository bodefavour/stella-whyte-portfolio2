import React from "react";
import { NavHeroCombo } from "./components/HeroSection";
import AchievementSection from "./components/achievement";
import { TimelineSection } from "./components/TimelineSection";

const App: React.FC = () => {
  return (
    <main>
      <NavHeroCombo />
      <AchievementSection />
      <TimelineSection />
    </main>
  );
};

export default App;