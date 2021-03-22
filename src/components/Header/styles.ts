import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-bottom: 1px solid;
  border-color: #1c76bb;
`;

export const ChatBox = styled.div`
  width: 70%;
`;

export const ButtonBox = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LoginButton = styled.button`
  border-radius: 10px;
  border: 0;
  width: 64px;
  height: 32px;
  transition: background-color 0.2s;
  text-align: center;

  &:hover {
    color: ${shade(0.2, '#f4ede8')};
  }
`;

export const LoginButtonText = styled.p``;

export const SignInButton = styled.button`
  border-radius: 10px;
  border: 0;
  width: 72px;
  height: 36px;
  transition: background-color 0.2s;
  text-align: center;

  &:hover {
    color: ${shade(0.2, '#f4ede8')};
  }
`;

export const SignInButtonText = styled.p``;
