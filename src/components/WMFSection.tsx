import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export const WMFSection = () => {
  return (
    <section className="bg-[#0e0e10] text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 md:space-y-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-yellow-300 leading-tight">
            Women Mentorship Forum (WMF)
          </h2>
          <p className="text-sm md:text-base lg:text-lg font-outfit text-gray-300 leading-normal md:leading-relaxed">
            Founded by Ebosetale Okhueleigbe, WMF is a dynamic platform committed to empowering women through mentorship, collaboration, and actionable leadership. It's a growing community where women uplift each other to achieve personal and professional growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4">
            <a
              href="https://chat.whatsapp.com/GF066rANhE88pYFa2BMiLF?mode=ac_t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white py-2.5 md:py-3 px-4 md:px-6 rounded-full font-semibold transition text-sm md:text-base"
            >
              <FaWhatsapp />
              <span>Join on WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/official__wmf?igsh=ZHJ2dmVteGJ4Z2Z1&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white py-2.5 md:py-3 px-4 md:px-6 rounded-full font-semibold transition text-sm md:text-base"
            >
              <FaInstagram />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </motion.div>

        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/assets/IMG-20250806-WA0001(1).jpg" // <-- Replace this later with actual WMF image
            alt="Women Mentorship Forum"
            className="rounded-3xl shadow-2xl object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};