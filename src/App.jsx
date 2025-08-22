import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="min-h-screen site-bg transition-colors duration-200">
      <Hero />
      <Projects limit={4} showMoreButton />
      <AboutMe />
      <ContactMe />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
