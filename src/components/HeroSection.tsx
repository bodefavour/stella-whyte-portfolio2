import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ColorThief from "colorthief";
import { Helmet } from "react-helmet-async";
import { FaTimes, FaBars } from "react-icons/fa";
import stella1 from "../assets/stella1.png";
import stella2 from "../assets/stella2.png";
import stella3 from "../assets/stella3.png";
import stella4 from "../assets/IMG-20250706-WA0027.jpg";
import stella5 from "../assets/IMG-20250706-WA0030.jpg";
import stella6 from "../assets/IMG-20250706-WA0019.jpg";
import stella7 from "../assets/IMG-20250706-WA0025(1).jpg";
import stella8 from "../assets/IMG-20250706-WA0023(1).jpg";

<link rel="canonical" href="https://www.ebosetaleokhueleigbe.com/" />

const navItems = [
  { label: "About", path: "/about" },
  { label: "Speaking", path: "/speaking" },
  { label: "Achievements", path: "/achievements" },
  { label: "Timeline", path: "/timeline" },
  { label: "Spotlight", path: "/spotlight" },
  { label: "Philanthropy", path: "/philanthropy" },
  { label: "Education", path: "/education" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const images = [
  {
    src: stella1,
    titles: ["Gender Analyst", "Golf Champion", "Media Personality"],
  },
  {
    src: stella2,
    titles: ["Founder", "Tax Auditor", "Public Speaker"],
  },
  {
    src: stella3,
    titles: ["TV Host", "Entrepreneur", "Humanitarian", "Advocate"],
  },
{
    src: stella4,
    titles: ["Philanthropist", "Beauty Queen", "Media Personality"],
  },
{
    src: stella5,
    titles: ["Public Speaker", "Entrepreneur", "Humanitarian"],
  },
{
    src: stella5,
    titles: ["Media Personality", "Beauty Queen", "Public Speaker"],
  },
  {
    src: stella6,
    titles: ["Tax Auditor", "Gender Analyst", "Golf Champion"],
  },
  {
    src: stella7,
    titles: ["Advocate", "Tax Auditor", "Founder"],
  },
  {
    src: stella8,
    titles: ["Tv Host", "Beauty Queen", "Philanthropist"],
  },
];

function getBrightness(r: number, g: number, b: number): number {
  return (r * 299 + g * 587 + b * 114) / 1000;
}

export const NavHeroCombo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState("#f9f9f9");
  const [textColor, setTextColor] = useState("black");
  const [titleIndex, setTitleIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const cycle = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setTitleIndex(0);
    }, 8000);
    return () => clearInterval(cycle);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = images[currentIndex].src;
    img.onload = () => {
      // eslint-disable-next-line
      try {
        // eslint-disable-next-line
        const colorThief = new ColorThief();
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0, img.width, img.height);
        const rgb = ctx?.getImageData(0, 0, 1, 1).data;
        if (rgb) {
          const r = rgb[0];
          const g = rgb[1];
          const b = rgb[2];
          setBgColor(`rgb(${r}, ${g}, ${b})`);
          const brightness = getBrightness(r, g, b);
          setTextColor(brightness < 128 ? "white" : "black");
        }
      } catch {
        setBgColor("#f2f2f2");
        setTextColor("black");
      }
    };
  }, [currentIndex]);

  useEffect(() => {
    const titleCycle = setInterval(() => {
      setTitleIndex(
        (prev) => (prev + 1) % images[currentIndex].titles.length
      );
    }, 2500);
    return () => clearInterval(titleCycle);
  }, [currentIndex]);

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
      <section
        className="relative min-h-screen w-full transition-colors duration-1000 overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md border-b border-white/20 px-4 md:px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="text-lg md:text-2xl font-playfair font-bold" style={{ color: textColor }}>
              Stella Whyte
            </Link>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 text-sm font-outfit" style={{ color: textColor }}>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="cursor-pointer hover:text-yellow-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-2xl z-50" 
              style={{ color: textColor }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/60 md:hidden z-40"
                  onClick={() => setMobileMenuOpen(false)}
                />
                
                {/* Sidebar */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="fixed top-0 right-0 h-full w-[280px] bg-[#0a0a0a] md:hidden z-50 shadow-2xl border-l border-yellow-300/20"
                  style={{ backgroundColor: '#0a0a0a' }}
                >
                  {/* Close Button */}
                  <div className="flex justify-end p-6">
                    <button 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white hover:text-yellow-300 transition-colors"
                      aria-label="Close menu"
                    >
                      <FaTimes size={24} />
                    </button>
                  </div>

                  {/* Logo/Name */}
                  <div className="px-6 mb-8">
                    <h2 className="text-2xl font-playfair font-bold text-yellow-300 border-b border-yellow-300/20 pb-4">
                      Stella Whyte
                    </h2>
                  </div>

                  {/* Menu Items */}
                  <nav className="px-6">
                    <ul className="space-y-1">
                      {navItems.map((item, index) => (
                        <motion.li
                          key={item.path}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            to={item.path}
                            className="block py-3 px-4 text-gray-200 hover:text-yellow-300 hover:bg-yellow-300/10 rounded-lg transition-all duration-200 font-outfit text-base border-b border-gray-800/50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>

                  {/* Footer */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs text-gray-400 text-center font-outfit italic">
                      Building Legacies Through Grace and Grit
                    </p>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>

        <div className="w-full h-screen pt-12 px-6 md:px-20 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between relative z-10">
          <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
            <div className="relative rounded-full p-4 bg-white/10 backdrop-blur-lg shadow-xl">
              <img
                src={images[currentIndex].src}
                alt="Stella"
                className="h-[400px] md:h-[520px] object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                style={{ filter: "drop-shadow(0 0 35px rgba(255,255,255,0.3))" }}
              />
              <div
                className="absolute inset-0 blur-3xl opacity-40 rounded-full z-[-1]"
                style={{ backgroundColor: bgColor }}
              ></div>
            </div>
          </div>

          <div
            className="w-full md:w-1/2 text-center md:text-left z-10"
            style={{ color: textColor }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold font-playfair"
            >
              Ebosetale Okhueleigbe
            </motion.h1>

            <AnimatePresence mode="wait">
              <motion.p
                key={titleIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-2xl font-outfit tracking-wide mt-4"
              >
                {images[currentIndex].titles[titleIndex]}
              </motion.p>
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-6 text-base md:text-lg font-light font-outfit italic"
            >
              Building Legacies Through Grace and Grit
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};
