/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
import React, { useCallback, useRef, useState } from 'react';
import { FiLogIn, FiMessageCircle } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import {
  Container,
  Content,
  FieldContent,
  Title,
  CreateChatButton,
} from './styles';
import api from '../../services/api';
import Input from '../Input';
import Button from '../Button';
import { useAuth } from '../../hooks/auth';

interface SignUpFormData {
  chatName: string;
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

const CreateChat: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const [name, setName] = useState('');

  const handleSubmit = useCallback(async ({ chatName }: SignUpFormData) => {
    setName(chatName);
  }, []);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo chat</h1>
          <FieldContent>
            <Title>Nome do chat</Title>
            <Input isErrored={false} name="chatName" icon={FiMessageCircle} />
          </FieldContent>
        </Form>
        <CreateChatButton>
          <FiLogIn />
          Criar chat
        </CreateChatButton>
      </Content>
    </Container>
  );
};

export default CreateChat;
