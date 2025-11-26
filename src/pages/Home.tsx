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
import { AwardsSection } from "../components/AwardsSection";
import { SEO } from "../components/SEO";

const Home = () => {
    return (
        <main>
            <SEO 
                title="Ebosetale Okhueleigbe - Tax Auditor, Gender Analyst & Public Speaker"
                description="Official website of Ebosetale Okhueleigbe - Tax Auditor at FIRS, Gender Analyst, Public Speaker, Humanitarian, and Founder of Women Mentorship Forum."
                canonicalUrl="https://www.ebosetaleokhueleigbe.com/"
            />
            <LatestSpeakingModal />
            <NavHeroCombo />
            <AboutSection />
            <AwardsSection />
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
