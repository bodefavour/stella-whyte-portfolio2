import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const timelineData = [
  {
    date: "Dec 2021",
    title: "International Justice of Peace",
    subtitle: "Global Peace Award",
    type: "image",
    src: "/assets/timeline/peace.jpg",
  },
  {
    date: "Oct 2022",
    title: "MON National Honour",
    subtitle: "Order of Niger by the President",
    type: "video",
    src: "/assets/timeline/award.mp4",
  },
  {
    date: "Jul 2023",
    title: "Royal Honorary Fellow",
    subtitle: "Presented by UK royal envoys",
    type: "image",
    src: "/assets/timeline/royal.jpg",
  },
];

export const TimelineCarousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "ease-in-out",
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="bg-[#0e0e10] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-yellow-400 mb-10">
          Her Journey Through Time
        </h2>

        <Slider {...settings}>
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#1a1a1f] rounded-3xl overflow-hidden shadow-xl backdrop-blur-lg border border-yellow-300 relative">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    className="w-full h-64 object-cover"
                  />
                )}

                <div className="p-6">
                  <h3 className="text-2xl font-serif text-yellow-300 mb-2">
                    {item.date}
                  </h3>
                  <p className="text-xl font-semibold mb-1">{item.title}</p>
                  <p className="text-sm text-gray-300">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};