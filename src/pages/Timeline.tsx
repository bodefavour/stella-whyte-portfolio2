import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { SEO } from "../components/SEO";

const events = [
  {
    year: "2010",
    title: "Joined Public Service",
    desc: "Began impactful work in Nigeria’s tax and financial sector.",
  },
  {
    year: "2015",
    title: "Founded PSL & Women Mentorship Forum",
    desc: "Empowering young women and supporting single mothers.",
  },
  {
    year: "2018",
    title: "International Certifications",
    desc: "Completed Harvard Business School & London Business School executive programs.",
  },
  {
    year: "2022",
    title: "Voice Out Vanguard President",
    desc: "Led campaigns that reached thousands across Nigeria.",
  },
  {
    year: "2023",
    title: "Global Recognition",
    desc: "Awarded Humanitarian of the Year & PR Times Impact Award.",
  },
];

export default function TimelinePage() {
  return (
    <>
      <SEO 
        title="Career Timeline - Ebosetale Okhueleigbe | Journey & Milestones"
        description="Explore the career journey of Ebosetale Okhueleigbe from 2010 to present - key milestones, certifications, awards, and achievements in public service, tax auditing, and women empowerment."
        canonicalUrl="https://www.ebosetaleokhueleigbe.com/timeline"
      />
      <div className="min-h-screen bg-gradient-to-b from-black to-[#111] text-white px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-300 font-playfair"
        >
          Her Journey So Far
        </motion.h2>

        <div className="relative border-l-4 border-yellow-300 pl-6 space-y-14">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="absolute -left-6 top-1.5 w-4 h-4 bg-yellow-300 rounded-full shadow-md" />
              <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-yellow-300/30 transition">
                <h4 className="text-xl font-semibold text-yellow-200 flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-400" />
                  {event.title}
                </h4>
                <p className="text-gray-400 mt-1 italic">{event.year}</p>
                <p className="text-gray-300 mt-2">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional 3D Effect */}
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-400 italic">
            “It’s not about the destination — it’s about the legacy.”
          </p>
        </motion.div>
      </div>
    </div>
    </>
  );
}