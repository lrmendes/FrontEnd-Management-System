import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    font-size:  ${({ theme }) => theme.font.size + "px"};
    font-family: ${({ theme }) => theme.font.family};
  }

  html,
  body,
  #root {
    height: 100%;
  }

`;
