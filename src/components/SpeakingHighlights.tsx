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
    title: "The ICE Connect 2025: Lagos State University",
    description:
      "On July 2nd, 2025, Ebosetale was a featured speaker at The ICE Connect 2025, a dynamic student-focused networking experience hosted at Lagos State University (LASU).ICE Connect brought together forward-thinking students, innovators, and young creatives under one roof to connect, share ideas, and build meaningful collaborations.",
    coverImage: "/assets/IMG-20250706-WA0017.jpg",
    images: [
      "/assets/IMG-20250706-WA0017.jpg",
      "/assets/IMG-20250706-WA0019.jpg",
      "/assets/IMG-20250703-WA0011.jpg",
    ],
  },
{
    title: "Africa Trade Consortium’s Tea Break Edition 2025",
    description:
      "Speaking at the event held at the Grand Pela Hotel in Abuja, Okhueleigbe commended the government’s efforts to support businesses through tax exemptions, Pioneer Status Incentives, Export Processing Grants, and other tax reliefs. She noted that these incentives will not only strengthen businesses but also create jobs, reduce poverty, and improve the standard of living.",
    coverImage: "/assets/Screenshot_20250525-213124.jpg",
    images: [
      "/assets/IMG-20250709-WA0006.jpg",
      "/assets/IMG-20250709-WA0007.jpg",
      "/assets/IMG-20250709-WA0008.jpg",
      "/assets/IMG-20250709-WA0009.jpg",
    ],
  },
  // Add more events...
];

const eventSliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: true,
  swipe: true,
};

const photoSliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

export const SpeakingEvents = () => {
  return (
    <section className="bg-[#0e0e10] text-white py-18 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-playfair text-yellow-300 mb-16 text-center">
        Featured Speaking Engagements
      </h2>

      <Slider {...eventSliderSettings}>
        {speakingEvents.map((event, index) => (
          <motion.div
            key={index}
            className="bg-[#111] rounded-3xl p-6 md:p-10 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Header Info */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
              <img
                src={event.coverImage}
                alt={event.title}
                className="w-full h-56 md:h-full object-cover rounded-2xl shadow-lg"
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

            {/* Photo Carousel */}
            <Slider {...photoSliderSettings}>
              {event.images.map((img, i) => (
                <div key={i} className="px-2">
                  <img
                    src={img}
                    alt={`Event ${index} Photo ${i + 1}`}
                    className="rounded-xl h-60 w-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
};