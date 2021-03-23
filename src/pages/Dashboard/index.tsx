/* eslint-disable import/extensions */
import React, { useCallback } from 'react';
import ChatList from '../../components/ChatList';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  UserBox,
  LogoutButton,
  LogoutButtonText,
  DashboardBox,
  UserName,
  ButtonBox,
  CreateChatButton,
  CreateChatButtonText,
  ChatBox,
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
      <ChatBox>
        <CreateChatButton>
          <CreateChatButtonText>Criar chat</CreateChatButtonText>
        </CreateChatButton>
      </ChatBox>

      <ChatList />
    </Container>
  );
};

export default Dashboard;
