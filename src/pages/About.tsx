import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa6";
const navItems = [
    "About",
    "Achievements",
    "Timeline",
    "Spotlight",
    "Philanthropy",
    "Gallery",
    "Contact",
    "Education"
];

const textColor = "#ffffff"; // Define the text color


const awards = [
    {
        title: "Humanitarian of the Year",
        year: "2023",
    },
    {
        title: "International Women's Day PR Times Honours",
        year: "2023",
    },
    {
        title: "WHO IS WHO Impact Maker Award",
        year: "2022",
    },
    {
        title: "CEO Golf Cup Champion (Zanzibar)",
        year: "2023",
    },
];

export default function AboutSection() {
    return (
        <div>
            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md border-b border-white/20 px-8 py-4" >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <h1 className="text-lg md:text-2xl font-playfair font-bold" style={{ color: textColor }}>
                        Stella Whyte
                    </h1>
                    <ul className="hidden md:flex gap-6 text-sm font-outfit" style={{ color: textColor }}>
                        {navItems.map((item) => (
                            <li
                                key={item}
                                className="cursor-pointer hover:text-yellow-300 transition-colors"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="md:hidden text-2xl" style={{ color: textColor }}>☰</div>
                </div>
            </nav >
            <section className="min-h-screen bg-black text-white px-6 md:px-20 py-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl h-full"
                    >
                        <img
                            src="/images/stella-about.jpg"
                            alt="Ebosetale Stella Okhueleigbe"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                            <p className="text-lg font-semibold text-yellow-300">
                                Public Servant. Visionary. Woman of Impact.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-playfair text-yellow-300">
                            About Stella
                        </h2>
                        <p className="text-lg font-outfit text-gray-200 leading-relaxed">
                            A fierce voice for justice, equity, and the underserved — Ebosetale
                            Stella Okhueleigbe is more than a public servant. She is a movement.
                            <br />
                            <br />
                            Armed with a Master’s in Gender Studies and an MBA, and trained by elite
                            institutions like Harvard Business School and the London School of
                            Business Administration, Stella is rewriting what modern leadership looks like.
                            <br />
                            <br />
                            From founding the Women Mentorship Forum to leading the Vote Right Campaign,
                            her initiatives echo across communities, empowering the voiceless and fighting
                            systemic neglect.
                        </p>
                    </motion.div>
                </div>

                {/* Awards Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-3xl font-playfair text-yellow-300 mb-6 text-center">
                        Awards & Recognitions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {awards.map((award, i) => (
                            <div
                                key={i}
                                className="bg-[#111] rounded-xl p-6 text-center shadow-xl hover:shadow-yellow-300/20 transition duration-300"
                            >
                                <FaAward className="text-yellow-300 text-4xl mx-auto mb-3" />
                                <h4 className="text-xl font-semibold mb-1">{award.title}</h4>
                                <p className="text-sm text-gray-400">{award.year}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Quote */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="mt-20 text-center"
                >
                    <p className="text-xl md:text-2xl italic text-gray-300 max-w-3xl mx-auto">
                        “I believe leadership is not about control, it’s about compassion.”
                    </p>
                </motion.div>
            </section>
        </div>
    );
}
