// src/components/SpeakingHighlights.tsx 
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";

const speakingEvents = [ 
{ 
title: "UN Women Leadership Forum", 
date: "March 2023", 
image: "/images/speaking/un-women.jpg", 
}, 
{ 
title: "She Speaks Africa Summit", 
date: "Sept 2022", 
image: "/images/speaking/she-speaks.jpg", 
}, 
{ 
title: "Global Peace Women Panel", 
date: "Jan 2024", 
image: "/images/speaking/global-peace.jpg", 
}, 
];

export const SpeakingHighlights = () => { 
return ( 
<section className="bg-white py-20 px-6 md:px-20 text-gray-900"> 
<h2 className="text-4xl font-serif font-bold text-center text-yellow-500 mb-12"> 
Speaking Highlights </h2> 
<div className="grid gap-10 md:grid-cols-3"> 
{speakingEvents.map((event, i) => ( 
<motion.div 
key={i} 
initial={{ opacity: 0, y: 30 }} 
whileInView={{ opacity: 1, y: 0 }} 
transition={{ duration: 0.5, delay: i * 0.2 }} 
viewport={{ once: true }} 
className="rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-400/30 transition" 
> 
<img
src={event.image}
alt={event.title}
className="w-full h-56 object-cover"
/> 
<div className="p-5"> 
<h4 className="text-xl font-semibold mb-1">{event.title}</h4> 
<p className="text-sm text-gray-600">{event.date}</p> 
</div> 
</motion.div> 
))} 
</div>

<div className="mt-12 text-center">
    <Link
      to="/speaking-engagements"
      className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
    >
      View All Events
    </Link>
  </div>
</section>

); 
};

