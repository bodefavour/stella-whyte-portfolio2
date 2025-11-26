import { motion } from "framer-motion";
import { SEO } from "../components/SEO";

const initiatives = [
  {
    title: "Stella Whyte Foundation",
    description:
      "Empowering widows, orphans & survivors of gender-based violence across Nigeria through education, relief efforts, and psychosocial support.",
    img: "/images/philanthropy/foundation.jpg",
  },
  {
    title: "Women Mentorship Forum (WMF)",
    description:
      "Founded the WMF to mentor over 500 women and girls—providing leadership training, financial literacy, and career guidance.",
    img: "/images/philanthropy/wmf.jpg",
  },
  {
    title: "Vote Right Campaign & Voice Out Vanguard",
    description:
      "Led civic mobilization efforts and awareness campaigns to increase women’s political participation in elections across 5 Nigerian states.",
    img: "/images/philanthropy/vote-right.jpg",
  },
];

const stats = [
  { value: "300+", label: "Widows & Orphans Supported" },
  { value: "500+", label: "Women Empowered via WMF" },
  { value: "5", label: "States Covered (Voter Education)" },
];

export const Philanthropy = () => (
  <>
    <SEO 
      title="Philanthropic Work - Ebosetale Okhueleigbe | Community Impact"
      description="Stella Whyte Foundation empowers widows, orphans, and survivors of gender-based violence. Women Mentorship Forum has mentored 500+ women. Vote Right Campaign mobilized civic participation across 5 Nigerian states."
      canonicalUrl="https://www.ebosetaleokhueleigbe.com/philanthropy"
    />
    <section className="py-20 bg-gray-900 text-white px-6 md:px-20">
    <div className="max-w-6xl mx-auto space-y-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-playfair text-yellow-300 text-center"
      >
        Philanthropic Impact
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {initiatives.map((init, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-[#111] rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-300/30 transition"
          >
            <img src={init.img} alt={init.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{init.title}</h3>
              <p className="text-gray-300 text-sm">{init.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-around bg-black/50 rounded-xl py-8"
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="text-center px-4"
          >
            <div className="text-4xl font-bold text-yellow-300">{s.value}</div>
            <p className="text-gray-300">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-gray-400"
      >
        *Insights based on public records of events and campaigns led by Ebosetale Okhueleigbe.*
      </motion.div>
    </div>
  </section>
  </>
);