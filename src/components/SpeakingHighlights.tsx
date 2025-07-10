import Slider from "react-slick";
import { SpeakingCard } from "./SpeakingCard";

const speakingEvents = [
{
    title: "The ICE Connect 2025: Lagos State University",
    description:
      "On July 2nd, 2025, Ebosetale was a featured speaker at The ICE Connect 2025, a dynamic student-focused networking experience hosted at Lagos State University (LASU). ICE Connect brought together forward-thinking students, innovators, and young creatives under one roof to connect, share ideas, and build meaningful collaborations.",
    // coverImage: "/assets/IMG-20250706-WA0017.jpg",
    coverVideo: "https://res.cloudinary.com/dydwcaxmx/video/upload/v1752093786/VID-20250706-WA0035_xjobbn.mp4",
    images: [
      "/assets/IMG-20250706-WA0017.jpg",
      "/assets/IMG-20250706-WA0019.jpg",
      "/assets/IMG-20250703-WA0011.jpg",
    ],
  },
{
    title: "Africa Women Conference, Zambia 2024",
    description:
      "In 2024, Miss Ebosetale proudly represented Nigeria on an international stage as a distinguished speaker at the Africa Women’s Conference (AWC) held in Lusaka, Zambia. <b></b>Themed around empowerment, innovation, and inclusive leadership, the AWC brought together women changemakers, leaders, and advocates from across the continent and diaspora to shape the future of African communities through dialogue and actionable strategies.",
    coverVideo: "https://res.cloudinary.com/dydwcaxmx/video/upload/v1752093628/VID-20250706-WA0032_ftnclr.mp4", // optional
    // coverImage: "/assets/Screenshot_20250525-213124.jpg",
    images: [
      "/assets/IMG-20250709-WA0006.jpg", "/assets/Screenshot_20250525-213124.jpg",
      "/assets/IMG-20250709-WA0008.jpg",
      "/assets/IMG-20250709-WA0009.jpg",
    ],
  },
{
    title: "Africa Trade Consortium’s Tea Break Edition 2025",
    description:
      "Speaking at the event held at the Grand Pela Hotel in Abuja, Okhueleigbe commended the government’s efforts to support businesses through tax exemptions, Pioneer Status Incentives, Export Processing Grants, and other tax reliefs. She noted that these incentives will not only strengthen businesses but also create jobs, reduce poverty, and improve the standard of living.",
    coverVideo: "https://res.cloudinary.com/dydwcaxmx/video/upload/v1752134438/AQNqEq2M18UjrLa5qO8twKHBjkBJnG4kfxustw1pSYJ40J2xzCGawMjOfM2Zq0SaKvhU1G1oQnlEBwoebFYCdeBV_gKadFqg_jukvgs.mp4", // optional
    // coverImage: "/assets/Screenshot_20250525-213124.jpg",
    images: [
      "/assets/Screenshot_20250525-213124.jpg", // "/assets/Screenshot_20250525-213124.jpg",
      "/assets/IMG-20250709-WA0006.jpg",
      "/assets/IMG-20250709-WA0009.jpg",
    ],
  },
];

const eventSliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: true,
  swipe: true,
};

export const SpeakingEvents = () => (
  <section className="bg-[#0e0e10] text-white py-18 px-6 md:px-20">
    <h2 className="text-4xl md:text-5xl font-playfair text-yellow-300 mb-16 text-center">
      Featured Speaking Engagements
    </h2>

    <Slider {...eventSliderSettings}>
      {speakingEvents.map((event, index) => (
        <SpeakingCard key={index} event={event} />
      ))}
    </Slider>
  </section>
);