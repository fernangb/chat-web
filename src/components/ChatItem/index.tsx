/* eslint-disable react/prop-types */
import React, { InputHTMLAttributes, useEffect } from 'react';

import {
  Container,
  ChatName,
  ChatUserNumber,
  ChatListenerNumber,
  JoinButton,
  ButtonText,
} from './styles';

interface ChatProps {
  title: string;
  users: number;
  listeners: number;
}

interface ChatItemProps extends InputHTMLAttributes<HTMLInputElement> {
  chat: ChatProps;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat, ...rest }) => {
  useEffect(() => {
    console.log('chat: ', chat);
  }, []);

  return (
    <Container {...rest}>
      <ChatName>{chat.title}</ChatName>
      <ChatUserNumber>{chat.users}</ChatUserNumber>
      <ChatListenerNumber>{chat.listeners}</ChatListenerNumber>
      <JoinButton>
        <ButtonText>Entrar</ButtonText>
      </JoinButton>
    </Container>
  );
};

export default ChatItem;
