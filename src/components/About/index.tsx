import React from "react";
import { SkillList } from "../../services/data/skills.ts";

const About: React.FC = () => {
  return (
    <section aria-label='About me' id='about'>
      <h1>Let me introduce myself</h1>
      <p>
        I'm Tonje - a 90s kid with a love for good movies, music, books, and
        travel. I tend to dream big, and I think a lot of my creative process
        stems from that. I love puzzling with ideas and figuring out how to make
        things work the best way possible. My main goal is to create inclusive
        and neat solutions for the web.
      </p>
      <ul>
        <li>I have a professional degree in UX-design</li>
        <li>I have a higher professional degree in front-end development</li>
        <li>I'm from the west coast, but currently live near Oslo</li>
      </ul>
      <h2>Skills</h2>
      {SkillList.map((skills, index) => (
        <div key={index}>
          <h3>Languages</h3>
          <ul className='tag container'>
            {skills.languages.map((lang, index) => (
              <li key={`lang-${index}`} className='tags skills'>
                {lang}
              </li>
            ))}
          </ul>

          <h3>Frameworks</h3>
          <ul className='tag container'>
            {skills.frameworks.map((fw, index) => (
              <li key={`fw-${index}`} className='tags skills'>
                {fw}
              </li>
            ))}
          </ul>

          <h3>Technologies</h3>
          <ul className='tag container'>
            {skills.technologies.map((tech, index) => (
              <li key={`tech-${index}`} className='tags skills'>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default About;
