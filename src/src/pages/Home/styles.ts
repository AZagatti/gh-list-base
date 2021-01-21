import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  form {
    margin: 50px auto 0;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 160px;
    h1 {
      padding: 20px 0;
    }
    input {
      border-radius: 4px;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      height: 28px;
      align-self: stretch;
    }
    button {
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.primary};
      align-self: stretch;
      color: ${({ theme }) => theme.colors.background};
      border: 0;
      padding: 8px 0;
      font-size: 20px;
      margin: 24px 0;
    }
  }
`;
