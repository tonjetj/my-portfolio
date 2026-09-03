import { createGlobalStyle } from "styled-components";
import { fonts } from "./typography/index.ts";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Domine:wght@400..700&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Funnel+Sans:ital,wght@0,300..800;1,300..800&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@300..700&family=Funnel+Display:wght@300..800&?family=Playfair+Display:ital,wght@0,400..900;1,400..900&?family=Gilda+Display&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Castoro:ital@0;1&family=Libre+Baskerville:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

html {
  scroll-behavior: smooth;
  ::selection { background: #f6f8b6; }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    background-color: #f3e8da; 
    color: #21392d;
    cursor: crosshair; 
}

h1 {
    ${fonts.typography.h1};
}

  h2 {
    ${fonts.typography.h2}
    font-family: montserrat, sans-serif;
    font-weight: 400;
    font-size: 5rem; 
  };

  h3 {
    ${fonts.typography.h3}
  };

  a, .tags {
    font-family: ${fonts.fontFamily.copy};
  };

  p, li, a, .showBtn {
    ${fonts.typography.p};
  }

  .stortNavn {
    font-size: 14.2rem; 
    font-weight: 300; 
    font-family: "Libre Baskerville", serif;
    font-style: italic;
  }

  #hero p {
  font-size: 50px;
  font-weight: 200;
  }


  a {
    text-decoration: none;
    color: #21392d;
  }

  .tags {
    font-size: 18px; 
  }

  /* Layout */

  

  header, main, footer {
    display: grid; 
    grid-template-columns: repeat(16, 1fr);
  }

  main {
    gap: 4rem 0; 
  }

  #hero { 
    width: 100%; 
    height: 35vh;
    display: grid; 
    padding-top: 6.5rem;
    align-items: center;
    grid-column: 2/16;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 2fr 300px;
    gap: 2rem;
}

.stortNavn {
  grid-column: 1/10; 
  grid-row: 1/2; 
}

  .om-meg-seksjon {
    display: grid; 
    grid-column: 2/16;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto;
    padding: 6.5rem 0;
    gap: 2.5rem;
    > h2 {
      grid-column: 1/3;
      grid-row: 1/2;
    }
  }

  .om-meg-one {
    grid-column: 1/2;
    grid-row: 2/3; 
    display: flex; 
    gap: 1.5rem; 
    flex-direction: column;
  }

  .om-meg-two {
    grid-column: 2/3;
    grid-row: 2/3; 
  }

  .profilbilde {
    width: 120px; 
    height: 180px; 
    border-radius: 20px; 
    object-fit: cover;
    image-position: center;
  }

  #work {
    display: flex; 
    flex-direction: column;
    grid-column: 1/17;
    width: 100%; 
    height: 100%; 
    padding: 7rem 0 2rem; 
    gap: 1rem; 
    margin: auto 0rem; 
  }

  .workList {
    display: flex; 
    flex-direction: column; 
    width: 100%; 
  }

  .work-tittel {
    padding: 0 1.5rem; 
  }

  .workItem {
    border-top: 1px solid #21392d; 
    width: 100%; 
    padding: 1.2rem 1.5rem; 
    display: grid; 
    grid-template-columns: 2fr 4fr 3fr auto;
    align-items: center;
    &:hover {
      cursor: pointer; 
      background-color: #f6f8b6; 
      padding: 1.2rem 1.8rem;
      transition: 0.2s ease-in-out;
    }
  }

  .showBtn {
    margin: 1rem auto; 
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1.5px solid #21392d;
    color: #21392d;
    &: hover {
      cursor: pointer;
    }
}
 
  #contact {
    border-radius: 30px; 
    grid-column: 3/15;
    padding: 3rem; 
    gap: 2rem; 
    display: flex; 
    justify-content: center; 
    height: 100%; 
    margin: 2rem auto 2rem;  
    flex-flow: column; 
  }

  .contact {
    display: flex; 
    flex-direction: row; 
    gap: 1.5rem;
  }

  .choice {
    flex: 1; 
    width: 100%;  
    display: flex; 
    justify-content: flex-end; 
    align-items: center; 
    background-color: #83d196;
    padding: 20px; 
    border-radius: 20px; 
    color: #21392d;
    &:hover {
      transform: scale(1.025);
      background-color: #21392d; 
      color: #cfffcdff; 
    }
  }

  ul {
  list-style: none; 
  }

  .footer-container {
    padding: 0.4rem 1.2rem;
    > .footer-content {
        border-radius: 0.3rem;
        padding: 0.4rem 1.2rem;
        border: 1px solid #21392d;
    }
    > p {
      font-size: 1.2rem; 
      text-align: center;
    }
  }

  /* Header */

  header {
  padding: 1.5rem 0; 
  position: sticky; 
  top: 0; 
  z-index: 999; 
  }

  // /* Nav */

  nav, .footer-container {
  display: flex;
  justify-content: space-between;
  grid-column: 2/16; 
  height: 100%; 
  }

  nav ul {
    display: flex; 
    gap: 10px; 
  }

  nav ul li {
    align: center; 
  }

  nav ul li a, .logo {
    border-radius: 0.3rem;
    padding: 0.4rem 1.2rem;
    color: #21392d;
    background-color: #f3e8da;
    border: 1px solid #21392d;
    &:hover {
      cursor: pointer; 
      color: #ccffd9; 
      background-color: #21392d; 
    }
  }

  .logo {
    color: #21392d;
    background-color: #f3e8da;
    border: 1px solid #21392d;
  }

  /* Tags */

  .tag.container {
    display: flex; 
    flex-wrap: wrap; 
    gap: 15px; 
  }

  .tag.container.work {
  gap: 10px; 
  }

  .tags {
    color: #21392d;
    border-radius: 30px; 
    border: 1px solid #21392d;
    padding: 0.25rem 1rem; 
    text-align: center; 
    font-size: 16px; 
  }

  .tags.work {
    }

/* Buttons */

.link.container {
    display: flex; 
    gap: 20px; 
}


/* NETTBRETT */
@media (max-width: 1150px){
  .stortNavn {
    font-size: 100px; 
  }

  section {
    grid-column: 3/15; 
  }

  #hero {
    height: 30vh; 
  }
}

/* MOBIL */
@media (max-width: 768px){
  section {
    grid-column: 3/15; 
  }
}

`;
