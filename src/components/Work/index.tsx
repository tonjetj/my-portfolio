import React from "react";
import { WorkList } from "../../services/data/work.ts";

const Work: React.FC = () => {
  return (
    <section aria-label='My work'>
      {WorkList.slice()
        .reverse()
        .map((work) => (
          <article key={work.id} aria-labelledby={`work-number-${work.id}`}>
            <div>
              <div>
                <h1 id={`work-number-${work.id}`}>{work.title}</h1>
                <p>{work.description}</p>
              </div>

              <div>
                <ul
                  className='tag container'
                  aria-label={`Tags showing technologies, frameworks and languages used in ${work.title}`}
                >
                  {work.languages.map((language, index) => (
                    <li key={index} className='tags' aria-label='Language'>
                      {language}
                    </li>
                  ))}
                  {work.frameworks.map((framework, index) => (
                    <li key={index} className='tags' aria-label='Framework'>
                      {framework}
                    </li>
                  ))}
                  {work.technologies.map((tech, index) => (
                    <li key={index} className='tags' aria-label='Technology'>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className='link container'
                aria-label={`Hyperlinks for ${work.title}`}
              >
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
            </div>

            <div>
              <img src={work.img} alt={work.title} />
            </div>
          </article>
        ))}
    </section>
  );
};

export default Work;
