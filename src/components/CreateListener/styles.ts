import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 32px;
    color: #1c76bb;
  }

  li {
    color: #1c76bb;
  }
`;

export const Title = styled.h2`
  margin-left: 16px;
  margin-bottom: 8px;
  color: #1c76bb;
  width: 100%;
  margin-top: 4px;
`;

export const FieldContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const CreateListenerButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 8px;
`;

export const SignUpButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 8px;
`;
