/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  border: 2px solid #30454c;
  padding: 16px;
  width: 360px;
  color: #666360;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isFilled &&
    css`
      color: #1c76bb;
    `}
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #1c76bb;
      border-color: #1c76bb;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #1c76bb;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
