import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ColorThief from "colorthief";

const images = [
  {
    src: "/assets/stella1.png", // transparent or subject-only image
    titles: ["Model", "Philanthropist", "Golf Champion", "Media Personality"],
  },
  {
    src: "/assets/stella2.png",
    titles: ["Founder", "Beauty Queen", "Influencer", "Public Speaker"],
  },
  {
    src: "/assets/stella3.png",
    titles: ["TV Host", "Entrepreneur", "Humanitarian", "Advocate"],
  },
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState("rgb(20,20,20)");
  const [titleIndex, setTitleIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setTitleIndex(0);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleIndex((prev) =>
        (prev + 1) % images[currentIndex].titles.length
      );
    }, 2500);
    return () => clearInterval(titleInterval);
  }, [currentIndex]);

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
        ctx?.drawImage(img, 0, 0);
        const rgb = ctx?.getImageData(0, 0, 1, 1).data;
        if (rgb) {
          const [r, g, b] = Array.from(rgb);
          setBgColor(`rgb(${r}, ${g}, ${b})`);
        }
      } catch (err) {
        console.warn("Color extraction failed", err);
        setBgColor("rgb(30,30,30)");
      }
    };
  }, [currentIndex]);

  return (
    <section
      className="w-full h-screen flex items-center justify-center px-6 md:px-16 transition-colors duration-1000 relative overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Glow Behind Image */}
      <motion.div
        className="absolute left-4 md:left-16 w-[300px] md:w-[400px] aspect-[3/4] blur-3xl rounded-full z-0"
        style={{ backgroundColor: bgColor }}
        animate={{ opacity: 0.4, scale: 1.3 }}
        transition={{ duration: 1 }}
      />

      {/* Image Section */}
      <div className="relative w-1/2 h-auto flex items-center justify-center z-10">
        <motion.img
          key={images[currentIndex].src}
          ref={imageRef}
          src={images[currentIndex].src}
          alt="Stella Whyte"
          className="h-[400px] md:h-[500px] object-contain drop-shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Text Section */}
      <div className="w-1/2 z-10 text-left md:pl-16">
        <motion.h1
          className="text-4xl md:text-6xl font-serif text-white font-bold leading-tight"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Mrs. Okhueileigbe Ebosetale
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={titleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-xl md:text-2xl font-light text-white/90 font-sans"
          >
            {images[currentIndex].titles[titleIndex]}
          </motion.p>
        </AnimatePresence>

        <motion.p
          className="mt-6 text-base md:text-lg text-white/70 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          “Grace. Power. Purpose.”
        </motion.p>
      </div>
    </section>
  );
};