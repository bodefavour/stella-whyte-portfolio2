// src/components/LatestSpeakingModal.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export const LatestSpeakingModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 3000); // Delay modal
    return () => clearTimeout(timeout);
  }, []);

  const close = () => setShow(false);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#111] text-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-yellow-400"
              onClick={close}
            >
              <X size={20} />
            </button>

            {/* WMF Image */}
            <img
              src="/assets/IMG-20250806-WA0001(1).jpg"
              alt="Women Mentorship Forum"
              className="rounded-xl mb-4 w-full object-cover max-h-64"
            />

            <h3 className="text-2xl font-bold text-yellow-300 mb-2">
              ✨ Join Women Mentorship Forum
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Be part of a dynamic platform committed to empowering women through mentorship, collaboration, and actionable leadership. Join our growing community where women uplift each other to achieve personal and professional growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://chat.whatsapp.com/GF066rANhE88pYFa2BMiLF?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl transition"
                onClick={close}
              >
                Join on WhatsApp
              </a>
              <a
                href="https://www.instagram.com/official__wmf?igsh=ZHJ2dmVteGJ4Z2Z1&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-xl transition"
                onClick={close}
              >
                Follow on Instagram
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};