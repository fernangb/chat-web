import styled, { css } from 'styled-components';

interface ErrorProps {
  isErrored: boolean;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 64px;
    color: #1c76bb;
  }
`;

export const Title = styled.h3`
  margin-left: 16px;
  margin-bottom: 8px;
  color: #1c76bb;
`;

export const FieldContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const ErrorField = styled.div<ErrorProps>`
  ${props =>
    props.isErrored &&
    css`
      color: #c53030;
    `}
`;
