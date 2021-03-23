/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
import React, { useCallback, useRef, useState } from 'react';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import { Container, Content, FieldContent, Title, ErrorField } from './styles';
import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

interface SignUpFormData {
  email: string;
  password: string;
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

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn } = useAuth();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');

  const [isErrored, setIsErrored] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleSubmit = useCallback(
    async ({ email, password }: SignUpFormData) => {
      setEmailError(false);
      setPasswordError(false);
      let errors = 0;

      if (!email) {
        setEmailErrorText('Email obrigatório');
        setEmailError(true);
        errors++;
      }

      if (!password) {
        setPasswordErrorText('Senha obrigatória');
        setPasswordError(true);
        errors++;
      }

      if (errors === 0) {
        await signIn({
          email,
          password,
        })
          .then(response => {
            history.push('/dashboard');
          })
          .catch(err => {
            const { data } = err.response;

            setIsErrored(true);
            setErrorText(data.error);
          });
      }
    },
    [history, signIn],
  );

  function closeModal() {
    setIsErrored(false);
  }

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Login</h1>
          <FieldContent>
            <Title>E-mail</Title>
            <Input isErrored={emailError} name="email" icon={FiMail} />
            <ErrorField isErrored={emailError}>{emailErrorText}</ErrorField>
          </FieldContent>
          <FieldContent>
            <Title>Senha</Title>
            <Input
              isErrored={passwordError}
              name="password"
              icon={FiLock}
              type="password"
            />
            <ErrorField isErrored={passwordError}>
              {passwordErrorText}
            </ErrorField>
          </FieldContent>
          <Button type="submit">Entrar</Button>
        </Form>
        <Link to="/signup">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
      <Modal
        isOpen={isErrored}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div>{errorText}</div>
      </Modal>
    </Container>
  );
};

export default SignIn;
