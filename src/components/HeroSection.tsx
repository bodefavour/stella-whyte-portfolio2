import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ColorThief from "colorthief";

import stella1 from "../assets/stella1.png";
import stella2 from "../assets/stella2.png";
import stella3 from "../assets/stella3.png";

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

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState("#f9f9f9");
  const [textColor, setTextColor] = useState("black");
  const [titleIndex, setTitleIndex] = useState(0);

  // Change images
  useEffect(() => {
    const imageCycle = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setTitleIndex(0);
    }, 8000);
    return () => clearInterval(imageCycle);
  }, []);

  // Get dominant color
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = images[currentIndex].src;
    img.onload = () => {
      try {
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
      } catch (e) {
        setBgColor("#f2f2f2");
        setTextColor("black");
      }
    };
  }, [currentIndex]);

  // Cycle titles
  useEffect(() => {
    const titleCycle = setInterval(() => {
      setTitleIndex((prev) =>
        (prev + 1) % images[currentIndex].titles.length
      );
    }, 2500);
    return () => clearInterval(titleCycle);
  }, [currentIndex]);

  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-between transition-colors duration-1000 px-8 md:px-20 py-10"
      style={{ backgroundColor: bgColor }}
    >
      {/* Left - Image with glow */}
      <div className="w-full md:w-/5 flex justify-center relative z-10">
        <div className="relative p-6 rounded-full">
          {/* Image with soft glow outline */}
          <img
            src={images[currentIndex].src}
            alt="Stella"
            className="h-[460px] md:h-[600px] object-contain transition-shadow border- duration-700"
          />
        </div>
      </div>


      {/* Right - Text */}
      <div
        className="w-full md:w-2/5 text-center md:text-left mt-10 md:mt-0 z-20"
        style={{ color: textColor }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-bold font-playfair"
        >
          Okhueileigbe Ebosetale
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
    </section>
  );
};
