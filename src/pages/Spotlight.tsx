import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Spotlight() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-playfair text-yellow-300 mb-6">
          Spotlight Loading 🎥
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-outfit mb-10">
          From major interviews to media appearances, documentaries, and special features —
          the spotlight on <strong className="text-white">Ebosetale Okhueleigbe</strong> is being curated.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            to="/about"
            className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
          >
            Meet Ebosetale
          </Link>
          <Link
            to="/"
            className="px-6 py-3 border border-yellow-300 text-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition"
          >
            Return Home
          </Link>
        </div>
      </motion.div>
    </section>
  );
}