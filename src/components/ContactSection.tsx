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

import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>Ebosetale Okhueleigbe</title>
        <meta
          name="description"
          content="The official portfolio for Ebosetale Okhueleigbe, an international model, philanthropist, entrepreneur, and media personality."
        />
        <link rel="canonical" href="https://www.ebosetaleokhueleigbe.com/" />
      </Helmet>
      <section className="relative bg-gradient-to-b from-[#0e0e10] via-[#1a1a1a] to-black text-gray-100 py-20 px-6 md:px-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair text-yellow-300 mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto mb-6" />
            <p className="text-gray-400 font-outfit text-lg max-w-2xl mx-auto">
              Get in touch for speaking engagements, collaborations, or just to say hello
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info & Social */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Social Media */}
              <div className="bg-[#1a1a1a] border border-yellow-300/10 rounded-2xl p-8">
                <h3 className="text-2xl font-playfair text-yellow-300 mb-6">Follow the Journey</h3>
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="https://instagram.com/realstellawhyte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center bg-[#0a0a0a] hover:bg-yellow-300/10 border border-yellow-300/20 rounded-xl p-6 transition-all duration-300 group"
                  >
                    <FaInstagram className="text-3xl text-gray-400 group-hover:text-yellow-300 transition-colors mb-2" />
                    <span className="text-xs text-gray-500 group-hover:text-gray-300">Instagram</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/ebosetale-obozele-536a5a20b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center bg-[#0a0a0a] hover:bg-yellow-300/10 border border-yellow-300/20 rounded-xl p-6 transition-all duration-300 group"
                  >
                    <FaLinkedin className="text-3xl text-gray-400 group-hover:text-yellow-300 transition-colors mb-2" />
                    <span className="text-xs text-gray-500 group-hover:text-gray-300">LinkedIn</span>
                  </a>
                  <a
                    href="https://www.facebook.com/superfmlagos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center bg-[#0a0a0a] hover:bg-yellow-300/10 border border-yellow-300/20 rounded-xl p-6 transition-all duration-300 group"
                  >
                    <FaFacebook className="text-3xl text-gray-400 group-hover:text-yellow-300 transition-colors mb-2" />
                    <span className="text-xs text-gray-500 group-hover:text-gray-300">Facebook</span>
                  </a>
                  <a
                    href="https://youtube.com/watch?v=5HDbfAlNxbQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center bg-[#0a0a0a] hover:bg-yellow-300/10 border border-yellow-300/20 rounded-xl p-6 transition-all duration-300 group"
                  >
                    <FaYoutube className="text-3xl text-gray-400 group-hover:text-yellow-300 transition-colors mb-2" />
                    <span className="text-xs text-gray-500 group-hover:text-gray-300">YouTube</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@whyte_ose"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center bg-[#0a0a0a] hover:bg-yellow-300/10 border border-yellow-300/20 rounded-xl p-6 transition-all duration-300 group"
                  >
                    <FaTiktok className="text-3xl text-gray-400 group-hover:text-yellow-300 transition-colors mb-2" />
                    <span className="text-xs text-gray-500 group-hover:text-gray-300">TikTok</span>
                  </a>
                  <a
                    href="mailto:africanwomenandtechnolgy@gmail.com"
                    className="flex flex-col items-center justify-center bg-[#0a0a0a] hover:bg-yellow-300/10 border border-yellow-300/20 rounded-xl p-6 transition-all duration-300 group"
                  >
                    <FaEnvelope className="text-3xl text-gray-400 group-hover:text-yellow-300 transition-colors mb-2" />
                    <span className="text-xs text-gray-500 group-hover:text-gray-300">Email</span>
                  </a>
                </div>
              </div>

              {/* Quote */}
              <motion.div
                className="bg-gradient-to-br from-yellow-300/5 to-transparent border border-yellow-300/20 rounded-2xl p-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 font-outfit italic text-lg leading-relaxed">
                  "Building Legacies Through Grace and Grit"
                </p>
                <p className="text-yellow-300 mt-4 font-playfair">— Ebosetale Okhueleigbe</p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-[#1a1a1a] border border-yellow-300/10 rounded-2xl p-8 shadow-2xl space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-playfair text-yellow-300 mb-6">Send a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="p-4 bg-[#0a0a0a] border border-yellow-300/20 rounded-xl w-full text-gray-200 placeholder-gray-500 focus:border-yellow-300 focus:outline-none transition-colors font-outfit"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="p-4 bg-[#0a0a0a] border border-yellow-300/20 rounded-xl w-full text-gray-200 placeholder-gray-500 focus:border-yellow-300 focus:outline-none transition-colors font-outfit"
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="p-4 bg-[#0a0a0a] border border-yellow-300/20 rounded-xl w-full text-gray-200 placeholder-gray-500 focus:border-yellow-300 focus:outline-none transition-colors font-outfit resize-none"
                required
              />

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={newsletter}
                  onChange={() => setNewsletter(!newsletter)}
                  className="h-5 w-5 rounded border-yellow-300/20 bg-[#0a0a0a] text-yellow-300 focus:ring-yellow-300 focus:ring-offset-0"
                />
                <label htmlFor="newsletter" className="text-gray-400 font-outfit text-sm">
                  Subscribe to newsletter for updates and insights
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-300 text-black py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 font-outfit text-lg shadow-lg hover:shadow-yellow-300/50"
              >
                Send Message
              </button>
            </motion.form>
          </div>

          {/* Footer */}
          <motion.div
            className="mt-20 pt-8 border-t border-yellow-300/10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 font-outfit text-sm">
              © {new Date().getFullYear()} Ebosetale "Stella" Okhueleigbe. All rights reserved.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};