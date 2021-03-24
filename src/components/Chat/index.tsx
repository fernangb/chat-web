import React from 'react';
import ChatMessage from '../ChatMessage';
import { ChatName, Container, UserMessage, MessageBox } from './styles';

const Chat: React.FC = () => {
  return (
    <>
      <Container>
        <ChatName>Chat</ChatName>
        <ChatMessage
          userName="Gabriel Fernandes"
          date="22/03/2021 11:00"
          userId="123"
          message="Oi"
        />
        <ChatMessage
          userName="Maria Carolina"
          date="22/03/2021 11:00"
          userId="12345"
          message="Oi Gabriel"
        />
        <ChatMessage
          userName="João"
          date="22/03/2021 11:00"
          userId="12345"
          message="Oi Galera"
        />

        <MessageBox>
          <UserMessage />
        </MessageBox>
      </Container>
    </>
  );
};

export default Chat;
