import React from 'react';
import ChatList from '../../components/ChatList';
import Header from '../../components/Header';
import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <ChatList />
    </Container>
  );
};

export default Main;
