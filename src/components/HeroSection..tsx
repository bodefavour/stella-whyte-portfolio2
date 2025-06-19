import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ColorThief from "colorthief";

const images = [
    {
        src: "/assets/stella1.jpg",
        titles: ["Model", "Philanthropist", "Golf Champion", "Media Personality"],
    },
    {
        src: "/assets/stella2.jpg",
        titles: ["Founder", "Beauty Queen", "Influencer", "Public Speaker"],
    },
    {
        src: "/assets/stella3.jpg",
        titles: ["TV Host", "Entrepreneur", "Humanitarian", "Advocate"]
    }
];

export const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [bgColor, setBgColor] = useState("#0e0e10");
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
            setTitleIndex(0);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = images[currentIndex].src;
        img.onload = () => {
            try {
                const colorThief = new ColorThief();
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                canvas.width = img.width;
                canvas.height = img.height;
                ctx?.drawImage(img, 0, 0, img.width, img.height);
                const rgb = ctx?.getImageData(0, 0, 1, 1).data;
                if (rgb) {
                    const [r, g, b] = Array.from(rgb);
                    setBgColor(`rgb(${r}, ${g}, ${b})`);
                }
            } catch (error) {
                console.warn("ColorThief error:", error);
                setBgColor("#0e0e10");
            }
        };
    }, [currentIndex]);

    useEffect(() => {
        const titleInterval = setInterval(() => {
            setTitleIndex((prev) =>
                (prev + 1) % images[currentIndex].titles.length
            );
        }, 2500);
        return () => clearInterval(titleInterval);
    }, [currentIndex]);

    return (
        <section
            className="w-full h-screen flex flex-col md:flex-row transition-colors duration-1000"
            style={{ backgroundColor: bgColor }}
        >
            {/* Left - Image */}
            <div className="w-full md:w-3/5 h-1/2 md:h-full relative">
                <img
                    src={images[currentIndex].src}
                    alt="Stella Whyte"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Right - Text */}
            <div className="w-full md:w-2/5 flex flex-col justify-center items-start text-left p-6 md:p-12">
                <motion.h1
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-serif font-bold text-yellow-400 mb-4"
                >
                    Mrs. Okhueileigbe Ebosetale
                </motion.h1>

                <motion.p
                    key={titleIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg md:text-2xl font-medium text-white"
                >
                    {images[currentIndex].titles[titleIndex]}
                </motion.p>
            </div>
        </section>
    );
};