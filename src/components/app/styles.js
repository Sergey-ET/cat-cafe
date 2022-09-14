import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  #root {
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    min-height: 100vh;
  }

  body {
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 27px;
    font-weight: 400;
    color: ${(props) => props.theme.colorBlackForText};
  }
`;
