import styled, { css } from 'styled-components';

interface ErrorProps {
  isErrored: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #1c76bb;
    margin-bottom: 24px;
    margin-left: 48px;
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
