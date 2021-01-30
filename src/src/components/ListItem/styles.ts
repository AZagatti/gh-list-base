import { Theme } from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  padding: 16px;
  box-shadow: ${Theme.BoxShadow};
  border-radius: 4px;
  word-wrap: break-word;

  > header {
    min-height: 48px;
    h3 {
      font-size: 24px;
    }
  }

  > main {
    display: flex;
    justify-content: center;
    margin-top: 16px;
    flex-wrap: wrap;
    
    a {
      box-shadow: ${Theme.BoxShadow};
      padding: 4px 8px;
      margin: 4px 4px 0 0;
      border-radius: 4px;
      text-decoration: none;
      color: ${Theme.Background};
      font-size: 14px;
      font-weight: 500;
      background-color: ${Theme.PrimaryDark};
    }
  }

  @media (max-width: 425px) {
    width: 300px;
  }
`;
