/* eslint-disable import/extensions */
import React, { useCallback } from 'react';
import ChatList from '../../components/ChatList';
import Header from '../../components/Header';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  UserBox,
  LogoutButton,
  LogoutButtonText,
  DashboardBox,
  UserName,
  ButtonBox,
} from './styles';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  const handleLogout = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <DashboardBox>
        <UserBox>
          <UserName>Olá, {user.name}</UserName>
        </UserBox>
        <ButtonBox>
          <LogoutButton onClick={handleLogout}>
            <LogoutButtonText>Sair</LogoutButtonText>
          </LogoutButton>
        </ButtonBox>
      </DashboardBox>

      <ChatList />
    </Container>
  );
};

export default Dashboard;
