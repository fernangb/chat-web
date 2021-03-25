/* eslint-disable react/prop-types */
import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import CreateListener from '../CreateListener';

import {
  Container,
  ChatName,
  ChatUserNumber,
  ChatListenerNumber,
  JoinButton,
  ButtonText,
} from './styles';

interface ChatProps {
  name: string;
  users: number;
  listeners: number;
}

interface ChatItemProps extends InputHTMLAttributes<HTMLInputElement> {
  chat: ChatProps;
}

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

const ChatItem: React.FC<ChatItemProps> = ({ chat, ...rest }) => {
  const { user } = useAuth();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  if (!user) {
    return (
      <Container {...rest}>
        <ChatName>{chat.name}</ChatName>
        <ChatUserNumber>{chat.users}</ChatUserNumber>
        <ChatListenerNumber>{chat.listeners}</ChatListenerNumber>
        <JoinButton onClick={handleOpenModal}>
          <ButtonText>Entrar</ButtonText>
        </JoinButton>
        <Modal
          isOpen={openModal}
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          <CreateListener />
        </Modal>
      </Container>
    );
  }

  return (
    <Container {...rest}>
      <ChatName>{chat.name}</ChatName>
      <ChatUserNumber>{chat.users}</ChatUserNumber>
      <ChatListenerNumber>{chat.listeners}</ChatListenerNumber>
      <JoinButton>
        <Link to="/chat">
          <ButtonText>Entrar</ButtonText>
        </Link>
      </JoinButton>
      <Modal
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <div>oi</div>
      </Modal>
    </Container>
  );
};

export default ChatItem;
