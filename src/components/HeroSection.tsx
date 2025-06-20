import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ColorThief from "colorthief";

const images = [
  {
    src: "/assets/stella1.png",
    titles: ["Model", "Philanthropist", "Golf Champion", "Media Personality"],
  },
  {
    src: "/assets/stella2.png",
    titles: ["Founder", "Beauty Queen", "Influencer", "Public Speaker"],
  },
  {
    src: "/assets/stella3.png",
    titles: ["TV Host", "Entrepreneur", "Humanitarian", "Advocate"]
  }
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState("#0e0e10");
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setTitleIndex(0);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

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
          const [r, g, b] = Array.from(rgb);
          setBgColor(`rgb(${r}, ${g}, ${b})`);
        }
      } catch {
        setBgColor("#0e0e10");
      }
    };
  }, [currentIndex]);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleIndex((prev) =>
        (prev + 1) % images[currentIndex].titles.length
      );
    }, 2500);
    return () => clearInterval(titleInterval);
  }, [currentIndex]);

  return (
    <section
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 transition-colors duration-1000"
      style={{ backgroundColor: bgColor }}
    >
      {/* Left - Floating Image */}
      <div className="relative w-64 h-64 md:w-[400px] md:h-[500px] mb-10 md:mb-0">
        <img
          src={images[currentIndex].src}
          alt="Stella Whyte"
          className="w-full h-full object-contain rounded-xl shadow-2xl z-10 relative"
        />
        <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-2xl z-0 animate-pulse shadow-xl" />
      </div>

      {/* Right - Text */}
      <div className="text-center md:text-left md:pl-16">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white font-[Playfair_Display] mb-4"
        >
          Mrs. Okhueileigbe Ebosetale
        </motion.h1>

        <motion.p
          key={titleIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl text-yellow-300 font-[Outfit] tracking-wide"
        >
          {images[currentIndex].titles[titleIndex]}
        </motion.p>
      </div>
    </section>
  );
};