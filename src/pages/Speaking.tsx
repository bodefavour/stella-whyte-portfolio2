import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMicrophone, FaCalendar, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { SEO } from "../components/SEO";

// Blog-style speaking engagement data
const speakingEngagements = [
  {
    id: "ice-connect-2025",
    title: "The ICE Connect 2025: Lagos State University",
    date: "July 2nd, 2025",
    location: "Lagos State University (LASU)",
    excerpt: "A dynamic student-focused networking experience that brought together forward-thinking students, innovators, and young creatives.",
    coverImage: "/assets/IMG-20250706-WA0017.jpg",
    coverVideo: "https://res.cloudinary.com/dydwcaxmx/video/upload/v1752093786/VID-20250706-WA0035_xjobbn.mp4",
    category: "Youth Empowerment",
    images: [
      "/assets/IMG-20250706-WA0017.jpg",
      "/assets/IMG-20250706-WA0019.jpg",
      "/assets/IMG-20250703-WA0011.jpg",
    ],
    fullDescription: `On July 2nd, 2025, Ebosetale was a featured speaker at The ICE Connect 2025, a dynamic student-focused networking experience hosted at Lagos State University (LASU). ICE Connect brought together forward-thinking students, innovators, and young creatives under one roof to connect, share ideas, and build meaningful collaborations.

As a keynote speaker, Ebosetale inspired the audience with powerful insights on leadership, career development, and the importance of building authentic connections in today's fast-paced world. Her message resonated deeply with the students, encouraging them to pursue their dreams with passion and purpose.`
  },
  {
    id: "africa-women-conference-2024",
    title: "Africa Women Conference, Zambia 2024",
    date: "2024",
    location: "Lusaka, Zambia",
    excerpt: "Represented Nigeria on an international stage discussing empowerment, innovation, and inclusive leadership.",
    coverImage: "/assets/Screenshot_20250525-213124.jpg",
    coverVideo: "https://res.cloudinary.com/dydwcaxmx/video/upload/v1752093628/VID-20250706-WA0032_ftnclr.mp4",
    category: "International Conference",
    images: [
      "/assets/IMG-20250709-WA0006.jpg",
      "/assets/Screenshot_20250525-213124.jpg",
      "/assets/IMG-20250709-WA0008.jpg",
      "/assets/IMG-20250709-WA0009.jpg",
    ],
    fullDescription: `In 2024, Miss Ebosetale proudly represented Nigeria on an international stage as a distinguished speaker at the Africa Women's Conference (AWC) held in Lusaka, Zambia. 

Themed around empowerment, innovation, and inclusive leadership, the AWC brought together women changemakers, leaders, and advocates from across the continent and diaspora to shape the future of African communities through dialogue and actionable strategies.

Ebosetale's session focused on breaking barriers in leadership and creating sustainable pathways for women in governance and public service. Her powerful testimony and practical frameworks inspired attendees and sparked meaningful conversations about the role of women in driving Africa's development.`
  },
  {
    id: "africa-trade-consortium-2025",
    title: "Africa Trade Consortium's Tea Break Edition 2025",
    date: "2025",
    location: "Grand Pela Hotel, Abuja",
    excerpt: "Discussing tax incentives, business growth, and government support for Nigerian enterprises.",
    coverImage: "/assets/Screenshot_20250525-213124.jpg",
    coverVideo: "https://res.cloudinary.com/dydwcaxmx/video/upload/v1752134438/AQNqEq2M18UjrLa5qO8twKHBjkBJnG4kfxustw1pSYJ40J2xzCGawMjOfM2Zq0SaKvhU1G1oQnlEBwoebFYCdeBV_gKadFqg_jukvgs.mp4",
    category: "Business & Economy",
    images: [
      "/assets/Screenshot_20250525-213124.jpg",
      "/assets/IMG-20250709-WA0006.jpg",
      "/assets/IMG-20250709-WA0009.jpg",
    ],
    fullDescription: `Speaking at the Africa Trade Consortium's Tea Break Edition held at the Grand Pela Hotel in Abuja, Ebosetale Okhueleigbe commended the government's efforts to support businesses through tax exemptions, Pioneer Status Incentives, Export Processing Grants, and other tax reliefs.

She noted that these incentives will not only strengthen businesses but also create jobs, reduce poverty, and improve the standard of living for Nigerians. Her expertise in tax policy and public finance brought valuable insights to the business community, helping entrepreneurs understand how to leverage government programs for business growth.`
  },
];

