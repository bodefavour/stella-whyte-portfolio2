import { motion } from "framer-motion";

export const AboutSection: React.FC = () => (
  <section className="py-20 bg-white text-gray-900">
    <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Visual */}
      <motion.div
        className="w-full flex justify-center"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/assets/about-photo.jpg"
          alt="Stella Whyte"
          className="w-80 h-80 object-cover rounded-3xl shadow-2xl"
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-serif font-bold text-gray-900">
          Meet Mrs. Okhueileigbe “Stella” Ebosetale
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          A graduate of the University of Benin and Word of Faith Bible
          Institute, Stella was crowned runner-up at Miss Polo Nigeria
          (2017/18) and represented Nigeria at Miss Polo International 0.
          A celebrated beauty queen, entrepreneur, media personality, and golf
          champion, she embodies grace, intelligence, and impact.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          She is the founder of the Stella Whyte Foundation — delivering
          empowerment and support to widows, orphans, and survivors of gender
          violence across Nigeria. On her 23rd birthday she celebrated with
          over 300 widows and orphans in Jos 1.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          With soulful charisma and bold leadership, Stella holds prestigious
          honors including International Justice of Peace, Member of the Order
          of Niger (MON), and Honorary Fellow recognized by royal dignitaries.
        </p>
      </motion.div>
    </div>
  </section>
);