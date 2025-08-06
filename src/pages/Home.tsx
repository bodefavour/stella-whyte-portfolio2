// src/pages/Home.tsx
import { NavHeroCombo } from "../components/HeroSection";
import { TimelineCarousel } from "../components/TimelineSection";
import { AboutSection } from "../components/AboutSection";
import { HighlightsSection } from "../components/HighlightsSection";
import { SpotlightSection } from "../components/SpotlightSection";
import { ContactSection } from "../components/ContactSection";
import { SpeakingEvents } from "../components/SpeakingHighlights";
import { LatestSpeakingModal } from "../components/LatestSpeakingModal";
import { WMFSection } from "../components/WMFSection";
import { WMFFloatingCTA } from "../components/WMFFloatingCTA";

const Home = () => {
    return (
        <main>
            <LatestSpeakingModal />
            <NavHeroCombo />
            <AboutSection />
            <SpeakingEvents />
            <HighlightsSection />
            <TimelineCarousel />
            <SpotlightSection />
            <WMFSection /> 
            <ContactSection />
            <WMFFloatingCTA />
        </main>
    );
};

export default Home;
