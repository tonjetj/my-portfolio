import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const Contact: React.FC = () => {
  

  return (
    <section aria-label='Contact me' id='contact'>
      <h1>Get in touch!</h1>
      <div className='contact'>
        <a
          className='choice'
          href='mailto:tontotjen@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Email
          <HiArrowUpRight />
        </a>
        <a
          className='choice'
          href='https://www.linkedin.com/in/tonjetotlandjenssen/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
          <HiArrowUpRight />
        </a>
        <a
          className='choice'
          href='https://github.com/tonjetj'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
          <HiArrowUpRight />
        </a>
      </div>
    </section>
  );
};

export default Contact;
