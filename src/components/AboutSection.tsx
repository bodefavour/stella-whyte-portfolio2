import { motion } from "framer-motion";
import stella1 from "../assets/stella1.png";
import { Helmet } from "react-helmet-async";
import CountUp from "react-countup";

export const AboutSection: React.FC = () => (
  <section className="relative py-24 bg-black text-white overflow-hidden">
    <Helmet>
      <title>About Ebosetale Okhueleigbe</title>
      <meta
        name="description"
        content="Learn more about Ebosetale Okhueleigbe, her journey, and her impact."
      />
      <link rel="canonical" href="https://www.ebosetaleokhueleigbe.com/" />
    </Helmet>

    {/* Background shimmer */}
    <div className="absolute inset-0 bg-gradient-to-br from-yellow-800/10 to-yellow-400/5 blur-3xl opacity-20 z-0" />

    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
      {/* Left: Visual */}
      <motion.div
        className="w-full flex justify-center"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <img
            src={stella1}
            alt="Ebosetale Okhueleigbe"
            className="w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-yellow-400/30"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm bg-yellow-400 text-black px-3 py-1 rounded-full shadow-lg font-semibold">
            Public Servant • Advocate • Strategist
          </div>
        </div>
      </motion.div>

      {/* Right: Text */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-yellow-300">
          Meet Ebosetale Okhueleigbe, ACTI
        </h2>

        <p className="text-lg font-outfit text-gray-300 leading-relaxed">
          A dynamic and results-oriented leader with a Master's in Gender Studies, MBA, and top-tier certifications from Harvard Business School and the London School of Business Administration. Ebosetale is a tax auditor, gender analyst, and public service strategist dedicated to inclusive leadership.
        </p>

        <p className="text-lg font-outfit text-gray-300 leading-relaxed">
          She is the founder of <strong>P.S.L</strong> and the <strong>Women Mentorship Forum (WMF)</strong>, and currently serves as President of <strong>Voice Out Vanguard</strong> and leader of the <strong>Vote Right Campaign</strong>.
        </p>

        <p className="text-lg font-outfit text-gray-300 leading-relaxed">
          Her certifications span Financial Accounting, Corporate Finance, Tax Planning, and Strategic Management. She’s an Associate Member of the Chartered Institute of Taxation of Nigeria (CITN) and the Chartered Institute of Forensics and Certified Fraud Investigators of Nigeria.
        </p>

        <p className="text-lg font-outfit text-gray-300 leading-relaxed">
          Recognized as <strong>Humanitarian of the Year</strong>, a <strong>PR Times Africa</strong> honoree, and <strong>WHO IS WHO Impact Maker</strong>, she champions equity, empowerment, and sustainable development across Africa.
        </p>
      </motion.div>
    </div>

    {/* Stats Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-20 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6"
    >
      {[
        { label: "Certifications", value: 15 },
        { label: "Awards Received", value: 10 },
        { label: "Communities Served", value: 30 },
        { label: "Years of Impact", value: 12 },
      ].map((stat, idx) => (
        <div
          key={idx}
          className="text-center bg-[#111] p-6 rounded-xl shadow-md border border-yellow-400/10"
        >
          <h3 className="text-4xl font-bold text-yellow-300">
            <CountUp end={stat.value} duration={2} />+
          </h3>
          <p className="text-sm text-gray-400 mt-2 uppercase tracking-wide">
            {stat.label}
          </p>
        </div>
      ))}
    </motion.div>
  </section>
);