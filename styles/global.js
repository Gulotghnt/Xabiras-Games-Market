import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to left,#29363f, #3d3338);
    background-image: linear-gradient(#212e36, #313338);
    font-family: Arial, Helvetica, sans-serif
  }
`;

  

export default GlobalStyle;
