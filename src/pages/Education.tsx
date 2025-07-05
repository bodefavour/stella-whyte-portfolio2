import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaCertificate } from "react-icons/fa";

const education = [
  {
    icon: <FaUniversity className="text-yellow-400 text-3xl mb-3" />,
    institution: "University of Abuja",
    qualification: "Master's in Gender Studies",
    year: "Graduated: 2020",
  },
  {
    icon: <FaUniversity className="text-yellow-400 text-3xl mb-3" />,
    institution: "Ambrose Alli University, Ekpoma",
    qualification: "MBA in Business Administration",
    year: "Graduated: 2015",
  },
  {
    icon: <FaCertificate className="text-yellow-400 text-3xl mb-3" />,
    institution: "Harvard Business School (Online)",
    qualification: "Certificate in Strategic Leadership",
    year: "Certified: 2021",
  },
  {
    icon: <FaCertificate className="text-yellow-400 text-3xl mb-3" />,
    institution: "London School of Business Administration",
    qualification: "Certificate in Management & Finance",
    year: "Certified: 2022",
  },
  {
    icon: <FaCertificate className="text-yellow-400 text-3xl mb-3" />,
    institution: "Chartered Institute of Taxation of Nigeria (CITN)",
    qualification: "Associate Member",
    year: "Certified: 2023",
  },
  {
    icon: <FaCertificate className="text-yellow-400 text-3xl mb-3" />,
    institution: "CIFCFIN Nigeria",
    qualification: "Certified Forensics & Fraud Investigator",
    year: "Certified: 2023",
  },
];

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 font-playfair">
            Education & Certifications
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
            Empowered by world-class education, driven by purpose.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#1a1a1a] rounded-xl p-6 shadow-md hover:shadow-yellow-300/20 transition"
            >
              <div className="flex items-start gap-4">
                <div>{edu.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-yellow-200 mb-1">
                    {edu.institution}
                  </h4>
                  <p className="text-sm text-gray-300">{edu.qualification}</p>
                  <p className="text-xs text-gray-500 mt-1">{edu.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-xl md:text-2xl italic text-gray-300 max-w-3xl mx-auto">
            “Education is not preparation for life; education is life itself.”
          </p>
        </motion.div>
      </div>
    </div>
  );
}