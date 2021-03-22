/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
import React, { useCallback, useRef, useState } from 'react';
import {
  FiArrowLeft,
  FiMail,
  FiLock,
  FiUser,
  FiCalendar,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import { Container, Content, FieldContent, Title, ErrorField } from './styles';
import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  bornDate: Date;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [bornDateError, setBornDateError] = useState(false);
  const [nameErrorText, setNameErrorText] = useState('');
  const [emailErrorText, setEmailErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const [bornDateErrorText, setBornDateErrorText] = useState('');

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      setNameError(false);
      setEmailError(false);
      setPasswordError(false);
      setBornDateError(false);
      let errors = 0;

      console.log(data);

      if (!data.name) {
        setNameErrorText('Nome obrigatório');
        setNameError(true);
        errors++;
      }

      if (!data.email) {
        setEmailErrorText('Email obrigatório');
        setEmailError(true);
        errors++;
      }

      if (!data.password) {
        setPasswordErrorText('Senha obrigatória');
        setPasswordError(true);
        errors++;
      }

      if (!data.bornDate) {
        setBornDateErrorText('Data de nascimento obrigatória');
        setBornDateError(true);
        errors++;
      }

      if (errors === 0) {
        const response = await api.post('/users', data);
        console.log(response);
        history.push('/');
      }
    },
    [history],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <FieldContent>
            <Title>Nome Completo</Title>
            <Input isErrored={nameError} name="name" icon={FiUser} />
            <ErrorField isErrored={nameError}>{nameErrorText}</ErrorField>
          </FieldContent>
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
          <FieldContent>
            <Title>Data de Nascimento</Title>
            <Input
              type="date"
              isErrored={bornDateError}
              name="bornDate"
              icon={FiCalendar}
            />
            <ErrorField isErrored={bornDateError}>
              {bornDateErrorText}
            </ErrorField>
          </FieldContent>

          <Button type="submit">Cadastrar</Button>
        </Form>
        <Link to="/">
          <FiArrowLeft />
          Voltar para logon
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
