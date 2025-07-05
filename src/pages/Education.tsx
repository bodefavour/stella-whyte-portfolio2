import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap, FaCertificate } from "react-icons/fa";

export default function Education() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-20 font-outfit">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto space-y-16"
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-playfair text-yellow-300 mb-4">
            Academic Excellence
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            From elite institutions across the globe to specialized leadership training, Ebosetale Okhueleigbe’s education is a testament to her brilliance and vision.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#111] p-6 rounded-2xl border border-gray-700 text-center"
          >
            <FaGraduationCap className="text-4xl text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Master's in Gender Studies</h3>
            <p className="text-gray-400">Obafemi Awolowo University</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#111] p-6 rounded-2xl border border-gray-700 text-center"
          >
            <FaUniversity className="text-4xl text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">MBA</h3>
            <p className="text-gray-400">London School of Business Administration</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#111] p-6 rounded-2xl border border-gray-700 text-center"
          >
            <FaCertificate className="text-4xl text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Strategic Management</h3>
            <p className="text-gray-400">Harvard Business School (Online)</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#111] p-6 rounded-2xl border border-gray-700 text-center"
          >
            <FaCertificate className="text-4xl text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Corporate Finance</h3>
            <p className="text-gray-400">Harvard Business School (Online)</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#111] p-6 rounded-2xl border border-gray-700 text-center"
          >
            <FaCertificate className="text-4xl text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Tax Planning & Auditing</h3>
            <p className="text-gray-400">CITN & Certified Fraud Institute</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#111] p-6 rounded-2xl border border-gray-700 text-center"
          >
            <FaUniversity className="text-4xl text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Certified Gender Analyst</h3>
            <p className="text-gray-400">UN & Local Training Partners</p>
          </motion.div>
        </div>

        <div className="text-center pt-12">
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Her pursuit of knowledge continues to fuel her work in public service, gender equity, and policy transformation.
          </p>
        </div>
      </motion.div>
    </section>
  );
}