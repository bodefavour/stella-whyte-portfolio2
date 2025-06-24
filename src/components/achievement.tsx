import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./AchievementCarousel.css";

const achievements = [
  {
    title: "Miss Nigeria – Tourism",
    year: "2016",
    description: "Crowned for cultural representation and tourism impact.",
    image: "/assets/achieve1.jpg",
  },
  {
    title: "Ambassador of Culture – Edo State",
    year: "2018",
    description: "Recognized by the state for promoting Edo heritage globally.",
    image: "/assets/achieve2.jpg",
  },
  {
    title: "Top 100 Influential Women",
    year: "2021",
    description: "Listed among Nigeria's most impactful women.",
    image: "/assets/achieve3.jpg",
  },
  {
    title: "Women’s Golf Invitational Champion",
    year: "2023",
    description: "Won the national title for women's golf excellence.",
    image: "/assets/achieve4.jpg",
  },
];

export const AchievementsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % achievements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0f0f0f] flex items-center justify-center py-24 overflow-hidden">
      <div className="carousel-wrapper relative w-full max-w-7xl px-6 md:px-12">
        <div className="carousel flex items-center justify-center gap-6 md:gap-10">
          {achievements.map((item, index) => {
            const offset = index - activeIndex;
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={index}
                className={`card relative backdrop-blur-md rounded-3xl shadow-xl border border-white/10 overflow-hidden transition-all duration-700 ${
                  isActive ? "scale-105 z-20" : "scale-90 opacity-40 blur-sm z-10"
                }`}
                style={{
                  transform: `translateX(${offset * 100}%)`,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-yellow-300 mb-2">{item.year}</p>
                  <p className="text-sm text-gray-300 font-outfit">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};