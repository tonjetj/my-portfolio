import { createGlobalStyle } from "styled-components";
import { fonts } from "./typography/index.ts";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wdth,wght@50..200,200..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  h1, h2, h3 {
  font-family: ${fonts.fontFamily.headline};
  }

  p, a, li {
  font-family: ${fonts.fontFamily.copy};
  }

  /* Layout */

  ul {
  list-style: none; 
  }

  /* Tags */

  .tag.container {
  display: flex; 
  flex-wrap: wrap; 
  width: 500px; 
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
    padding: 20px; 
    width: 200px; 
    border: 1px solid; 

    &:hover {
      color: #f8fcec;
      background-color: #1d005b; 
    }
}



`;
