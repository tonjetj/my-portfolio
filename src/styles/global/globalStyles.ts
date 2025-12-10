import { createGlobalStyle } from "styled-components";
import { fonts } from "./typography/index.ts";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Domine:wght@400..700&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Funnel+Sans:ital,wght@0,300..800;1,300..800&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@300..700&family=Funnel+Display:wght@300..800&display=swap');

html {
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  cursor: crosshair;
}

  body {
    background-color: #fffbf3ff; 
    color: #05011dff;
  }

  h1 {
    ${fonts.typography.h1};
  }

  h2 {
    ${fonts.typography.h2}
  };

  h3 {
    ${fonts.typography.h3}
  };

  a, .tags {
    font-family: ${fonts.fontFamily.copy};
  };

  p, li, a {
    ${fonts.typography.p};
  }

  .stortNavn {
    font-size: 250px; 
    font-weight: 300; 
  }

  #hero p {
  font-size: 50px;
  font-weight: 200; 
  }


  a {
    text-decoration: none;
  }

  .tags {
    font-size: 18px; 
  }

  /* Layout */

  main {
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: repeat(16, 1fr);
    // background-color: #fdd1d1ff; 
  }

  section {
    grid-column: 3/15;
    height: 100vh; 
  }

  #hero { 
    height: 80vh; 
    width: 100%; 
    display: flex; 
    margin: 0 auto;
    grid-column: 2/18;
  }

  .copyBox {
    display: flex; 
    flex-direction: column; 
    gap: 2rem; 
    align-items: center; 
    justify-content: center; 
    padding-top: 6rem; 
  }

  #about {
    padding: 4rem 0; 
    flex-flow: row wrap; 
    grid-column: 2/16;
    height: 50vh; 
    gap: 30px; 
    display: grid; 
    grid-template: 1fr auto 1fr / repeat(16, 1fr);
  }


  .thisIsMe {
    color: #0d3d16ff; 
    padding: 3rem; 
    border-radius: 30px; 
  }

  .thisIsMe.one{
    grid-column: 1/10;
    background-color: #cfffcdff;
  }

  .thisIsMe.two{
    grid-column: 10/17;
    margin: 0 auto; 
  }

  .thisIsMe.three {
    grid-column: 1/17;
    background-color: #cfffcdff;
  }


  #work {
    // background-color: green; 
    display: flex; 
    flex-direction: column;
    grid-column: 2/16;
    width: 100%; 
    height: 100%;
    margin: 4rem auto; 
    padding: 2rem 0rem; 
  }

  .selectedWork {
    width: 100%; 
    display: flex; 
    flex-flow: row wrap; 
    justify-content: space-between; 
    gap: 5rem 0rem;
  }

  .workCards {
    width: 48%;  
  }

  .workCards img {
    filter: saturate(110%);
    width: 100%; 
    height: 600px; 
    background-repeat: no-repeat; 
    border-radius: 20px; 
    border: 4px solid #000; 
    // cursor: pointer; 
  }

  button {
    // cursor: pointer; 
  }

  .readMore {
    padding: 0.5rem 1rem; 
    border-radius: 50px; 
    color: #fff;
    border: 2px solid #000;
    background-color: #000;  
  }

  #contact {
    background-color: #fae2ffff; 
    flex-flow: row wrap; 
    border-radius: 30px; 
    padding: 4rem; 
    grid-column: 2/16;
    height: 50vh; 
    margin: 0 auto 2rem; 
  }

  ul {
  list-style: none; 
  }


  /* Header */

  header {
    display: flex; 
    justify-content: space-between; 
    padding: 20px 50px; 
    width: 100%; 
    position: fixed; 
    top: 0; 
    z-index: 999; 
  }

  // /* Nav */

  nav {
  }

  nav ul {
    display: flex; 
    gap: 10px; 
  }

  nav ul li {
    height: 100%;  
  }

  /* Tags */

  .tag.container {
    display: flex; 
    flex-wrap: wrap; 
    gap: 15px; 
  }

  .tags {
    color: rgb(53, 5, 5);
    background-color: rgba(53, 5, 5, 0.12); 
    border-radius: 20px; 
    padding: 5px 20px; 
    text-align: center; 

      &:hover {
        transform: scale(1.08);
        transition: 0.1s ease-out; 
        cursor: default; 
      }

  }

/* CURSOR */

// .cursor {
//   position: fixed;
//   left: 0;
//   top: 0;
//   mix-blend-mode: difference;
  // width: 24px;
  // height: 24px;
  // border-radius: 50%;
  // background-color: #1e00ce;
//   transition: width 0.1s ease, height 0.1s ease;
// }

// .cursor.big {
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   mix-blend-mode: difference;
// }

/* Buttons */

.link.container {
    display: flex; 
    gap: 20px; 
}

.btn.link {
    color: rgb(53, 5, 5); 
    background-color: white;
    text-decoration: none; 
    text-align: center; 
    padding: 15px 20px; 
    border: 2px solid; 
    border-radius: 40px; 

    :nth-child(1){
    transform: scale(1.15);
    }

    &:hover {
      background-color:rgb(255, 248, 188); 
      border: 2px solid rgb(53, 5, 5); 
      transform: scale(1.05); 
      transition: ease-in-out 0.15s; 
    }

    &:active {
      background-color:rgb(172, 240, 170); 
      transition: 0.1s; 
    }
}

/* NETTBRETT */
@media (max-width: 1150px){
  section {
    grid-column: 2/16; 
  }
}

/* MOBIL */
@media (max-width: 768px){
  section {
    grid-column: 2/16; 
  }
}

`;
