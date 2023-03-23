import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --gold: #A18A68;
    --gold-black: #4f3f2a;
    --black: #000000;
    --white: #FFFFFF;
    --gray-light: #e0dede; 
    --gray-dark: #333333;
    --gray-best-product: #F1EFEF;
  } 
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
    button {
    cursor: pointer;
  }
  body {
    font-family: 'DM Sans';
  }
`;
