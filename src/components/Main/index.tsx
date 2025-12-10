import React from "react";
import About from "../About/index.tsx";
import Work from "../Work/index.tsx";
import Hero from "../Hero/index.tsx";
import Contact from "../Contact/index.tsx";

const Main: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
  );
};

export default Main;
