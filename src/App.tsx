import React from "react";
import { NavHeroCombo } from "./components/HeroSection";
// import AchievementSection from "./components/achievement";
import { TimelineCarousel } from "./components/TimelineSection";
import { AboutSection } from "./components/AboutSection";
import { HighlightsSection } from "./components/HighlightsSection";
import { AchievementsCarousel } from "./components/achievement";
import { SpotlightSection } from "./components/SpotlightSection";

const App: React.FC = () => {
  return (
    <main>
      <NavHeroCombo />
      <AboutSection />
      <HighlightsSection />
      <TimelineCarousel />
<SpotlightSection />
<AchievementsCarousel />
    </main>
  );
};

export default App;