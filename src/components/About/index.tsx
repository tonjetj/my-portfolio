import React from "react";
// import { SkillList } from "../../services/data/skills.ts";
// import meg_turbilde from "../../assets/images/meg_turbilde.jpg";
// import unnamed3 from "../../assets/images/unnamed3.png";

const About: React.FC = () => {
  return (
    <section aria-label='About me' id='about' className='om-meg-seksjon'>
      <h2>Om meg</h2>

      <section id='om-meg-one'>
        {/* <p>Tonje</p>
        <div>
          <p>Liker å gå i natur </p>
        </div>
        <p>
          
          Hei! Jeg heter Tonje. Jeg er en kreativ designer og utvikler med fokus
          på enkle løsninger som er brukervennlige på tvers av grensesnitt.
        </p>
        <p>
          Elsker å gå i norsk natur, se gode (og dårlige) filmer, dra på
          roadtrips, lese en god bok, høre konstant på musikk, strikke noe litt halvbra til nevøen min eller.
        </p> */}
      </section>

      {/* <section className='om-meg-two'>
        {SkillList.map((skills, index) => (
          <div key={index}>
            <ul className='tag container'>
              {SkillList[0].skill.map((item, index) => (
                <li key={index} className='tags skills'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section> */}
    </section>
  );
};

export default About;
