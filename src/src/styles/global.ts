import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Raleway', sans-serif;
    background-color: ${Theme.Background};
    color: ${Theme.Text};
  }
  
  button {
    cursor: pointer;
  }
`;