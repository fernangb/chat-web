/* eslint-disable array-callback-return */

import React, { useEffect } from 'react';
import { ChatTableHeader, Container } from './styles';
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

  useEffect(() => {
    console.log('chats: ', chats);
  }, []);

  return (
    <Container>
      <h2>Chats Abertos</h2>
      <ChatTableHeader>
        <p>Nome</p>
        <p>Usuários</p>
        <p>Ouvintes</p>
      </ChatTableHeader>
      {chats.map(chat => (
        <ChatItem chat={chat} />
      ))}
    </Container>
  );
};

export default ChatList;
