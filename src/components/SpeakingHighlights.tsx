import Slider from "react-slick";
import { SpeakingCard } from "./SpeakingCard";
import { motion } from "framer-motion";

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
{
    title: "Africa's Women Achievers Award and Summit, South Africa 2025",
    description:
      "Saturday, August 30, 2025, in Johannesburg, South Africa, Miss Ebosetale was honored as a distinguished speaker at the Africa's Women Achievers Award and Summit. This prestigious event celebrates the accomplishments of African women who have made significant contributions to their communities and industries. The summit serves as a platform for inspiring dialogue, networking, and empowerment among women leaders from across the continent. 'The Africa we Want is one built by Us-brick by brick,woman by woman,nation by nation' she remarked during her keynote address, emphasizing the crucial role of women in shaping Africa's future.",
    coverVideo: "https://res.cloudinary.com/dydwcaxmx/video/upload/v1764173482/SaveClip.App_AQNSlZQYr93hAz9GCLmunvcAC9c6TSI1F2rqixFxn4_CIRtXRE6S2KEwjEv9saXyuWMGy-1hhzPhJodSaQ1iAO4U4j1MrF7X3wbgtzA_qlkauk.mp4", // optional
    // coverImage: "/assets/Screenshot_20250525-213124.jpg",
    images: [
      "/assets/SaveClip.App_541221136_17919336519152345_1035506579160725009_n.jpg", // "/assets/Screenshot_20250525-213124.jpg",
      "/assets/SaveClip.App_541371773_17919336528152345_4318465453906262881_n.jpg",
      "/assets/SaveClip.App_541298391_17919336507152345_5471861538772609906_n.jpg",
    ],
  },

  {
    title: "Top 50 Most Industrious Women in Africa Awards 2025",
    description:
      "The event, themed “The African Women in Leadership,” took place on Sunday, November 23, 2025, at the Lagos Oriental Hotel, Victoria Island, brought together outstanding women leaders, entrepreneurs, policymakers, and innovators from across the African continent. The Top 50 Most Industrious Women in Africa Awards 2025 celebrated women such as Miss Ebosetale who made significant contributions to Africa’s development through innovation, leadership, and social impact.",
    //coverVideo: "", // optional
    coverImage: "/assets/SaveClip.App_566800634_18430920349100657_3740313740577026709_n.jpg",
    images: [
      "", // "/assets/Screenshot_20250525-213124.jpg",
      "",
      "",
    ],
  },
];
 
const eventSliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: true,
  swipe: true,
  draggable: true,
  touchMove: true,
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
    
    <motion.div
      className="mt-20 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
    <div className="=mt-20 text-center">
      <h3 className="text-3xl md:text-4xl font-playfair text-yellow-300 mb-8">
        Invite Ebosetale to Speak at Your Event
        </h3>
      <p className="text-gray-300 font-outfit max-w-2xl mx-auto mb-8 text-lg">
        Whether it's a leadership summit, Conference or special event, invite Ebosetale to inspire your audience with powerful stories and actionable insights.
        </p>
        <a 
        href="/booking"
        className="inline-block bg-yellow-300 text-black font-semibold py-4 px-8 rounded-full hover:bg-yellow-400 transition duration-300">
          Book Her To Speak
          </a>
    </div>
    </motion.div>  
  </section>
);