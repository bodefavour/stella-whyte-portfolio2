import { motion } from "framer-motion";
import stella1 from "../assets/stella1.png";

export const AboutSection: React.FC = () => (
  <section className="py-20 bg-white text-gray-900">
    <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Visual */}
      <motion.div
        className="w-full flex justify-center"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={stella1}
          alt="Mrs. Okhueleigbe Ebosetale"
          className="w-80 h-80 object-cover rounded-3xl shadow-2xl"
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900">
          Meet Mrs. Okhueleigbe “Stella” Ebosetale, ACTI
        </h2>

        <p className="text-lg font-outfit text-gray-700 leading-relaxed">
          A dynamic and results-oriented leader with a Master's in Gender Studies, MBA, and top-tier certifications from Harvard Business School and the London School of Business Administration. Stella is a tax auditor, gender analyst, and public service strategist dedicated to inclusive leadership.
        </p>

        <p className="text-lg font-outfit text-gray-700 leading-relaxed">
          She is the founder of <strong>P.S.L</strong> and the <strong>Women Mentorship Forum (WMF)</strong>, and currently serves as President of <strong>Voice Out Vanguard</strong> and leader of the <strong>Vote Right Campaign</strong>. Her impact reaches marginalized communities, widows, and displaced persons.
        </p>

        <p className="text-lg font-outfit text-gray-700 leading-relaxed">
          Stella holds certifications in Financial Accounting, Corporate Finance, Tax Planning, and Strategic Management. She's an Associate Member of the Chartered Institute of Taxation of Nigeria (CITN) and the Chartered Institute of Forensics and Certified Fraud Investigators of Nigeria.
        </p>

        <p className="text-lg font-outfit text-gray-700 leading-relaxed">
          Her accolades include <strong>Humanitarian of the Year</strong>, the <strong>PR Times Africa Award</strong> on International Women’s Day, and the <strong>WHO IS WHO Impact Maker Award</strong>. Through compassionate leadership, Stella continues to champion equity, empowerment, and sustainable development across Africa.
        </p>

        {/* Optional Contact Section */}
        <div className="mt-6 text-sm text-gray-500 font-outfit">
          <p>📞 +234 813 236 5498</p>
          <p>✉️ Africanwomenandtechnology@gmail.com | ladysmartie@gmail.com</p>
        </div>
      </motion.div>
    </div>
  </section>
);