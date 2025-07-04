import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

import Home from "./pages/Home";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Timeline from "./pages/Timeline";
import Spotlight from "./pages/Spotlight";
import Philanthropy from "./pages/Philanthropy";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Education from "./pages/Education";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Ebosetale Okhueleigbe - Official Portfolio</title>
          <meta
            name="description"
            content="The official portfolio for Ebosetale Okhueleigbe, an international model, philanthropist, entrepreneur, and media personality."
          />
          <link rel="canonical" href="https://www.ebosetaleokhueleigbe.com/" />
        </Helmet>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/philanthropy" element={<Philanthropy />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
