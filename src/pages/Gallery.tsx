import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SEO } from "../components/SEO";

// Gallery categories with images
const galleryCategories = [
  {
    id: "speaking-events",
    title: "Speaking Engagements",
    description: "Conferences, summits, and keynote presentations",
    images: [
      { src: "/assets/IMG-20250706-WA0017.jpg", caption: "The ICE Connect 2025, LASU" },
      { src: "/assets/IMG-20250706-WA0019.jpg", caption: "ICE Connect - Networking Session" },
      { src: "/assets/IMG-20250703-WA0011.jpg", caption: "ICE Connect - Student Engagement" },
      { src: "/assets/IMG-20250709-WA0006.jpg", caption: "Africa Women Conference, Zambia" },
      { src: "/assets/Screenshot_20250525-213124.jpg", caption: "International Speaking" },
      { src: "/assets/IMG-20250709-WA0008.jpg", caption: "AWC Panel Discussion" },
      { src: "/assets/IMG-20250709-WA0009.jpg", caption: "Conference Keynote" },
      { src: "/assets/SaveClip.App_541221136_17919336519152345_1035506579160725009_n.jpg", caption: "Business Day Event" },
      { src: "/assets/SaveClip.App_541371773_17919336528152345_4318465453906262881_n.jpg", caption: "Leadership Summit" },
      { src: "/assets/SaveClip.App_541298391_17919336507152345_5471861538772609906_n.jpg", caption: "Youth Empowerment Talk" },
      { src: "/assets/SaveClip.App_566800634_18430920349100657_3740313740577026709_n.jpg", caption: "Corporate Event" },
    ],
  },
  {
    id: "awards-achievements",
    title: "Awards & Achievements",
    description: "Recognition and accolades",
    images: [
      { src: "/assets/awards/humanitarian.jpg", caption: "Humanitarian of the Year 2023" },
      { src: "/assets/awards/pr-times.jpg", caption: "PR Times Africa Award" },
      { src: "/assets/awards/who-impact.jpg", caption: "WHO IS WHO Impact Maker" },
      { src: "/assets/awards/golf-champion.jpg", caption: "CEO Golf Cup Champion" },
      { src: "/assets/awards/top-100.jpg", caption: "Top 100 Influential Women" },
      { src: "/assets/awards/leadership.jpg", caption: "African Women in Leadership" },
    ],
  },
  {
    id: "philanthropy",
    title: "Philanthropic Work",
    description: "Community impact and humanitarian efforts",
    images: [
      { src: "/images/philanthropy/foundation.jpg", caption: "Stella Whyte Foundation" },
      { src: "/images/philanthropy/wmf.jpg", caption: "Women Mentorship Forum" },
      { src: "/images/philanthropy/vote-right.jpg", caption: "Vote Right Campaign" },
      { src: "/assets/IMG-20250806-WA0001(1).jpg", caption: "WMF Community Outreach" },
    ],
  },
  {
    id: "professional",
    title: "Professional Journey",
    description: "Career milestones and professional moments",
    images: [
      { src: "/assets/stella1.png", caption: "Professional Portrait" },
      { src: "/assets/stella2.png", caption: "Public Service Leadership" },
      { src: "/assets/stella3.png", caption: "Tax Auditor Excellence" },
      { src: "/assets/IMG-20250706-WA0027.jpg", caption: "Professional Engagement" },
      { src: "/assets/IMG-20250706-WA0030.jpg", caption: "Leadership Moment" },
      { src: "/assets/IMG-20250706-WA0019.jpg", caption: "Conference Speaker" },
      { src: "/assets/IMG-20250706-WA0025(1).jpg", caption: "Professional Setting" },
      { src: "/assets/IMG-20250706-WA0023(1).jpg", caption: "Career Milestone" },
    ],
  },
  {
    id: "media",
    title: "Media Appearances",
    description: "TV interviews, press coverage, and public spotlights",
    images: [
      { src: "/images/stella-about.jpg", caption: "Media Portrait" },
    ],
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentCategoryImages, setCurrentCategoryImages] = useState<{ src: string; caption: string }[]>([]);

  const allImages = galleryCategories.flatMap(cat => cat.images);
  const displayImages = selectedCategory === "all" 
    ? allImages 
    : galleryCategories.find(cat => cat.id === selectedCategory)?.images || [];

  const openLightbox = (image: { src: string; caption: string }, index: number, categoryImages: { src: string; caption: string }[]) => {
    setLightboxImage(image);
    setLightboxIndex(index);
    setCurrentCategoryImages(categoryImages);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    const newIndex = direction === "prev" 
      ? (lightboxIndex - 1 + currentCategoryImages.length) % currentCategoryImages.length
      : (lightboxIndex + 1) % currentCategoryImages.length;
    
    setLightboxIndex(newIndex);
    setLightboxImage(currentCategoryImages[newIndex]);
  };

  return (
    <>
      <SEO 
        title="Gallery - Ebosetale Okhueleigbe | Photo Archive"
        description="Explore the visual journey of Ebosetale Okhueleigbe through photos from speaking engagements, awards, philanthropic work, and professional milestones across Africa."
        canonicalUrl="https://www.ebosetaleokhueleigbe.com/gallery"
      />

      <div className="min-h-screen bg-gradient-to-b from-black via-[#0e0e10] to-black text-white">
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-playfair text-yellow-300 mb-6">
              Gallery
            </h1>
            <p className="text-xl text-gray-300 font-outfit max-w-3xl mx-auto mb-12">
              A visual archive of Ebosetale's journey — events, achievements, humanitarian work, and memorable moments.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === "all"
                    ? "bg-yellow-300 text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                All Photos
              </button>
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-yellow-300 text-black"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Gallery Grid */}
        <section className="px-6 md:px-20 pb-20">
          <div className="max-w-7xl mx-auto">
            {selectedCategory === "all" ? (
              // All categories view
              <div className="space-y-20">
                {galleryCategories.map((category, catIndex) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-8">
                      <h2 className="text-3xl md:text-4xl font-playfair text-yellow-300 mb-2">
                        {category.title}
                      </h2>
                      <p className="text-gray-400 font-outfit">{category.description}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {category.images.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-[#1a1a1a]"
                          onClick={() => openLightbox(image, index, category.images)}
                        >
                          <img
                            src={image.src}
                            alt={image.caption}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.src = "https://via.placeholder.com/400x400/1a1a1a/fbbf24?text=Image";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <p className="text-white text-sm font-outfit">{image.caption}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              // Single category view
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {displayImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-[#1a1a1a]"
                    onClick={() => openLightbox(image, index, displayImages)}
                  >
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/400x400/1a1a1a/fbbf24?text=Image";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm font-outfit">{image.caption}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-yellow-300 transition-colors z-50"
                onClick={closeLightbox}
              >
                <FaTimes size={32} />
              </button>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-300 transition-colors z-50 bg-black/50 rounded-full p-3"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox("prev");
                }}
              >
                <FaChevronLeft size={24} />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-300 transition-colors z-50 bg-black/50 rounded-full p-3"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox("next");
                }}
              >
                <FaChevronRight size={24} />
              </button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="max-w-5xl max-h-[90vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.caption}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <div className="text-center mt-4 bg-black/50 rounded-lg p-4">
                  <p className="text-white text-lg font-outfit">{lightboxImage.caption}</p>
                  <p className="text-gray-400 text-sm mt-2">
                    {lightboxIndex + 1} / {currentCategoryImages.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
