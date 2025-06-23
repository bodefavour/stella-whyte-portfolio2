import { motion } from "framer-motion";

const timeline = [
  {
    year: "2005",
    title: "Crowned Miss Nigeria",
    description: "Launched into the spotlight with grace and poise.",
    icon: "/icons/crown.svg",
  },
  {
    year: "2010",
    title: "Founded Grace Foundation",
    description: "Began philanthropic work across West Africa.",
    icon: "/icons/heart.svg",
  },
  {
    year: "2018",
    title: "Launched ‘Glow by Stella’",
    description: "Luxury skincare line for the modern African woman.",
    icon: "/icons/beauty.svg",
  },
  {
    year: "2023",
    title: "Global Media Personality",
    description: "Recognized by Forbes for influence and impact.",
    icon: "/icons/globe.svg",
  },
];

export const TimelineSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-[#0f0f0f] text-white relative">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-2">
          A Journey of Grace
        </h2>
        <p className="text-white/70 font-light text-lg">
          Milestones that shaped the legacy of Stella Whyte
        </p>
      </div>

      <div className="relative border-l-[2px] border-white/20 pl-6 md:pl-12">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-12 relative"
          >
            {/* Dot + Icon */}
            <div className="absolute -left-[38px] w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <img src={item.icon} alt="icon" className="w-4 h-4" />
            </div>

            {/* Content */}
            <div className="pl-4">
              <p className="text-sm uppercase tracking-widest text-yellow-400">
                {item.year}
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold font-serif mt-1">
                {item.title}
              </h3>
              <p className="text-white/70 text-base mt-2 font-light">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};