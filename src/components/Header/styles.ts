import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-bottom: 1px solid;
  border-color: #fff;
`;

export const ChatBox = styled.div`
  width: 75%;
`;

export const ButtonBox = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LoginButton = styled.button`
  background: #0ff;
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
  background: #00f;
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
