// components/ContactSection.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaTiktok,
  FaLinkedin
} from "react-icons/fa";

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [newsletter, setNewsletter] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form, "Newsletter:", newsletter);
    // TODO: integrate backend submission
  };

  return (
    <section className="bg-[#0e0e10] text-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto space-y-12">
        <motion.h2
          className="text-4xl font-playfair text-yellow-300 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let’s Connect
        </motion.h2>

        <motion.div
          className="flex justify-center space-x-6 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a
            href="https://instagram.com/realstellawhyte"
            target="_blank"
            rel="noopener noreferrer"
          >
           {FaInstagram({ className: "hover:text-yellow-300 transition" })}
          </a>
          <a
            href="https://www.facebook.com/superfmlagos"
            target="_blank"
            rel="noopener noreferrer"
          >
            {FaFacebook({ className: "hover:text-yellow-300 transition" })}
          </a>
          <a href="https://youtube.com/watch?v=5HDbfAlNxbQ" target="_blank" rel="noopener noreferrer">
            {FaYoutube({ className: "hover:text-yellow-300 transition" })}
          </a>
          <a
            href="https://www.tiktok.com/@whyte_ose"
            target="_blank"
            rel="noopener noreferrer"
          >
           {FaTiktok({ className: "hover:text-yellow-300 transition" })}
          </a>
          <a
            href="https://linkedin.com/in/ebosetale-obozele-536a5a20b"
            target="_blank"
            rel="noopener noreferrer"
          >
            {FaLinkedin({ className: "hover:text-yellow-300 transition" })}
          </a>
          <a href="mailto:africanwomenandtechnolgy@gmail.com">
            {FaEnvelope({ className: "hover:text-yellow-300 transition" })}
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-3 bg-[#1a1a1f] rounded-lg w-full"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-3 bg-[#1a1a1f] rounded-lg w-full"
            />
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="p-3 bg-[#1a1a1f] rounded-lg w-full"
            required
          />

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="newsletter"
              checked={newsletter}
              onChange={() => setNewsletter(!newsletter)}
              className="h-4 w-4"
            />
            <label htmlFor="newsletter" className="text-gray-300">
              Subscribe to newsletter
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-300 text-black py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          className="text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          © {new Date().getFullYear()} Ebosetale “Stella” Okhueleigbe. All rights reserved.
        </motion.div>
      </div>
    </section>
  );
};