import { motion } from "framer-motion";
import stella1 from "../assets/stella1.png";
import stella2 from "../assets/stella2.png";
import stella3 from "../assets/stella3.png";

interface Milestone {
  date: string;
  title: string;
  subtitle: string;
  icon: string; // use your own asset paths
}

const milestones: Milestone[] = [
  {
    date: "Dec 2021",
    title: "International Justice of Peace",
    subtitle: "Global peace advocate recognition",
    icon: stella1,
  },
  {
    date: "Oct 2022",
    title: "Member of the Order of Niger (MON)",
    subtitle: "National honour from Nigeria",
    icon: stella1,
  },
  {
    date: "Jul 2023",
    title: "Honorary Fellow, Royal Recognition",
    subtitle: "Award from King Charles III’s reps",
    icon: stella1,
  },
  {
    date: "Sep 2023",
    title: "CEO Golf Cup Winner",
    subtitle: "Zanzibar international golf champion",
    icon: stella1,
  },
];

export const TimelineSection = () => (
  <section className="w-full py-24 bg-[#0f0f13] text-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <h2 className="text-4xl font-serif font-bold text-center mb-12">
        A Roadmap of Impact & Excellence
      </h2>

      {/* Horizontal timeline (desktop) */}
      <div className="hidden md:flex items-center space-x-16 overflow-x-auto py-4">
        {milestones.map((m, idx) => (
          <motion.div
            key={idx}
            className="relative flex-shrink-0 w-64"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-1 bg-white/20 w-full absolute top-10 left-0"></div>

            <div className="bg-[#1a1a1f] px-6 py-8 rounded-2xl shadow-xl relative z-10">
              <img src={m.icon} alt={m.title} className="w-12 h-12 mb-4" />
              <p className="text-sm text-yellow-300 mb-2">{m.date}</p>
              <h3 className="text-xl font-semibold font-serif mb-1">
                {m.title}
              </h3>
              <p className="text-white/70 text-sm">{m.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Vertical timeline (mobile) */}
      <div className="md:hidden space-y-12">
        {milestones.map((m, idx) => (
          <motion.div
            key={idx}
            className="relative pl-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute left-0 top-3 w-6 h-6 bg-yellow-400 rounded-full"></div>
            <p className="text-sm text-yellow-300">{m.date}</p>
            <h3 className="text-xl font-semibold font-serif mt-1">{m.title}</h3>
            <p className="text-white/70 text-sm">{m.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);