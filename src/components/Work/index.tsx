import React from "react";
import { WorkList } from "../../services/data/work.ts";
import { HiArrowRight } from "react-icons/hi2";

const Work: React.FC = () => {
  return (
    <section aria-labelledby='my-selected-work' id='work' className='container'>
      <div className='sectionHeader'>
        <h2 id='my-selected-work' className='work-tittel fadeIn'>
          Prosjekter
        </h2>
      </div>

      <article className='selectedWork'>
        <ul className='workList'>
          {WorkList.map((work, index) => (
            <li key={work.id} className='workItem'>
              <div>
                <h3>{work.title}</h3>
              </div>
              <div>
                <p>{work.shortDescription.no}</p>
              </div>
              <div className='tag container work'>
                {work.technologies.map((tech, index) => (
                  <span key={index} className='tags work'>
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <HiArrowRight size={48} />
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Work;
