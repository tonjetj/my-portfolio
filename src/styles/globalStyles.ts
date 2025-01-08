import { createGlobalStyle } from "styled-components";
import { fonts } from "./typography/index.ts";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wdth,wght@50..200,200..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
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
  font-size: 45px; 
  }

  p, a, li {
  font-family: ${fonts.fontFamily.copy};
  }

  /* Layout */

  article {
    display: grid; 
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 1fr); 
    height: 100vh; 
    background-color: lightblue; 
    border-bottom: 1px solid black;  
  }

  .copy, .workImg.container {
    grid-row: 2/4; 
  }

  .copy {
    grid-column: 2/5;
    margin: 0 auto; 
    display: flex; 
    width: 100%; 
    flex-direction: column; 
    justify-content: space-between;
    gap: 50px; 
  }

  .copy h1 {
    margin-bottom: 50px; 
  }
 
  .workImg.container {
    grid-column: 6/10; 
    border: 1px solid black; 
    height: 462px; 
    display: flex; 
    justify-content: flex-end; 
    flex-direction: column; 
    margin: 0; 
    padding: 0; 
    border-radius: 15px; 
    background-color: #fff; 
  }

  .workImg.container div {
    display: flex;
    flex-direction: row; 
    align-items: center; 
    width: 20px; 
    height: 20px;
    border-radius: 50px;  
    width: 100%; 
    padding: 0 20px; 
    margin-bottom: 5px; 
    justify-content: flex-end;
    gap: 20px; 

  }

    .workImg.container div span {
      width: 15px; 
      height: 15px; 
      border-radius: 50px; 
      justify-content: flex-end; 
    }

    .workImg.container div span:nth-child(1) {
      background-color: #83d196; 
    }
    .workImg.container div span:nth-child(2) {
      background-color: #f2bb05; 
    }    .workImg.container div span:nth-child(3) {
      background-color: #ff5b22; 
    }
  .workImg img {
    height: 430px; 
    min-width: 100%; 
    object-fit: cover; 
    border-top: 1px solid black; 
    border-radius: 0 0 14px 14px; 
  }

  ul {
  list-style: none; 
  }


  /* Header */

  header {
    background-color: pink; 
    grid-template-columns: repeat(10, 1fr);
    display: grid; 
    width: 100%; 
    position: fixed; 
    top: 0; 
  }

  // /* Nav */

  nav {
  grid-column: 2/10; 
  justify-content: space-between;  
  display: flex; 
  align-items: center; 
  }

  nav ul {
    display: flex; 
    gap: 10px; 
    // background-color: green; 
  }

  nav ul li {
    padding: 20px; 
  }

  /* Tags */

  .tag.container {
    display: flex; 
    flex-wrap: wrap; 
    width: 400px; 
    gap: 10px; 
  }

  .tag.container li:nth-child(1) {
    background-color: #ff5b22;
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

  .tags {
    border-radius: 15px; 
    padding: 5px 20px; 
    width: auto; 
    text-align: center; 
    font-size: 15px; 
  }


/* Buttons */

.link.container {
    display: flex; 
    gap: 10px; 
}

.btn.link {
    background-color: #f8fcec;
    color: #1d005b; 
    text-decoration: none; 
    text-align: center; 
    padding: 15px 20px; 
    max-width: 220px; 
    border: 1px solid; 

    &:hover {
      color: #f8fcec;
      background-color: #1d005b; 
    }
}



`;
