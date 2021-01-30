import { Theme } from 'src/styles/theme';
import styled from 'styled-components';

export const List = styled.ul`
  padding: 32px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 400px));
  grid-gap: 32px;
  /* grid-template-rows: auto;
  grid-auto-flow: row; */
  justify-content: center;
  flex: 1;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  button {
    width: 96px;
    height: 32px;
    border: none;
    border-radius: 4px;
    background-color: ${Theme.PrimaryLight};
    color: ${Theme.Background};
    font-weight: 500;
    font-size: 18px;
    
    & + button {
      margin-left: 16px;
    }

    &:disabled {
      background-color: ${Theme.Gray};
      cursor: not-allowed;
    }
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 48px;

  a {
    color: ${Theme.Text};
    margin-top: 16px;
  }
`;