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

            {/* Event Flyer */}
            <img
              src="https://res.cloudinary.com/dydwcaxmx/image/upload/v1753174342/IMG-20250721-WA0038_mvx8or.jpg"
              alt="Africa Global Impact Forum Flyer"
              className="rounded-xl mb-4 w-full object-cover max-h-64"
            />

            <h3 className="text-2xl font-bold text-yellow-300 mb-2">
              ✨ Catch Her Live!
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Miss Ebosetale is speaking at{" "}
              <strong>Business Day: SME Clinic</strong> this month on
              Thursday 31st July, 2025. Be part of the movement to gain knowledge on how to minimize your tax liabilities.
            </p>

            <Link
              to="/speaking"
              className="inline-block bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded-xl transition"
            >
              View All Speaking Events
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};