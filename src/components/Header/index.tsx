import React from 'react';

import {
  Container,
  LoginButton,
  LoginButtonText,
  SignInButton,
  SignInButtonText,
  ButtonBox,
  ChatBox,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <ChatBox />
      <ButtonBox>
        <LoginButton>
          <LoginButtonText>Login</LoginButtonText>
        </LoginButton>
        <SignInButton>
          <SignInButtonText>Cadastro</SignInButtonText>
        </SignInButton>
      </ButtonBox>
    </Container>
  );
};

export default Header;
