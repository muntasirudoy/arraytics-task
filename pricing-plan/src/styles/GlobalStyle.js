import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --font-family-base: 'Rubik', sans-serif;
    --primary-color: #49687E;
    --price-suffix: #83a1b7;
    --tooltip-text-color: #49687E
  }
 
  .tooltip-content img{
    width: 100%;
    height: auto;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family-base);
    min-height: 100vh;
background: linear-gradient(180deg, rgba(183, 141, 235, .1), rgba(183, 141, 235, 0) 28.39%), #fff;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
