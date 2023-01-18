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

  .board {
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    inline-size: 560px;
    block-size: 560px;
    display: flex;
    flex-wrap: wrap;
  }

.board img {
  inline-size: 70px;
  block-size: 70px;
}
`;

export default GlobalStyle;
