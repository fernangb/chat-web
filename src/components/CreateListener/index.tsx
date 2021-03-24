/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
import React, { useCallback, useRef, useState } from 'react';
import { FiLogIn, FiMessageCircle } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import {
  Container,
  Content,
  FieldContent,
  Title,
  CreateListenerButton,
  SignUpButton,
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

const CreateListener: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const history = useHistory();

  const [name, setName] = useState('');
  const [clickSignup, setClickSignup] = useState(false);

  const handleSubmit = useCallback(async ({ chatName }: SignUpFormData) => {
    setName(chatName);
  }, []);

  const handleSignIn = useCallback(() => {
    setClickSignup(true);
  }, []);

  if (clickSignup) {
    return <Redirect to="signin" />;
  }

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Entrar no chat</h1>
          <h2>Ao entrar no chat como ouvinte:</h2>
          <li>Não pode enviar mensagens</li>
          <li>Pode visualizar mensagens</li>
          <li>Faça login para enviar mensagens</li>
          <FieldContent>
            <Title>Nome ou nickname</Title>
            <Input isErrored={false} name="chatName" icon={FiMessageCircle} />
          </FieldContent>
        </Form>
        <CreateListenerButton>Entrar no chat</CreateListenerButton>
        <SignUpButton onClick={handleSignIn}>Login</SignUpButton>
      </Content>
    </Container>
  );
};

export default CreateListener;
