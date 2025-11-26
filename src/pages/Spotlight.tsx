import { motion } from "framer-motion";
import { FaVideo, FaNewspaper, FaBullhorn } from "react-icons/fa";
import { SEO } from "../components/SEO";

const spotlights = [
  {
    icon: <FaVideo className="text-yellow-400 text-3xl mb-3" />,
    title: "TV Interviews & Panels",
    desc: "Featured on AIT, Channels, and NTA discussing gender equity, policy reform, and public leadership.",
  },
  {
    icon: <FaNewspaper className="text-yellow-400 text-3xl mb-3" />,
    title: "Press Coverage",
    desc: "Published in The Guardian, Punch, and Vanguard for her humanitarian work and governance impact.",
  },
  {
    icon: <FaBullhorn className="text-yellow-400 text-3xl mb-3" />,
    title: "Public Campaigns",
    desc: "Led the ‘Vote Right’ campaign reaching over 500,000 youths during the last election cycle.",
  },
];

export default function SpotlightPage() {
  return (
    <>
      <SEO 
        title="Media Spotlight - Ebosetale Okhueleigbe | TV Interviews & Press"
        description="Watch Ebosetale Okhueleigbe's TV interviews on AIT, Channels, NTA, and read press coverage in The Guardian, Punch, and Vanguard. Featured media appearances and public campaigns."
        canonicalUrl="https://www.ebosetaleokhueleigbe.com/spotlight"
      />
      <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 font-playfair">
            Spotlight
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
            Moments that defined her public image, inspired movements, and shifted narratives.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {spotlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl p-6 text-center shadow-lg hover:shadow-yellow-400/20 transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-yellow-200 mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Media Embed Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-20"
        >
          <h4 className="text-2xl md:text-3xl text-yellow-300 font-playfair mb-6 text-center">
            Watch Her in Action
          </h4>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-96 rounded-xl shadow-2xl"
              src="https://www.youtube.com/embed/kVcPtvjJ3ZI"
              title="Stella Whyte Interview"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}