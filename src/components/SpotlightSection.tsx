import { motion } from "framer-motion";

const spotlights = [
  {
    title: "The Story You Haven't Heard",
    platform: "YouTube - Your View TVC",
    date: "5 June 2025",
    url: "https://youtu.be/5HDbfAlNxbQ",
    description:
      "A heartfelt chat about her lifestyle, journey, and inspiration.",
    thumbnail: "https://img.youtube.com/vi/5HDbfAlNxbQ/0.jpg",
  },
  {
    title: "FG’s Business-Friendly Initiatives",
    platform: "ThisDay Live",
    date: "25 May 2025",
    url: "https://www.thisdaylive.com/2025/05/25/ebosetale-okhueleigbe-lauds-fgs-business-friendly-initiatives/",
    description:
      "She comments on the federal government’s economic strategies.",
    thumbnail: "/assets/thisday-thumbnail.jpg",
  },
  {
    title: "Powerful Session on SuperFM",
    platform: "Facebook Live",
    url: "https://www.facebook.com/superfmlagos/videos/-what-a-powerful-session-ebosetale-okhueleigbe-just-shook-the-table-on-todays-wo/1729418551031043/",
    description:
      "A powerful session where she shook the table on women’s issues.",
    thumbnail: "/assets/fb-session.jpg",
  },
  {
    title: "Instagram Advocacy Highlight",
    platform: "Instagram Reel",
    url: "https://www.instagram.com/reel/DKwi-AvsqGW/",
    description:
      "Quick visual insight into her advocacy and daily moments.",
    thumbnail: "/assets/ig-highlight.jpg",
  },
  {
    title: "Speech on Leadership",
    platform: "YouTube",
    url: "https://youtu.be/bwYtcfZDjRo",
    description:
      "A motivating speech clip on leadership & values.",
    thumbnail: "https://img.youtube.com/vi/bwYtcfZDjRo/0.jpg",
  },
];

export const SpotlightSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-[#f7f7f7] to-[#e6e6e6] text-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12"
        >
          Spotlight
        </motion.h2>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-8 justify-center">
          {spotlights.map((item, index) => (
            <motion.a
              href={item.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-[300px] bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all backdrop-blur-md bg-opacity-60"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold font-outfit">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 font-light">{item.platform}</p>
                {item.date && (
                  <p className="text-xs text-gray-500">{item.date}</p>
                )}
                <p className="text-sm text-gray-700 font-outfit">
                  {item.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};