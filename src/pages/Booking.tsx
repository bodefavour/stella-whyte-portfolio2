// src/pages/Booking.tsx
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Booking = () => {
  return (
    <section className="bg-[#0e0e10] text-white min-h-screen py-20 px-6 md:px-20">
      <Helmet>
        <title>Book Ebosetale to Speak</title>
        <meta
          name="description"
          content="Invite Miss Ebosetale Okhueleigbe to speak at your next event—bookings available for conferences, summits, and impactful gatherings."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-playfair text-yellow-300 mb-6">
          Book Ebosetale to Speak
        </h1>
        <p className="text-lg text-gray-300 mb-10 font-outfit">
          Hosting a conference, panel, or community event? Use the calendar
          below to request a speaking engagement. Each request is manually reviewed before confirmation.
        </p>

        {/* Calendly Embed */}
        <div className="w-full h-[720px] max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://calendly.com/YOUR-CALENDLY-USERNAME/speaking-engagement"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book Ebosetale"
            allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Backup CTA */}
        <p className="text-gray-400 mt-6 font-outfit">
          Can’t access the calendar? Reach out via{" "}
          <a
            href="mailto:ladysmartie@gmail.com"
            className="text-yellow-300 underline hover:text-yellow-400"
          >
            email
          </a>{" "}
          instead.
        </p>
      </motion.div>
    </section>
  );
};

export default Booking;