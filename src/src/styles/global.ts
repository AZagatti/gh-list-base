import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${(({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      -webkit-font-smoothing: antialiased;
      font-family: 'Raleway', sans-serif;
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
    }
    
    button {
      cursor: pointer;
    }
  `)}
`;