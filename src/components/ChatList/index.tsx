/* eslint-disable array-callback-return */

import React from 'react';
import { ChatTableHeader, Container, ChatTitle } from './styles';
import ChatItem from '../ChatItem';

interface ChatProps {
  title: string;
  users: number;
  listeners: number;
}

const ChatList: React.FC = () => {
  const chats: ChatProps[] = [
    {
      title: 'Chat 1',
      users: 5,
      listeners: 5,
    },
    {
      title: 'Chat 2',
      users: 5,
      listeners: 5,
    },
    {
      title: 'Chat 3',
      users: 5,
      listeners: 5,
    },
  ];

  return (
    <Container>
      <ChatTitle>Chats Abertos</ChatTitle>
      <ChatTableHeader>
        <ul>Nome</ul>
        <ul>Usuários</ul>
        <ul>Ouvintes</ul>
      </ChatTableHeader>
      {chats.map(chat => (
        <ChatItem chat={chat} />
      ))}
    </Container>
  );
};

export default ChatList;
