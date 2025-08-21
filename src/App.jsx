import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen site-bg transition-colors duration-200">
      <Hero />
      <Projects limit={2} showMoreButton />
    </div>
  );
}

export default App;
