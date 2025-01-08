import React from "react";
import { WorkList } from "../../services/data/work.ts";
import { BsArrowUpRight } from "react-icons/bs";

const Work: React.FC = () => {
  return (
    <section aria-label='My work' id='work'>
      {WorkList.slice()
        .reverse()
        .map((work) => (
          <article key={work.id} aria-labelledby={`work-number-${work.id}`}>
            <div className='copy'>
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
                    Live demo <BsArrowUpRight />
                  </a>
                )}
                {work.githubUrl && (
                  <a
                    href={work.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn link'
                  >
                    Github <BsArrowUpRight />
                  </a>
                )}
                {work.figmaUrlDesktop && (
                  <a
                    href={work.figmaUrlDesktop}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn link'
                  >
                    Prototype desktop <BsArrowUpRight />
                  </a>
                )}
                {work.figmaUrlMobile && (
                  <a
                    href={work.figmaUrlMobile}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn link'
                  >
                    Prototype mobile <BsArrowUpRight />
                  </a>
                )}
              </div>
            </div>

            <div className='workImg container'>
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <img src={work.img} alt={work.altText} />
            </div>
          </article>
        ))}
    </section>
  );
};

export default Work;
