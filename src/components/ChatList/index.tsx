/* eslint-disable array-callback-return */

import React, { useEffect, useState } from 'react';
import { ChatTableHeader, Container, ChatTitle } from './styles';
import ChatItem from '../ChatItem';
import api from '../../services/api';

interface ChatProps {
  name: string;
  users: number;
  listeners: number;
}

const ChatList: React.FC = () => {
  const [chats, setChats] = useState<ChatProps[]>([]);

  useEffect(() => {
    async function loadData() {
      await api.get('/chats').then(response => {
        setChats(response.data);
      });
    }

    loadData();
  }, []);

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
