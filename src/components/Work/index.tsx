import React from "react";
import { motion } from "framer-motion";
import { WorkList } from "../../services/data/work.ts";
import { HiArrowRight } from "react-icons/hi2";

const Work: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section aria-labelledby='my-selected-work' id='work' className='container'>
      <h1 id='my-selected-work'>Work</h1>

      <div className='selectedWork'>
        {WorkList.slice()
          .reverse()
          .map((work) => (
            <motion.article
              key={work.id}
              aria-labelledby={`work-number-${work.id}`}
              className='workCards child'
              variants={variants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              aria-label={work.title}
            >
              <img src={work.img} alt={work.altText} />

              <h2 id={`work-number-${work.id}`}>{work.title}</h2>
              {/* <p>{work.description}</p> */}
              <button className='readMore'>Go to project <HiArrowRight /></button>
            </motion.article>
          ))}
      </div>
    </section>
  );
};

export default Work;
