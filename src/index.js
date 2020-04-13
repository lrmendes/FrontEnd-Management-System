import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import theme from "./themes";
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StylesProvider>,
  document.getElementById("root")
);