export default function SpeakingPage() {
  return (
    <>
      <SEO 
        title="Speaking Engagements - Ebosetale Okhueleigbe | Keynote Speaker"
        description="Book Ebosetale Okhueleigbe for speaking engagements. Featured speaker at Africa Women Conference, ICE Connect 2025, and Africa Trade Consortium. Expert in leadership, empowerment, and tax policy."
        canonicalUrl="https://www.ebosetaleokhueleigbe.com/speaking"
        keywords="Ebosetale Okhueleigbe speaker, keynote speaker Nigeria, Africa Women Conference, business speaker, tax policy expert, women empowerment speaker"
      />

      <div className="min-h-screen bg-gradient-to-b from-black via-[#0e0e10] to-black text-white">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 px-4 md:px-6 lg:px-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/10 to-transparent opacity-30" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto relative z-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaMicrophone className="text-yellow-300 text-3xl md:text-4xl" />
              <span className="text-yellow-300 font-semibold text-base md:text-lg">Speaking Engagements</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-playfair text-white mb-6">
              Inspiring Voices,<br />
              <span className="text-yellow-300">Transforming Lives</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-outfit max-w-3xl">
              From international conferences to community forums, Ebosetale shares her expertise in leadership, empowerment, and social transformation.
            </p>
          </motion.div>
        </section>

        {/* Speaking Engagements Grid */}
        <section className="py-16 px-6 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              {speakingEngagements.map((engagement, index) => (
                <motion.article
                  key={engagement.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-300/20 transition-all duration-500 group"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Media Section */}
                    <div className="relative h-80 md:h-full overflow-hidden">
                      {engagement.coverVideo ? (
                        <video
                          src={engagement.coverVideo}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <img
                          src={engagement.coverImage}
                          alt={engagement.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-yellow-300 text-black px-4 py-2 rounded-full text-sm font-semibold">
                        {engagement.category}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap gap-4 mb-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-2">
                            <FaCalendar className="text-yellow-300" />
                            <span>{engagement.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-yellow-300" />
                            <span>{engagement.location}</span>
                          </div>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-playfair text-yellow-300 mb-4 group-hover:text-yellow-200 transition-colors">
                          {engagement.title}
                        </h2>

                        <p className="text-gray-300 font-outfit text-lg leading-relaxed mb-6">
                          {engagement.excerpt}
                        </p>

                        <p className="text-gray-400 font-outfit leading-relaxed">
                          {engagement.fullDescription.substring(0, 200)}...
                        </p>
                      </div>

                      {/* Images Grid */}
                      <div className="mt-8">
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {engagement.images.slice(0, 3).map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt={`${engagement.title} - Photo ${i + 1}`}
                              className="w-full h-24 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                            />
                          ))}
                        </div>
                        
                        <button className="flex items-center gap-2 text-yellow-300 hover:text-yellow-200 font-semibold transition-colors group/btn">
                          <span>View Full Gallery</span>
                          <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 px-6 md:px-20"
        >
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-yellow-900/20 to-yellow-700/10 rounded-3xl p-12 border border-yellow-300/20">
            <h3 className="text-3xl md:text-4xl font-playfair text-yellow-300 mb-6">
              Invite Ebosetale to Speak at Your Event
            </h3>
            <p className="text-gray-300 font-outfit text-lg mb-8">
              Whether it's a conference, summit, or community gathering, bring powerful insights and inspiration to your audience.
            </p>
            <Link
              to="/booking"
              className="inline-block bg-yellow-300 text-black font-semibold py-4 px-10 rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
            >
              Book Her to Speak
            </Link>
          </div>
        </motion.section>
      </div>
    </>
  );
}
