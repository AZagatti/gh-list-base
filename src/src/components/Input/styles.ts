import styled, { css } from 'styled-components';

export const Label = styled.label`
  ${({ theme: { colors } }) =>
    css`
      width: 100%;
      margin: 16px 0 32px;
      font-size: 16px;
      font-weight: 500;
      color: ${colors.text};
      input {
        border-radius: 4px;
        border: 1px solid ${colors.primary};
        line-height: 40px;
        width: 100%;
        margin-top: 8px;
        padding: 0 8px;
        &:focus {
          outline-color: ${colors.primary};
        }
        &::placeholder {
          color: ${colors.text}
        }
      }
  `}
`;
