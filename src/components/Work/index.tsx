import React, { useState } from "react";
import { WorkList } from "../../services/data/work.ts";
import { HiArrowRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const Work: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedWorks = showAll
    ? WorkList.slice().reverse()
    : WorkList.slice().reverse().slice(0, 8);
  return (
    <section aria-labelledby='my-selected-work' id='work' className='container'>
      <div className='sectionHeader'>
        <h2 id='my-selected-work' className='work-tittel fadeIn'>
          Prosjekter
        </h2>
      </div>

      <article className='selectedWork'>
        <AnimatePresence mode='popLayout'>
          <ul className='workList'>
            {displayedWorks.map((work, index) => (
              <motion.li
                key={work.id}
                className='workItem'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1, delay: index * 0.05 }}
                layout
              >
                <div>
                  <h3>{work.title}</h3>
                </div>
                <div>
                  <p className='fadeIn'>{work.shortDescription.no}</p>
                </div>
                <div className="tag container work">
                  {work.technologies.map((tech, index) => (
                    <span key={index} className='tags work fadeIn'>
                      {tech}
                    </span>
                  ))}
                </div>
                <div>
                  <HiArrowRight size={48} />
                </div>
              </motion.li>
            ))}
          </ul>
        </AnimatePresence>
      </article>
    </section>
  );
};

export default Work;
