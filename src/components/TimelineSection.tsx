import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import { useState } from "react";
import stella1 from "../assets/stella1.png";
import { Helmet } from "react-helmet-async";
const timelineData = [
  {
    date: "2010",
    title: "Best Poet",
    subtitle: "Winner of Spartville 'In the Spirit of Poetry'",
    type: "image",
    src: stella1,
  },
  {
    date: "2011",
    title: "WASC Merit Award",
    subtitle: "Outstanding SSCE Result, Grait International College",
    type: "image",
    src: stella1,
  },
  {
    date: "2014",
    title: "Miss ITV Beauty Pageant",
    subtitle: "Winner, Independent Television, Edo State",
    type: "image",
    src: stella1,
  },
  {
    date: "2016",
    title: "Miss Nigeria Finalist",
    subtitle: "Top Finalist in Miss Nigeria National Pageant",
    type: "image",
    src: stella1,
  },
  {
    date: "2017",
    title: "Founded Whyte Teen Hub",
    subtitle: "Teen empowerment and mentorship initiative",
    type: "image",
    src: stella1,
  },
  {
    date: "2017",
    title: "Miss NYSC Plateau State",
    subtitle: "Crowned Miss NYSC during her service year",
    type: "image",
    src: stella1,
  },
  {
    date: "2018",
    title: "Miss Polo Nigeria Rep",
    subtitle: "Represented Nigeria internationally",
    type: "image",
    src: stella1,
  },
  {
    date: "2018",
    title: "Humanitarian Service Award",
    subtitle: "The Plateau Awards",
    type: "image",
    src: stella1,
  },
  {
    date: "2018 - 2019",
    title: "President, Voice Out Vanguard",
    subtitle: "Launched the Vote Right Campaign",
    type: "image",
    src: stella1,
  },
  {
    date: "2019",
    title: "Best Graduating Student",
    subtitle: "Word of Life Bible Institute Leadership Certificate Course",
    type: "image",
    src: stella1,
  },
  {
    date: "2022",
    title: "2nd Best Audit Team",
    subtitle: "FIRS Large Tax Audit, Lagos",
    type: "image",
    src: stella1,
  },
  {
    date: "2023",
    title: "Best Dressed Staff",
    subtitle: "Awarded at FIRS, LTA Unit",
    type: "image",
    src: stella1,
  },
  {
    date: "2024",
    title: "Presentation Recognition",
    subtitle: "For knowledge in LTA, FIRS",
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
    <>
      <Helmet>
        <title>Ebosetale Okhueleigbe - Official Portfolio</title>
        <meta
          name="description"
          content="The official portfolio for Ebosetale Okhueleigbe, an international model, philanthropist, entrepreneur, and media personality."
        />
        <link rel="canonical" href="https://www.ebosetaleokhueleigbe.com/" />
      </Helmet>
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
    </>
  );
};