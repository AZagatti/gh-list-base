import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme: { colors } }) =>
    css`
      margin: 50px auto 0;
      width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 1px 3px -1px rgba(0, 0, 0);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      padding: 40px;
      button {
        border-radius: 8px;
        background-color: ${colors.primary};
        width: 100%;
        color: ${colors.background};
        border: 0;
        line-height: 40px;
        font-size: 20px;
      }
    `
  }
`;
