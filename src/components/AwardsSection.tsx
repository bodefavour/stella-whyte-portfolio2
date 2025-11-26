import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

// TODO: Replace these placeholder awards with actual data
const awards = [
  {
    title: "Humanitarian of the Year",
    year: "2023",
    image: "/assets/awards/humanitarian.jpg",
    description: "Recognized for outstanding service to marginalized communities",
  },
  {
    title: "PR Times Africa Award",
    year: "2023",
    image: "/assets/awards/pr-times.jpg",
    description: "International Women's Day Honours",
  },
  {
    title: "WHO IS WHO Impact Maker",
    year: "2022",
    image: "/assets/awards/who-impact.jpg",
    description: "Excellence in leadership and social impact",
  },
  {
    title: "CEO Golf Cup Champion",
    year: "2023",
    image: "/assets/awards/golf-champion.jpg",
    description: "Winner of the prestigious CEO Golf Cup",
  },
  {
    title: "Top 100 Influential Women",
    year: "2021",
    image: "/assets/awards/top-100.jpg",
    description: "Listed among Nigeria's most impactful women",
  },
  {
    title: "African Women in Leadership",
    year: "2019",
    image: "/assets/awards/leadership.jpg",
    description: "Hall of Fame inductee",
  },
];

export const AwardsSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0e0e10] to-black text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <FaTrophy className="text-yellow-300 text-5xl" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-yellow-300 mb-3 md:mb-4 leading-tight">
            Awards & Recognitions
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 font-outfit max-w-3xl mx-auto leading-normal md:leading-relaxed">
            Celebrating excellence, dedication, and transformative leadership across Africa and beyond
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl hover:shadow-yellow-300/30 transition-all duration-500 hover:scale-105"
            >
              {/* Award Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-yellow-900/20 to-black">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.src = "https://via.placeholder.com/400x300/1a1a1a/fbbf24?text=Award";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-yellow-300 text-black font-bold px-3 py-1 rounded-full text-sm">
                  {award.year}
                </div>
              </div>

              {/* Award Details */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-yellow-300 mb-1 md:mb-2 group-hover:text-yellow-200 transition-colors leading-tight">
                  {award.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm font-outfit leading-snug md:leading-normal">
                  {award.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-400/10 rounded-br-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 italic font-outfit">
            "Excellence is not a destination, it's a continuous journey."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
