import React from 'react';

import { Link } from 'react-router-dom';
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
        <Link to="signin">
          <LoginButton>
            <LoginButtonText>Login</LoginButtonText>
          </LoginButton>
        </Link>

        <Link to="/signup">
          <SignInButton>
            <SignInButtonText>Cadastro</SignInButtonText>
          </SignInButton>
        </Link>
      </ButtonBox>
    </Container>
  );
};

export default Header;
