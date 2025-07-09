// src/pages/Home.tsx
import { NavHeroCombo } from "../components/HeroSection";
import { TimelineCarousel } from "../components/TimelineSection";
import { AboutSection } from "../components/AboutSection";
import { HighlightsSection } from "../components/HighlightsSection";
import { SpotlightSection } from "../components/SpotlightSection";
import { ContactSection } from "../components/ContactSection";
import { SpeakingEvents } from "../components/SpeakingHighlights";

const Home = () => {
    return (
        <main>
            <NavHeroCombo />
            <AboutSection />
<SpeakingEvents />
            <HighlightsSection />
            <TimelineCarousel />
            <SpotlightSection />
            <ContactSection />
        </main>
    );
};

export default Home;
