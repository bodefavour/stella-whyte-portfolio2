import { motion } from "framer-motion";
import { SEO } from "../components/SEO";

const achievements = [
    {
        title: "Humanitarian of the Year",
        description:
            "Recognized for outstanding service to marginalized communities across Nigeria.",
        date: "2023",
    },
    {
        title: "PR Times Africa Award - Int’l Women’s Day",
        description:
            "Awarded for advocacy in gender equity and women empowerment initiatives.",
        date: "2022",
    },
    {
        title: "WHO IS WHO Impact Maker Award",
        description:
            "Honored for driving sustainable development and policy change through inclusive leadership.",
        date: "2021",
    },
    {
        title: "Top 100 African Change Leaders",
        description:
            "Named among the top 100 African changemakers for transformational leadership in the public sector.",
        date: "2020",
    },
    {
        title: "African Women in Leadership Hall of Fame",
        description:
            "Inducted for exceptional work in mentoring, advocacy, and public service.",
        date: "2019",
    },
];

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


const textColor = "#ffffff";

export default function AchievementsSection() {
    return (
        <>
            <SEO 
                title="Awards & Achievements - Ebosetale Okhueleigbe"
                description="Humanitarian of the Year, PR Times Africa Award, WHO IS WHO Impact Maker, Top 100 African Change Leaders, African Women in Leadership Hall of Fame. Ebosetale's awards and recognitions."
                canonicalUrl="https://www.ebosetaleokhueleigbe.com/achievements"
            />
            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md border-b border-white/20 px-8 py-4">
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
            </nav>
            <section className="min-h-screen bg-black py-20 px-6 md:px-20">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-playfair text-yellow-300 mb-4"
                    >
                        Achievements & Recognitions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-200 text-lg max-w-3xl mx-auto mb-12"
                    >
                        Over the years, Stella Okhueleigbe has received numerous awards for her humanitarian work,
                        public service leadership, and commitment to social impact in Africa.
                    </motion.p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {achievements.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-yellow-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
                            >
                                <h3 className="text-xl font-semibold text-yellow-900 mb-2">
                                    {award.title}
                                </h3>
                                <p className="text-gray-900 text-sm mb-3">{award.description}</p>
                                <span className="text-sm font-medium text-yellow-700">{award.date}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
