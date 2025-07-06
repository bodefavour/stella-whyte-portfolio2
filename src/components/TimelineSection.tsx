// src/components/TimelineSection.tsx
import Slider from "react-slick";
import { motion } from "framer-motion";
import clsx from "clsx";
import stella1 from "../assets/stella1.png";

const timelineData = [
  {
    date: "Dec 2021",
    title: "International Justice of Peace",
    subtitle: "Global Peace Award",
    src: stella1,
  },
  {
    date: "Oct 2022",
    title: "MON National Honour",
    subtitle: "Order of Niger by the President",
    src: stella1,
  },
  {
    date: "Jul 2023",
    title: "Royal Honorary Fellow",
    subtitle: "Presented by UK Royal Envoys",
    src: stella1,
  },
  {
    date: "Dec 2024",
    title: "Leadership Champion",
    subtitle: "Global Summit Recognition",
    src: stella1,
  },
];

export const TimelineCarousel = () => {
  const settings = {
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    infinite: true,
    arrows: false,
  };

  return (
    <section className="bg-[#0d0d0d] text-white py-24 px-4 md:px-20">
      <h2 className="text-4xl md:text-5xl font-playfair text-yellow-400 text-center mb-16">
        Her Journey Through Time
      </h2>

      <Slider {...settings}>
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl border border-yellow-900 bg-[#1a1a1a] mx-4 backdrop-blur-lg shadow-md hover:shadow-yellow-400/20 transition"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-60 object-cover rounded-xl mb-6"
            />
            <h3 className="text-xl font-bold text-yellow-300">{item.date}</h3>
            <p className="text-lg font-semibold text-white">{item.title}</p>
            <p className="text-sm text-gray-300">{item.subtitle}</p>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
};