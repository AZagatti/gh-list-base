import { Theme } from 'src/styles/theme';
import styled from 'styled-components';

export const Form = styled.form`
  margin: 50px auto 0;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${Theme.BoxShadow};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  button {
    border-radius: 8px;
    background-color: ${Theme.Primary};
    width: 100%;
    color: ${Theme.Background};
    border: 0;
    line-height: 40px;
    font-size: 20px;
    &:hover {
      background-color: ${Theme.PrimaryDark};
      transition: background-color 0.2s;
    }
  }
`;
