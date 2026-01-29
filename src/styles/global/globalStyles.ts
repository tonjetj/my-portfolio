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
    color: #05011dff;
  }

  .tags {
    font-size: 18px; 
  }

  /* Layout */

  main {
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
    padding-top: 4rem; 
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
    display: flex; 
    flex-direction: column;
    grid-column: 2/16;
    width: 100%; 
    gap: 2rem; 
    margin: 4rem auto 0rem; 
    container-type: inline-size; 
  }

  .selectedWork {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    align-items: stretch;
    gap: 2rem; 
    }

  .workList {
    display: flex; 
    flex-direction: column; 
    gap: 20px;  
    width: 100%; 
  }

  .workPreview {
  height: 800px; 
  border-radius: 30px; 
  // aspect-ratio: 1 / 1; 
  }

  .workPreview img {
  border-radius: 30px; 
  border: 4px solid #000; 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  display: block; 
  opacity: 0;
  transition: opacity 0.3s ease;
}

.workPreview img[src] {
transition: opacity 0.3s ease;
  opacity: 1;
}


  .workItem {
    border: 4px solid #000; 
    color: #000;
    padding: 0.8rem 1.5rem; 
    border-radius: 50px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    &:hover {
      background-color: #f2bb05; 
      border: 4px solid #f2bb05; 
      cursor: pointer; 
      transition: 0.2s ease-in-out; 
    }
  }

  .workTitle {
    font-size: 3rem; 
    line-height: 1.4; 
    margin-block-end: 0.15rem; 
  }

  @container (inline-size > 900px){
    .selectedWork {
      grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
    }
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
    border-radius: 30px; 
    grid-column: 2/16;
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
    color: #0d3d16ff;
    &:hover {
      transform: scale(1.025);
      background-color: #0d3d16ff; 
      color: #cfffcdff; 
    }
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
