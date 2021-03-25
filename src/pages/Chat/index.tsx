/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import ChatMessage from '../../components/ChatMessage';
import api from '../../services/api';
import { ChatName, Container, UserMessage, MessageBox } from './styles';

interface IChat {
  id: string;
  name: string;
  users: number;
  listeners: number;
}

interface IUser {
  id: string;
  name: string;
}

interface IMessage {
  id: string;
  user: IUser;
  user_id: string;
  chat_id: string;
  text: string;
  created_at: string;
}

interface ChatProps {
  chat_id: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [chatGroup, setChatGroup] = useState<IChat>();

  useEffect(() => {
    async function loadChat() {
      await api
        .get(`/chats/60c54c97-afaa-4edc-96bf-cded20cb6916`)
        .then(response => {
          console.log('chat: ', response.data);
          setChatGroup(response.data);
        });
    }

    loadChat();
  }, []);

  useEffect(() => {
    async function loadMessages() {
      if (chatGroup) {
        await api.get(`/messages/${chatGroup.id}`).then(response => {
          console.log('mensagens: ', response.data);

          setMessages(response.data);
        });
      }
    }

    loadMessages();
  }, [chatGroup]);

  useEffect(() => {
    console.log('msg: ', messages);
  }, [messages]);

  if (chatGroup && messages) {
    return (
      <>
        <Container>
          <ChatName>{chatGroup.name}</ChatName>
          {messages.map(message => {
            <ChatMessage
              userName={message.user.name}
              date={message.created_at}
              userId={message.user_id}
              message={message.text}
            />;
          })}

          {/* <MessageBox>
            <UserMessage />
          </MessageBox> */}
        </Container>
      </>
    );
  }

  return <></>;
};

export default Chat;
