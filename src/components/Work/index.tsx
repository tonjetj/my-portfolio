import React from "react";
import { WorkList } from "../../services/data/work.ts";

const Work: React.FC = () => {
  return (
    <div>
      <ul>
        {WorkList.map((work) => (
          <li key={work.id}>
            <h1>{work.title}</h1>
            <p>{work.description}</p>
            <div>
              <ul className='tag container'>
                {work.languages.map((language, index) => (
                  <li key={index} className='tags'>
                    {language}
                  </li>
                ))}
                {work.frameworks.map((framework, index) => (
                  <li key={index} className='tags'>
                    {framework}
                  </li>
                ))}
                {work.technologies.map((tech, index) => (
                  <li key={index} className='tags'>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className='link container'>
              {work.demoUrl && (
                <a
                  href={work.demoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn link'
                >
                  Live demo
                </a>
              )}
              {work.githubUrl && (
                <a
                  href={work.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn link'
                >
                  Github
                </a>
              )}
              {work.figmaUrlDesktop && (
                <a
                  href={work.figmaUrlDesktop}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn link'
                >
                  Prototype desktop
                </a>
              )}
              {work.figmaUrlMobile && (
                <a
                  href={work.figmaUrlMobile}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn link'
                >
                  Prototype mobile
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
