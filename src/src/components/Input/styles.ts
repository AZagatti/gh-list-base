import { Theme } from 'src/styles/theme';
import styled, { css } from 'styled-components';

interface LabelProps {
  error?: string | null;
}

export const Label = styled.label<LabelProps>`
  position: relative;
  width: 100%;
  margin: 16px 0 32px;
  font-size: 16px;
  font-weight: 500;
  color: ${Theme.Text};
  input {
    border-radius: 4px;
    border: 1px solid ${Theme.Primary};
    line-height: 40px;
    width: 100%;
    margin-top: 8px;
    padding: 0 8px;
    &:focus {
      outline-color: ${Theme.Primary};
    }
    &::placeholder {
      color: ${Theme.Text}
    }
    ${({ error }) => error && css`
      border-color: ${Theme.Error};
    `}
  }
  span {
    position: absolute;
    bottom: -18px;
    left: 0;
    font-size: 14px;
    color: ${Theme.Error};
  }
`;
