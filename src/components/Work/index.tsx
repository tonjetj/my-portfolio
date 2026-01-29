import React from "react";
import { WorkList } from "../../services/data/work.ts";
import { HiArrowRight } from "react-icons/hi2";
import Contact from "../Contact/index.tsx";

const Work: React.FC = () => {
  return (
    <section aria-labelledby='my-selected-work' id='work' className='container'>
      <div className='sectionHeader'>
        <h1 id='my-selected-work'>Work</h1>
      </div>

      <div className='selectedWork'>
        {WorkList.slice()
          .reverse()
          .map((work) => (
            <article
              key={work.id}
              aria-labelledby={`work-number-${work.id}`}
              className='workCards child'
              aria-label={work.title}
            >
              <img src={work.img} alt={work.altText} />
              <div className='workContent'>
                {" "}
                <h2 id={`work-number-${work.id}`} className='workTitle'>
                  {work.title}
                </h2>
                {/* <p>{work.description}</p> */}
                <button className='readMore'>
                  Go to project <HiArrowRight />
                </button>
              </div>
            </article>
          ))}
          
      </div>
    </section>
  );
};

export default Work;
