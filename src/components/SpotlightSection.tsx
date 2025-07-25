import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet-async";
type SpotlightItem = {
  id: string;
  mediaType: "video" | "article";
  src: string;
  title: string;
  description: string;
};

const spotlights: SpotlightItem[] = [
  {
    id: "yourview",
    mediaType: "video",
    src: "https://www.youtube.com/watch?v=5HDbfAlNxbQ",
    title: "Exclusive: The Story You Haven't Heard",
    description:
      "Ebosetale opens up in an intimate chat with Your View TV about her personal journey — June 5, 2025.",
  },
  {
    id: "thisday",
    mediaType: "article",
    src: "https://www.thisdaylive.com/2025/05/25/ebosetale-okhueleigbe-lauds-fgs-business-friendly-initiatives/",
    title: "Lauds FG’s Business‑Friendly Initiatives",
    description:
      "In a high-profile feature with ThisDay, Ebosetale commends Nigeria’s economic strides — May 25, 2025.",
  },
  {
    id: "superfm",
    mediaType: "video",
    src: "https://www.facebook.com/superfmlagos/videos/1729418551031043/",
    title: "Super FM: A Powerful Session",
    description:
      "She shook the table on Women of Dignity at Super FM Lagos — May 2025.",
  },
  {
    id: "instagramreel",
    mediaType: "video",
    src: "https://www.instagram.com/reel/DKwi-AvsqGW/",
    title: "Power Moment on Instagram",
    description:
      "In a viral Instagram reel, Ebosetale shares a fierce message — 2025.",
  },
  {
    id: "youtube2",
    mediaType: "video",
    src: "https://www.youtube.com/watch?v=bwYtcfZDjRo",
    title: "In Conversation with Women of Grace",
    description:
      "Women of Grace hosts Stella for a spirited conversation — 2025.",
  },
];

export const SpotlightSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % spotlights.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const item = spotlights[index];

  const isFacebookVideo = (url: string) =>
    url.includes("facebook.com") && item.mediaType === "video";

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
      <section className="min-h-screen bg-black text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              {item.mediaType === "video" ? (
                <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full">
                    {isFacebookVideo(item.src) ? (
                      <iframe
                        src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                          item.src
                        )}`}
                        width="100%"
                        height="100%"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        title="Facebook video"
                      />
                    ) : (
                      <ReactPlayer
                        url={item.src}
                        playing
                        controls
                        muted
                        width="100%"
                        height="100%"
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-[#111] p-8 flex flex-col justify-center items-start h-full">
                  <h3 className="text-2xl font-playfair mb-4">{item.title}</h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  <a
                    href={item.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-yellow-300 text-black font-medium rounded-full hover:bg-yellow-400 transition"
                  >
                    Read Article
                  </a>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          <motion.div
            key={item.id + "-text"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-playfair text-yellow-300">
              {item.title}
            </h2>
            <p className="text-lg md:text-xl font-outfit text-gray-200">
              {item.description}
            </p>
            {item.mediaType === "video" && (
              <a
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-yellow-300 text-black font-medium rounded-full hover:bg-yellow-400 transition"
              >
                Watch Full Video
              </a>
            )}
          </motion.div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          {spotlights.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-4 h-4 rounded-full ${index === i ? "bg-yellow-300" : "bg-gray-600"
                }`}
            />
          ))}
        </div>
      </section>
    </>
  );
};