import { motion } from "framer-motion";
import {
  FaCrown,
  FaDove,
  FaBriefcase,
  FaMicrophone,
  FaHeart,
} from "react-icons/fa";
import { IconType } from "react-icons";
import React from "react";
import { Helmet } from "react-helmet-async";

type Highlight = {
  icon: any;
  title: string;
  description: string;
};

const highlights: Highlight[] = [
  {
    icon: FaCrown,
    title: "President, Women Mentorship Forum",
    description: "Launched the Women Mentorship Forum (WMF), a visionary platform founded to empower, guide, and uplift women through mentorship, collaboration, and purposeful growth.",
  },
{
    icon: FaCrown,
    title: "Miss Polo International 2019",
    description: "Represented Nigeria on a global stage, promoting culture and diplomacy through beauty and intelligence.",
  },
  {
    icon: FaBriefcase,
    title: "FIRS Tax Auditor",
    description: "Works at the Federal Inland Revenue Service (FIRS), recognized for excellence in tax and audit strategy.",
  },
  {
    icon: FaHeart,
    title: "Founder, Whyte Teen Hub",
    description: "Empowered hundreds of teenage girls through leadership, skills, and mentorship initiatives since 2017.",
  },
  {
    icon: FaMicrophone,
    title: "Public Speaker & Advocate",
    description: "Engaged audiences across Africa on gender equity, youth leadership, and national development.",
  },
  {
    icon: FaCrown,
    title: "President, Voice Out Vanguard",
    description: "Launched the Vote Right Campaign to mobilize Nigerian youth for democratic participation.",
  },
  {
    icon: FaAward,
    title: "International Award Winner",
    description: "Recognized with PR Times Honour, Humanitarian of the Year, and other prestigious awards.",
  },
];

export const HighlightsSection = () => {
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
      <section className="bg-[#0f0f0f] py-20 px-6 md:px-20 text-white">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-yellow-400">
          Her Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {highlights.map(({ icon: Icon, title, description }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] p-8 rounded-2xl shadow-md hover:shadow-yellow-400/40 hover:scale-105 transition-all duration-500 border border-yellow-900/30 backdrop-blur-md"
            >
              <div className="mb-4">
                {Icon && <Icon size={36} className="text-yellow-400" />}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">{title}</h3>
              <p className="text-gray-300">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};