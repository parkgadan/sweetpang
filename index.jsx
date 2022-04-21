import React from "react";
import ReactDOM from "react-dom";

import App from "./src/App";
import GlobalStyle from "./src/globalStyle";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.querySelector("#root")
);
