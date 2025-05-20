import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --font-family-base: 'Rubik', sans-serif;
    --primary-color: #49687E;
    --price-suffix: #83a1b7;
    --tooltip-text-color: #49687E
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family-base);
    background-color: #f9f9f9;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
