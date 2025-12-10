import React from "react";
import { SkillList } from "../../services/data/skills.ts";
import { tagColors } from "../../styles/theme/index.ts";
// import GoodreadsBookshelf from "react-goodreads-shelf";

const About: React.FC = () => {
  function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.3);
  }
  const colors = shuffleArray(Object.values(tagColors));

  return (
    <section aria-label='About me' id='about'>
      <div
        className='thisIsMe one'
      >
        <h1>Hello world!</h1>
        <p>I'm Tonje. I love music, movies, reading books, nature,</p>
        <ul>
          <li>🎓 I have a professional degree in UX-design</li>
          <li>
            🎓 I have a higher professional degree in front-end development
          </li>
          <li>🌍 I'm from the west coast, but currently live near Oslo</li>
        </ul>
      </div>
      <div
        className='thisIsMe two'
      >
        <h2>Skills</h2>
        {SkillList.map((skills, index) => (
          <div key={index}>
            <ul className='tag container'>
              {SkillList[0].skill.map((item, index) => (
                <li
                  key={index}
                  className='tags skills'
                  style={{
                    backgroundColor: colors[index % colors.length],
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className='thisIsMe three'
      ></div>
    </section>
  );
};

export default About;
