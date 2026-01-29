import React, { useState } from "react";
import { WorkList } from "../../services/data/work.ts";
import { HiArrowRight } from "react-icons/hi2";

const Work: React.FC = () => {
  const [activeWork, setActiveWork] = useState<Work | null>(null);

  return (
    <section aria-labelledby='my-selected-work' id='work' className='container'>
      <div className='sectionHeader'>
        <h1 id='my-selected-work'>Work</h1>
      </div>

      <div className='selectedWork'>
        <article>
          <ul className='workList'>
            {WorkList.slice()
              .reverse()
              .map((work) => (
                <li
                  key={work.id}
                  className='workItem'
                  onMouseEnter={() => setActiveWork(work)}
                  onFocus={() => setActiveWork(work)}
                  onMouseLeave={() => setActiveWork(work)}
                >
                  <h2>
                    {work.id}. {work.title}
                  </h2>
                  {/* insert pills */}
                  <HiArrowRight size={48} />
                </li>
              ))}
          </ul>
        </article>

        <aside aria-live='polite' className='workPreview'>
          {activeWork ? (
            <img src={activeWork.img} alt={activeWork.altText} />
          ) : (
            <></>
          )}
        </aside>
      </div>
    </section>
  );
};

export default Work;
