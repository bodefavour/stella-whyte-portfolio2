import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto space-y-16"
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-playfair text-yellow-300 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg md:text-xl font-outfit">
            Whether it’s collaboration, press, or outreach—reach out.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 font-outfit">
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 rounded-xl bg-[#111] border border-gray-700 text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 rounded-xl bg-[#111] border border-gray-700 text-white placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-4 rounded-xl bg-[#111] border border-gray-700 text-white placeholder-gray-400 md:col-span-2"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-4 rounded-xl bg-[#111] border border-gray-700 text-white placeholder-gray-400 md:col-span-2"
          />
          <button
            type="submit"
            className="bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition md:col-span-2"
          >
            Send Message
          </button>
        </form>

        <div className="border-t border-gray-700 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold font-playfair text-yellow-300 mb-2">
              Subscribe to Her Newsletter
            </h3>
            <p className="text-gray-400">
              Get powerful updates from Ebosetale Okhueleigbe directly.
            </p>
          </div>
          <form className="flex gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 rounded-full bg-[#111] border border-gray-700 text-white placeholder-gray-400 w-full"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="pt-10 flex justify-center gap-6 text-xl text-yellow-300">
          <a
            href="https://www.instagram.com/boshan.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-white transition" />
          </a>
          <a
            href="https://www.facebook.com/superfmlagos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="hover:text-white transition" />
          </a>
          <a
            href="https://x.com/boshanofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="hover:text-white transition" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="hover:text-white transition" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}