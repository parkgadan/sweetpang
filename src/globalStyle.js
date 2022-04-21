import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    margin: 0;
  }

  html, body {
    display: grid;
    place-items: center;
    inline-size: 100vw;
    block-size: 100vh;
  }

  table {
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    inline-size: 100%;
    block-size: 100%;
  }

  td {
    border: 1px solid black;
    inline-size: 40px;
    block-size: 40px;
  }
`;

export default GlobalStyle;
