/* eslint-disable import/extensions */
import React, { useCallback, useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Modal from 'react-modal';

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
import CreateChat from '../../components/CreateChat';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = useCallback(() => {
    signOut();
  }, [signOut]);

  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

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
        <CreateChatButton onClick={handleOpenModal}>
          <CreateChatButtonText>Criar chat</CreateChatButtonText>
        </CreateChatButton>
      </ChatBox>
      <ChatList />
      <Modal
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <CreateChat />
      </Modal>
    </Container>
  );
};

export default Dashboard;
