import { Theme } from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > header {
    background-color: ${Theme.Primary};
    padding: 16px;
    border-top: 16px solid ${Theme.PrimaryDark};
    img {
      width: 150px;
    }
  }

  > main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  > footer {
    font-size: 18px;
    padding: 8px 0;
    text-align: center;
    background-color: ${Theme.Primary};
    color: ${Theme.Background};
  }
`;
