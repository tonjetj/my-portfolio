import React, { useEffect, useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id='hero'>
      <div className='copyBox'>
        <h1 className='stortNavn'>Tonje Jenssen</h1>

        <RoughNotationGroup show={mounted}>
          <p>
            <RoughNotation
              type='underline'
              show={true}
              color='#1800ef8c'
              padding={10}
              strokeWidth={4}
              animationDuration={700}
              animationDelay={200}
              order={1}
            >
              User friendly
            </RoughNotation>{" "}
            development and{" "}
            <RoughNotation
              type='underline'
              show={true}
              color='#1800ef8c'
              padding={10}
              strokeWidth={4}
              animationDuration={800}
              animationDelay={200}
              order={2}
            >
              design solutions
            </RoughNotation>{" "}
            for the web.
          </p>
        </RoughNotationGroup>
      </div>
    </section>
  );
};

export default Hero;
