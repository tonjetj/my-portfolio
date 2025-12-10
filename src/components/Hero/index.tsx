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
              brackets={["bottom"]}
              show={true}
              color='#1700ef'
              padding={10}
              strokeWidth={3}
              animationDuration={700}
              animationDelay={500}
              order={1}
            >
              User friendly
            </RoughNotation>{" "}
            development and{" "}
            <RoughNotation
              type='underline'
              brackets={["bottom"]}
              show={true}
              color='#1700ef'
              padding={10}
              strokeWidth={3}
              animationDuration={800}
              animationDelay={400}
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
