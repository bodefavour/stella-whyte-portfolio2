import { motion } from "framer-motion";
import { FaCrown, FaDove, FaBriefcase, FaMicrophone, FaHeart } from "react-icons/fa";

const highlights = [
  {
    icon: <FaCrown size={36} className="text-yellow-400" />,
    title: "International Title",
    description: "Crowned Miss Polo International 2019",
  },
  {
    icon: <FaDove size={36} className="text-yellow-400" />,
    title: "Peace Advocate",
    description: "Justice of Peace, Africa Union ECOSOCC",
  },
  {
    icon: <FaBriefcase size={36} className="text-yellow-400" />,
    title: "Entrepreneur",
    description: "CEO, Beauty Empire",
  },
  {
    icon: <FaMicrophone size={36} className="text-yellow-400" />,
    title: "Media Personality",
    description: "TV Host & Public Speaker",
  },
  {
    icon: <FaHeart size={36} className="text-yellow-400" />,
    title: "Humanitarian Impact",
    description: "Over 5,000 lives touched across Nigeria",
  },
];

export const HighlightsSection = () => {
  return (
    <section className="bg-[#0f0f0f] py-20 px-6 md:px-20 text-white">
      <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-yellow-400">
        Her Highlights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] p-8 rounded-2xl shadow-md hover:shadow-yellow-400/40 hover:scale-105 transition-all duration-500 border border-yellow-900/30 backdrop-blur-md"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-300">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};