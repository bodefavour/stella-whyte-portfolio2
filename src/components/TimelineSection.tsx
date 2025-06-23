import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import { useState } from "react";
import stella1 from "../assets/stella1.png";

const timelineData = [
  {
    date: "Dec 2021",
    title: "International Justice of Peace",
    subtitle: "Global Peace Award",
    type: "image",
    src: stella1,
  },
  {
    date: "Oct 2022",
    title: "MON National Honour",
    subtitle: "Order of Niger by the President",
    type: "video",
    src: stella1,
  },
  {
    date: "Jul 2023",
    title: "Royal Honorary Fellow",
    subtitle: "Presented by UK royal envoys",
    type: "image",
    src: stella1,
  },
  {
    date: "Dec 2024",
    title: "International Justice of Peace",
    subtitle: "Global Peace Award",
    type: "image",
    src: stella1,
  },
];

export const TimelineCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "ease-in-out",
    infinite: true,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <section className="bg-[#0e0e10] py-20 text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-yellow-400 mb-12">
          Her Journey Through Time
        </h2>

        <Slider {...settings}>
          {timelineData.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={index}
                className="px-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={clsx(
                    "rounded-3xl overflow-hidden relative border backdrop-blur-md transition-all duration-700",
                    isActive
                      ? "border-yellow-400 scale-100 shadow-[0_0_40px_10px_rgba(255,255,255,0.1)]"
                      : "border-gray-700 scale-70 backdrop-blur-md bg-white/5"
                  )}
                >
                  <div className="overflow-hidden h-64">
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.title}
                        className={clsx(
                          "w-full h-full object-cover transition-all duration-500",
                          isActive ? "grayscale-0" : "grayscale blur-sm"
                        )}
                      />
                    ) : (
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        className={clsx(
                          "w-full h-full object-cover transition-all duration-500",
                          isActive ? "grayscale-0" : "grayscale blur-sm"
                        )}
                      />
                    )}
                  </div>

                  <div
                    className={clsx(
                      "p-6 transition-opacity duration-500",
                      isActive ? "opacity-100" : "opacity-70"
                    )}
                  >
                    <h3 className="text-2xl font-bold text-yellow-300 mb-2">
                      {item.date}
                    </h3>
                    <p className="text-xl font-semibold mb-1">{item.title}</p>
                    <p className="text-sm text-gray-300">{item.subtitle}</p>
                  </div>

                  {/* Glow around center card */}
                  {isActive && (
                    <div className="absolute -inset-2 bg-yellow-400/20 blur-2xl rounded-3xl z-[-1]"></div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};