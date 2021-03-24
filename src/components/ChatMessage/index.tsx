/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Content,
  DateHeader,
  Message,
  MessageBox,
  UserHeader,
} from './styles';

interface ChatMessageProps {
  userName: string;
  date: string;
  userId: string;
  message: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  userName,
  date,
  userId,
  message,
}) => {
  const [isUser, setIsUser] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (!!user && user.id === userId) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [userId, user]);

  return (
    <Container isUser={isUser}>
      <Content isUser={isUser}>
        <MessageBox>
          <UserHeader>{userName}</UserHeader>
          <DateHeader>{date}</DateHeader>
        </MessageBox>

        <Message>{message}</Message>
      </Content>
    </Container>
  );
};

export default ChatMessage;
