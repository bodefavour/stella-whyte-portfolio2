// src/components/SpeakingCard.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

type EventType = {
  title: string;
  description: string;
  coverImage?: string;
  coverVideo?: string;
  images: string[];
};

const photoSliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
};

export const SpeakingCard = ({ event }: { event: EventType }) => {
  const [cover, setCover] = useState(event.coverImage);

  return (
    <motion.div
      className="bg-[#111] rounded-3xl p-6 md:p-10 shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Header Info */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
        <div className="w-full rounded-2xl overflow-hidden max-h-[400px] shadow-lg">
          {event.coverVideo ? (
            <video
              src={event.coverVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <img
              src={cover}
              alt={event.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          )}
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
            {event.title}
          </h3>
          <p className="text-gray-300 font-outfit text-lg leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>

      {/* Photo Carousel */}
      <Slider {...photoSliderSettings}>
        {event.images.map((img, i) => (
          <div key={i} className="px-2">
            <img
              src={img}
              alt={`Event ${event.title} - Photo ${i + 1}`}
              onClick={() => setCover(img)}
              className="rounded-xl h-52 w-full object-cover cursor-pointer hover:opacity-80"
            />
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};