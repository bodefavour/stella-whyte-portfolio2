// src/components/SpeakingEvents.tsx
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type EventType = {
  title: string;
  description: string;
  coverImage: string;
  images: string[];
};

const speakingEvents: EventType[] = [
  {
    title: "UN Women Leadership Forum",
    description:
      "Ebosetale delivered a powerful keynote to over 500 global leaders on gender equality and sustainable development, held in Abuja, Nigeria.",
    coverImage: "/events/un/cover.jpg",
    images: [
      "/events/un/1.jpg",
      "/events/un/2.jpg",
      "/events/un/3.jpg",
      "/events/un/4.jpg",
      "/events/un/5.jpg",
    ],
  },
  {
    title: "Youth for Change Summit",
    description:
      "An inspiring address on digital activism and civic leadership to African youth leaders, fostering inclusive policy-making across nations.",
    coverImage: "/events/youth/cover.jpg",
    images: [
      "/events/youth/1.jpg",
      "/events/youth/2.jpg",
      "/events/youth/3.jpg",
    ],
  },
  // Add more events here as needed
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
};

export const SpeakingEvents = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-playfair text-yellow-300 mb-16 text-center">
        Featured Speaking Engagements
      </h2>

      <div className="space-y-20">
        {speakingEvents.map((event, index) => (
          <motion.div
            key={index}
            className="bg-[#111] rounded-3xl p-6 md:p-12 shadow-xl space-y-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Info */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img
                src={event.coverImage}
                alt={event.title}
                className="w-full h-64 md:h-full object-cover rounded-2xl shadow-lg"
              />
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
                  {event.title}
                </h3>
                <p className="text-gray-300 font-outfit text-lg leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Carousel */}
            <Slider {...sliderSettings}>
              {event.images.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={`Slide ${i + 1}`}
                    className="rounded-xl w-full h-72 object-cover"
                  />
                </div>
              ))}
            </Slider>
          </motion.div>
        ))}
      </div>
    </section>
  );
};