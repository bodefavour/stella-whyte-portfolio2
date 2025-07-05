import { motion } from "framer-motion";
import Image from "/public/images/philanthropy-hero.jpg"; // Replace with real image
import { FaHandHoldingHeart, FaUsers, FaSchool } from "react-icons/fa";

export default function Philanthropy() {
  return (
    <section className="bg-black text-white min-h-screen py-20 px-6 md:px-20 font-outfit">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto space-y-16"
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-playfair text-yellow-300 mb-4">
            Her Heart for Humanity
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ebosetale Okhueleigbe’s philanthropic efforts have touched thousands of lives
            — from underprivileged communities to displaced individuals and youth without hope.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.img
            src="/images/phil-impact.jpg" // Replace with real photo
            alt="Philanthropy in Action"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <div className="space-y-6 flex flex-col justify-center">
            <p className="text-gray-300 leading-loose">
              Through platforms like the **Women Mentorship Forum (WMF)** and the **Vote Right Campaign**,
              Ebosetale has organized food drives, skill-acquisition bootcamps, and mental health outreach
              for marginalized groups including widows, orphans, displaced persons, and teenage girls.
            </p>
            <p className="text-gray-300 leading-loose">
              Her compassion-led leadership inspires hope and transformation across local and global communities.
              She continues to speak, lead, and give towards a more just and inclusive society.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-[#111] p-8 rounded-2xl border border-gray-700">
            <FaHandHoldingHeart className="text-4xl text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">12,000+</h3>
            <p className="text-gray-400">Meals Donated</p>
          </div>
          <div className="bg-[#111] p-8 rounded-2xl border border-gray-700">
            <FaUsers className="text-4xl text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">300+</h3>
            <p className="text-gray-400">Girls Mentored</p>
          </div>
          <div className="bg-[#111] p-8 rounded-2xl border border-gray-700">
            <FaSchool className="text-4xl text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">50+</h3>
            <p className="text-gray-400">Communities Reached</p>
          </div>
        </div>

        <div className="pt-10 text-center">
          <h4 className="text-2xl font-semibold font-playfair mb-4 text-yellow-300">
            Watch Her In Action
          </h4>
          <div className="aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/5HDbfAlNxbQ" // Replace with real philanthropic video
              title="Ebosetale Okhueleigbe Philanthropy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}