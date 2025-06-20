import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import ColorThief from "colorthief";

const IMAGES = [
    {
        src: "/public/assets/stella1.jpg",
        titles: ["Model", "Philanthropist", "Golf Champion", "Media Personality"],
    },
    {
        src: "/assets/stella2.jpg",
        titles: ["Founder", "Beauty Queen", "Influencer", "Public Speaker"],
    },
    {
        src: "/assets/stella3.jpg",
        titles: ["TV Host", "Entrepreneur", "Humanitarian", "Advocate"],
    },
];

export const HeroSection: React.FC = () => {
    const [idx, setIdx] = useState(0);
    const [bg, setBg] = useState("#0e0e10");
    const [titleIdx, setTitleIdx] = useState(0);

    // rotate images
    useEffect(() => {
        const iv = setInterval(() => {
            setIdx((i) => (i + 1) % IMAGES.length);
            setTitleIdx(0);
        }, 7000);
        return () => clearInterval(iv);
    }, []);

    // extract dominant color
    useEffect(() => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = IMAGES[idx].src;
        img.onload = () => {
            try {
                const thief = new ColorThief();
                const [r, g, b] = thief.getColor(img as any);
                setBg(`rgb(${r}, ${g}, ${b})`);
            } catch {
                setBg("#0e0e10");
            }
        };
    }, [idx]);

    // rotate titles
    useEffect(() => {
        const ti = setInterval(() => {
            setTitleIdx((i) => (i + 1) % IMAGES[idx].titles.length);
        }, 2500);
        return () => clearInterval(ti);
    }, [idx]);

    return (
        <Section style={{ background: bg }}>
            <Left>
                <Img src={IMAGES[idx].src} alt="Stella Whyte" />
            </Left>
            <Right>
                <motion.h1
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Mrs. Okhueileigbe Ebosetale
                </motion.h1>
                <motion.p
                    key={titleIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {IMAGES[idx].titles[titleIdx]}
                </motion.p>
            </Right>
        </Section>
    );
};

// animations
const fadeIn = keyframes`
 from { opacity: 0; }
 to   { opacity: 1; }
`;

// layout
const Section = styled.section`
  display: flex;
  height: 100vh;
  transition: background 1s ease;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 3;
  overflow: hidden;
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  color: #fff;

  h1 {
    font-family: "Playfair Display", serif;
    color: #facc15;
    font-size: clamp(2rem, 5vw, 4rem);
    animation: ${fadeIn} 0.8s ease-out;
    margin: 0;
  }
  p {
    font-family: "Inter", sans-serif;
    font-size: clamp(1rem, 3vw, 2rem);
    animation: ${fadeIn} 0.5s ease-out;
    margin: 0.5rem 0 0;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${fadeIn} 1s ease-out;
`;