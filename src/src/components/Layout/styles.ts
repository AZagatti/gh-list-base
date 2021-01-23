import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme: { colors } }) =>
    css`
      min-height: 100vh;
      display: flex;
      flex-direction: column;

      header {
        background-color: ${colors.primary};
        padding: 16px;
        border-top: 16px solid ${colors.primaryDark};
        img {
          width: 150px;
        }
      }

      main {
        flex: 1;
      }

      footer {
        font-size: 18px;
        padding: 8px 0;
        text-align: center;
        background-color: ${colors.primary};
        color: ${colors.background};
      }
    `
  }
`;
