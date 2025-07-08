// src/components/SpeakingEventsCarousel.tsx

import React, { useState } from "react"; 
import Slider from "react-slick"; 
import Lightbox from "react-image-lightbox"; 
import "react-image-lightbox/style.css"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Sample placeholder events with photo arrays 
const events = [ 
{ 
title: "UN Women Leadership Forum", 
images: [ 
"/events/un/1.jpg", 
"/events/un/2.jpg", 
"/events/un/3.jpg", 
"/events/un/4.jpg", 
"/events/un/5.jpg", 
], 
}, 
{ 
title: "Africa Youth Dialogue Summit", 
images: [ 
"/events/ayd/1.jpg", 
"/events/ayd/2.jpg", 
"/events/ayd/3.jpg", 
"/events/ayd/4.jpg", 
"/events/ayd/5.jpg", 
], 
}, 
];

export const SpeakingEventsCarousel = () => { 
const [lightboxIndex, setLightboxIndex] = useState(0); 
const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

const settings = { 
dots: true, 
infinite: true, 
speed: 800, 
slidesToShow: 1, 
slidesToScroll: 1, 
autoplay: true, 
autoplaySpeed: 6000, 
arrows: false, 
};

return ( 
<section className="bg-black py-20 px-6 md:px-20 text-white"> 
<h2 className="text-4xl font-playfair text-yellow-300 text-center mb-16"> 
Speaking Engagements 
</h2>

<Slider {...settings}>
    {events.map((event, eventIdx) => (
      <div key={eventIdx} className="flex flex-col items-center">
        <h3 className="text-2xl mb-6 font-semibold">{event.title}</h3>
        <div className="relative flex justify-center space-x-[-3rem] md:space-x-[-5rem] overflow-x-visible">
          {event.images.map((img, imgIdx) => (
            <img
              key={imgIdx}
              src={img}
              alt={`event-${eventIdx}-img-${imgIdx}`}
              onClick={() => {
                setSelectedEvent(eventIdx);
                setLightboxIndex(imgIdx);
              }}
              className="cursor-pointer w-40 md:w-52 h-60 object-cover rounded-xl border-2 border-yellow-300 shadow-xl transform hover:scale-105 transition duration-300"
              style={{ zIndex: imgIdx, transform: `rotate(${(imgIdx - 2) * 6}deg)` }}
            />
          ))}
        </div>
      </div>
    ))}
  </Slider>

  {selectedEvent !== null && (
    <Lightbox
      mainSrc={events[selectedEvent].images[lightboxIndex]}
      nextSrc={events[selectedEvent].images[(lightboxIndex + 1) % events[selectedEvent].images.length]}
      prevSrc={events[selectedEvent].images[(lightboxIndex + events[selectedEvent].images.length - 1) % events[selectedEvent].images.length]}
      onCloseRequest={() => setSelectedEvent(null)}
      onMovePrevRequest={() =>
        setLightboxIndex(
          (lightboxIndex + events[selectedEvent].images.length - 1) % events[selectedEvent].images.length
        )
      }
      onMoveNextRequest={() =>
        setLightboxIndex((lightboxIndex + 1) % events[selectedEvent].images.length)
      }
    />
  )}
</section>

); 
};

