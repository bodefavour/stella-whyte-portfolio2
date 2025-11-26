import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { SEO } from "../components/SEO";

const bio = `A dynamic and results-oriented leader with a Master's in Gender Studies, an MBA, and certifications from Harvard Business School and the London School of Business Administration. Ebosetale is a tax auditor, gender analyst, and public service strategist with a passion for inclusive leadership.

She is the founder of P.S.L and the Women Mentorship Forum (WMF), and currently serves as President of Voice Out Vanguard and leader of the Vote Right Campaign. Her impact reaches marginalized communities, widows, and displaced persons.

Her accolades include Humanitarian of the Year, the PR Times Africa Award on International Women’s Day, and the WHO IS WHO Impact Maker Award. Through compassionate leadership, she continues to champion equity, empowerment, and sustainable development across Africa.`;

const highlights = [
  "Master’s in Gender Studies",
  "Harvard Business School Graduate",
  "MBA – London School of Business Administration",
  "Founder, Women Mentorship Forum (WMF)",
  "President, Voice Out Vanguard",
  "Leader, Vote Right Campaign",
];

const awards = [
  {
    title: "Humanitarian of the Year",
    year: "2023",
  },
  {
    title: "PR Times Women’s Day Honours",
    year: "2023",
  },
  {
    title: "WHO IS WHO Impact Maker",
    year: "2022",
  },
  {
    title: "CEO Golf Cup Champion",
    year: "2023",
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Ebosetale Okhueleigbe - Tax Expert & Women's Advocate"
        description="Learn about Ebosetale Okhueleigbe's journey as a Tax Auditor, Gender Analyst, Harvard graduate, and founder of Women Mentorship Forum. Recognized as Humanitarian of the Year."
        canonicalUrl="https://www.ebosetaleokhueleigbe.com/about"
      />
      <main className="bg-black text-white py-20 px-6 md:px-20">
        {/* Hero */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-playfair text-yellow-300">
          About Ebosetale Okhueleigbe
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
          Visionary. Strategist. Advocate for Change.
        </p>
      </motion.div>

      {/* Image + Bio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="assets/IMG-20250706-WA0017.jpg"
            alt="Ebosetale Okhueleigbe"
            className="rounded-2xl shadow-2xl w-full object-cover max-h-[500px] md:max-h-none"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {bio}
          </p>

          {/* Highlights */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-gray-200 text-sm">
            {highlights.map((item, i) => (
              <li
                key={i}
                className="bg-[#111] px-4 py-2 rounded-lg border border-white/10 hover:border-yellow-300 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Awards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-playfair text-yellow-300 mb-10 text-center">
          Awards & Recognitions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111] p-6 rounded-xl text-center shadow-lg hover:shadow-yellow-300/30 transition"
            >
              <FaAward className="text-yellow-300 text-3xl mb-2 mx-auto" />
              <h4 className="text-lg font-semibold">{award.title}</h4>
              <p className="text-sm text-gray-400">{award.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-20 text-center"
      >
        <p className="text-xl md:text-2xl italic text-gray-300 max-w-3xl mx-auto">
          “I believe leadership is not about control, it’s about compassion.”
        </p>
      </motion.div>
    </main>
    </>
  );
}