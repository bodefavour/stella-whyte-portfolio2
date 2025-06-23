import React from "react";
import { NavHeroCombo } from "./components/HeroSection";
import AchievementSection from "./components/achievement";

const App: React.FC = () => {
  return (
    <main>
      <NavHeroCombo />
      <AchievementSection />
    </main>
  );
};

export default App;