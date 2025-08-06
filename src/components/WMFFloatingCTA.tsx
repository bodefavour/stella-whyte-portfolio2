import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaUsers } from "react-icons/fa";
import { X } from "lucide-react";

export const WMFFloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Bubble Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-yellow-300 hover:bg-yellow-400 text-black p-4 rounded-full shadow-xl flex items-center justify-center animate-bounce"
      >
        <FaUsers size={24} />
      </button>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#111] text-white rounded-2xl shadow-2xl max-w-sm w-full p-6 relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-yellow-400"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold text-yellow-300 mb-3">
                Join WMF Community 💫
              </h3>
              <p className="text-gray-300 mb-5">
                Connect with inspiring women, grow your network, and be part of the movement.
              </p>

              <div className="flex flex-col space-y-3">
                <a
                  href="https://chat.whatsapp.com/GF066rANhE88pYFa2BMiLF?mode=ac_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-semibold transition justify-center"
                >
                  <FaWhatsapp />
                  <span>Join on WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/official__wmf?igsh=ZHJ2dmVteGJ4Z2Z1&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white py-3 px-4 rounded-xl font-semibold transition justify-center"
                >
                  <FaInstagram />
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};