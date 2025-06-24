import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import stella1 from "../assets/stella1.png";

const spotlights = [
  {
    mediaType: "video",
    src: "/assets/spotlight1.mp4",
    title: "BBC Africa Interview",
    description:
      "Stella shares her advocacy journey and leadership values in an exclusive feature with BBC Africa.",
    cta: "Watch Full Interview",
  },
  {
    mediaType: "image",
    src: stella1,
    title: "Impact Maker Award",
    description:
      "Honored by WHO IS WHO Awards for community leadership and impactful humanitarian efforts.",
    cta: "View Gallery",
  },
  {
    mediaType: "image",
    src: stella1,
    title: "Vote Right Campaign",
    description:
      "Spearheading voter education and accountability across Nigeria through impactful grassroots campaigns.",
    cta: "Explore Campaign",
  },
];

export const SpotlightSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % spotlights.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const spotlight = spotlights[index];

  return (
    <section className="min-h-screen bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Media */}
        <AnimatePresence mode="wait">
          <motion.div
            key={spotlight.src}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md"
          >
            {spotlight.mediaType === "video" ? (
              <video
                src={spotlight.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <img
                src={spotlight.src}
                alt="Spotlight Visual"
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          </motion.div>
        </AnimatePresence>

        {/* Text */}
        <motion.div
          key={spotlight.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-yellow-300">
            {spotlight.title}
          </h2>
          <p className="text-lg md:text-xl font-outfit text-gray-200">
            {spotlight.description}
          </p>
          <button className="mt-4 px-6 py-2 rounded-full bg-yellow-300 text-black font-medium hover:bg-yellow-400 transition">
            {spotlight.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
};