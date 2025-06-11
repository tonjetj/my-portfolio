import { createGlobalStyle } from "styled-components";
import { fonts } from "./typography/index.ts";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wdth,wght@50..200,200..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Space+Grotesk:wght@300..700&display=swap');
html {
  scroll-behavior: smooth;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  h1, h2, h3 {
  font-family: ${fonts.fontFamily.headline};
  }

  h1 {
  ${fonts.typography.h1};
  }

  h2 {
  ${fonts.typography.h2}
  };

  p, a, li {
  font-family: ${fonts.fontFamily.copy};
  };

  /* Layout */

  main {
    margin: 56px auto 0; 
    display: flex; 
    flex-flow: column nowrap; 
    gap: 100px; 
  }

  article {
    display: flex; 
    flex-flow: row nowrap;
    height: 100vh; 
    justify-content: space-between; 
    align-items: stretch; 
    border-bottom: 1px solid black;  
  }

  .work.container {
    width: 50%;
    display: flex; 
    align-items: center; 

  }

  .copy.container, .workImg.container {
    height: 100%; 
  }

  .copy {
    height: 80%; 
    width: 100%; 
    margin: 0 auto; 
    display: flex; 
    flex-flow: column nowrap; 
    padding: 50px 100px; 
    justify-content: center; 
    gap: 50px; 
  }

  .copy h1 {
    margin-bottom: 50px; 
  }
 
  .workImg.container {
    display: flex; 
    justify-content: center; 
    width: 50%; 
    margin: 0; 
    padding: 0; 
  }

  .workImg img {
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
  }

  ul {
  list-style: none; 
  }


  /* Header */

  header {
    background-color: pink; 
    display: flex; 
    justify-content: space-between; 
    padding: 20px 50px; 
    width: 100%; 
    position: fixed; 
    top: 0; 
  }

  // /* Nav */

  nav {
  }

  nav ul {
    display: flex; 
    gap: 10px; 
    // background-color: green; 
  }

  nav ul li {
    height: 100%; 
  }

  /* Tags */

  .tag.container {
    display: flex; 
    flex-wrap: wrap; 
    width: 400px; 
    gap: 10px; 
  }

  .tag.container li:nth-child(1) {
    background-color:rgb(247, 163, 135);
    color: #000; 
  }

  .tag.container li:nth-child(2) {
    background-color: #aee6ed;
    color: #000; 
  }

  .tag.container li:nth-child(3) {
    background-color: #dbbbff;
    color: #000;
  }

  .tag.container li:nth-child(4) {
    background-color: #f2bb05;
    color: #000;
  }

  .tag.container li:nth-child(5) {
    background-color: #83d196;
    color: #000;
  }

  .tag.container li:nth-child(6) {
    background-color: #ffb1ce;
    color: #000;
  }

  .tag.container li:nth-child(7) {
    background-color:rgb(182, 177, 255);
    color: #000;
  }


  .tags {
    border-radius: 15px; 
    padding: 5px 20px; 
    width: auto; 
    text-align: center; 
    font-size: 15px; 
  }

  .tags.skills {
    border: 1px solid black; 
  }


/* Buttons */

.link.container {
    display: flex; 
    gap: 10px; 
}

.btn.link {
    background-color: white;
    color: #1d005b; 
    text-decoration: none; 
    text-align: center; 
    padding: 15px 20px; 
    border: 1px solid; 

    &:hover {
      color: #f8fcec;
      background-color: #1d005b; 

      :nth-child(1){
        transform: scale(1.14);
        transition: ease 0.2s; 
      }
    }
}



`;
