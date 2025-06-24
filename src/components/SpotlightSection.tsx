import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import "keen-slider/keen-slider.min.css";

// Helper to extract YouTube thumbnail
const getYouTubeThumbnail = (url: string): Promise<string> => {
  const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/);
  if (!match) return Promise.resolve("");

  const videoId = match[1];
  const maxResUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return new Promise((resolve) => {
    const img = new Image();
    img.src = maxResUrl;
    img.onload = () => resolve(maxResUrl);
    img.onerror = () => resolve(fallbackUrl);
  });
};

// Custom VideoPlayer with thumbnail preview
const VideoPlayer = ({ url }: { url: string }) => {
  const [playing, setPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    getYouTubeThumbnail(url).then(setThumbnail);
  }, [url]);

  return (
    <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-full">
        {playing ? (
          <ReactPlayer
            url={url}
            playing
            controls
            width="100%"
            height="100%"
          />
        ) : (
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={() => setPlaying(true)}
          >
            <img
              src={thumbnail}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl text-2xl font-bold hover:scale-110 transition">
                ▶
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Spotlight content array
const spotlights = [
  {
    id: "yourview",
    mediaType: "video",
    src: "https://www.youtube.com/watch?v=5HDbfAlNxbQ",
    title: "Exclusive: The Story You Haven't Heard",
    description:
      "Ebosetale opens up in an intimate chat with *Your View TV* about her personal journey, lessons, and values — June 5, 2025.",
  },
  {
    id: "thisday",
    mediaType: "article",
    src: "https://www.thisdaylive.com/2025/05/25/ebosetale-okhueleigbe-lauds-fgs-business-friendly-initiatives/",
    title: "Lauds FG’s Business‑Friendly Initiatives",
    description:
      "In a high-profile feature with *ThisDay*, Ebosetale commends Nigeria’s economic strides and support for business owners — May 25, 2025.",
  },
  {
    id: "superfm",
    mediaType: "video",
    src: "https://www.facebook.com/superfmlagos/videos/-what-a-powerful-session-ebosetale-okhueleigbe-just-shook-the-table-on-todays-wo/1729418551031043/",
    title: "Super FM: A Powerful Session",
    description:
      "She shook the table on *Women of Dignity* at Super FM Lagos with fearless truth, activism, and vision — May 2025.",
  },
  {
    id: "instagramreel",
    mediaType: "video",
    src: "https://www.instagram.com/reel/DKwi-AvsqGW/",
    title: "Power Moment on Instagram",
    description:
      "In a viral Instagram reel, Ebosetale shares a fierce message on faith, power, and feminine excellence — 2025.",
  },
  {
    id: "youtube2",
    mediaType: "video",
    src: "https://www.youtube.com/watch?v=bwYtcfZDjRo",
    title: "In Conversation with Women of Grace",
    description:
      "*Women of Grace* hosts Stella for a spirited conversation on identity, service, and the future of women in leadership — 2025.",
  },
];

// Spotlight Section
export const SpotlightSection = () => {
  const [index, setIndex] = useState(0);
  const item = spotlights[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % spotlights.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md"
          >
            {item.mediaType === "video" ? (
              <VideoPlayer url={item.src} />
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
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
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

      {/* Dots Navigation */}
      <div className="mt-8 flex justify-center space-x-4">
        {spotlights.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 rounded-full transition ${
              index === i ? "bg-yellow-300" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};