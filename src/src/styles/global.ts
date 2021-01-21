import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Raleway', sans-serif;
    ${(({ theme }) => css`
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
    `)}
  }
  
  button {
    cursor: pointer;
  }
`;