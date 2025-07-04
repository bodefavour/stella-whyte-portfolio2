// components/NavHeroCombo.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ColorThief from "colorthief";

import stella1 from "../assets/stella1.png";
import stella2 from "../assets/stella2.png";
import stella3 from "../assets/stella3.png";
<link rel="canonical" href="https://www.ebosetaleokhueleigbe.com/" />

const navItems = [
  "About",
  "Achievements",
  "Timeline",
  "Spotlight",
  "Philanthropy",
  "Gallery",
  "Contact",
  "Education"
];

const images = [
  {
    src: stella1,
    titles: ["Model", "Philanthropist", "Golf Champion", "Media Personality"],
  },
  {
    src: stella2,
    titles: ["Founder", "Beauty Queen", "Influencer", "Public Speaker"],
  },
  {
    src: stella3,
    titles: ["TV Host", "Entrepreneur", "Humanitarian", "Advocate"],
  },
];

function getBrightness(r: number, g: number, b: number): number {
  return (r * 299 + g * 587 + b * 114) / 1000;
}

export const NavHeroCombo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState("#f9f9f9");
  const [textColor, setTextColor] = useState("black");
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setTitleIndex(0);
    }, 8000);
    return () => clearInterval(cycle);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = images[currentIndex].src;
    img.onload = () => {
      // eslint-disable-next-line
      try {
        // eslint-disable-next-line
        const colorThief = new ColorThief();
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0, img.width, img.height);
        const rgb = ctx?.getImageData(0, 0, 1, 1).data;
        if (rgb) {
          const r = rgb[0];
          const g = rgb[1];
          const b = rgb[2];
          setBgColor(`rgb(${r}, ${g}, ${b})`);
          const brightness = getBrightness(r, g, b);
          setTextColor(brightness < 128 ? "white" : "black");
        }
      } catch {
        setBgColor("#f2f2f2");
        setTextColor("black");
      }
    };
  }, [currentIndex]);

  useEffect(() => {
    const titleCycle = setInterval(() => {
      setTitleIndex(
        (prev) => (prev + 1) % images[currentIndex].titles.length
      );
    }, 2500);
    return () => clearInterval(titleCycle);
  }, [currentIndex]);

  return (
    <section
      className="relative min-h-screen w-full transition-colors duration-1000 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md border-b border-white/20 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-lg md:text-2xl font-playfair font-bold" style={{ color: textColor }}>
            Stella Whyte
          </h1>
          <ul className="hidden md:flex gap-6 text-sm font-outfit" style={{ color: textColor }}>
            {navItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-yellow-300 transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="md:hidden text-2xl" style={{ color: textColor }}>☰</div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="w-full h-screen pt-12 px-6 md:px-20 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between relative z-10">
        {/* IMAGE */}
        <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div className="relative rounded-full p-4 bg-white/10 backdrop-blur-lg shadow-xl">
            <img
              src={images[currentIndex].src}
              alt="Stella"
              className="h-[400px] md:h-[520px] object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]"
              style={{ filter: "drop-shadow(0 0 35px rgba(255,255,255,0.3))" }}
            />
            <div
              className="absolute inset-0 blur-3xl opacity-40 rounded-full z-[-1]"
              style={{ backgroundColor: bgColor }}
            ></div>
          </div>
        </div>

        {/* TEXT */}
        <div
          className="w-full md:w-1/2 text-center md:text-left z-10"
          style={{ color: textColor }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold font-playfair"
          >
            Miss Okhueleigbe Ebosetale
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={titleIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-2xl font-outfit tracking-wide mt-4"
            >
              {images[currentIndex].titles[titleIndex]}
            </motion.p>
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-6 text-base md:text-lg font-light font-outfit italic"
          >
            Building Legacies Through Grace and Grit
          </motion.p>
        </div>
      </div>
    </section>
  );
};