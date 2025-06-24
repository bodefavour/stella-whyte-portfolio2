import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import "keen-slider/keen-slider.min.css";

const spotlights = [
  {
    id: "youview",
    mediaType: "video",
    src: "https://www.youtube.com/watch?v=5HDbfAlNxbQ",
    title: "Exclusive: The Story You Haven't Heard",
    description:
      "Stella opens up in an intimate chat with *Your View TV* about her personal journey and lifestyle. — June 5, 2025.",
  },
  {
    id: "thisday",
    mediaType: "article",
    src: "https://www.thisdaylive.com/2025/05/25/ebosetale-okhueleigbe-lauds-fgs-business-friendly-initiatives/",
    title: "Lauds FG’s Business‑Friendly Initiatives",
    description:
      "Stella praises Nigeria’s tax incentives and business support at Africa Trade Consortium — May 25, 2025.",
  },
];

export const SpotlightSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % spotlights.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const item = spotlights[index];

  return (
    <section className="min-h-screen bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md"
          >
            {item.mediaType === "video" ? (
              <ReactPlayer
                url={item.src}
                playing
                muted
                controls={false}
                loop
                width="100%"
                height="100%"
                className="rounded-2xl"
              />
            ) : (
              <div className="bg-[#111] p-8 flex flex-col justify-center items-start h-full">
                <h3 className="text-2xl font-playfair mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-6">{item.description}</p>
                <a
                  href={item.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-yellow-300 text-black font-medium rounded-full hover:bg-yellow-400 transition"
                >
                  Read Article
                </a>
              </div>
            )}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          </motion.div>
        </AnimatePresence>

        <motion.div
          key={item.id + "-text"}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-playfair text-yellow-300">
            {item.title}
          </h2>
          <p className="text-lg md:text-xl font-outfit text-gray-200">
            {item.description}
          </p>
          {item.mediaType === "video" && (
            <a
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-yellow-300 text-black font-medium rounded-full hover:bg-yellow-400 transition"
            >
              Watch Full Video
            </a>
          )}
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-center space-x-4">
        {spotlights.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 rounded-full ${
              index === i ? "bg-yellow-300" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};