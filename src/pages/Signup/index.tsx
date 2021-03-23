/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
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
import Modal from 'react-modal';
import { Container, Content, FieldContent, Title, ErrorField } from './styles';
import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  bornDate: Date;
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

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmationError, setPasswordConfirmationError] = useState(
    false,
  );
  const [bornDateError, setBornDateError] = useState(false);
  const [nameErrorText, setNameErrorText] = useState('');
  const [emailErrorText, setEmailErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const [
    passwordConfirmationErrorText,
    setPasswordConfirmationErrorText,
  ] = useState('');
  const [bornDateErrorText, setBornDateErrorText] = useState('');

  const [isErrored, setIsErrored] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleSubmit = useCallback(
    async ({
      name,
      email,
      password,
      passwordConfirmation,
      bornDate,
    }: SignUpFormData) => {
      setNameError(false);
      setEmailError(false);
      setPasswordError(false);
      setPasswordConfirmationError(false);
      setBornDateError(false);
      setEmailErrorText('');
      setPasswordErrorText('');
      setPasswordConfirmationErrorText('');
      setBornDateErrorText('');

      let errors = 0;

      if (!name) {
        setNameErrorText('Nome obrigatório');
        setNameError(true);
        errors++;
      }

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
      if (!passwordConfirmation) {
        setPasswordConfirmationErrorText('Confirmação de Senha obrigatória');
        setPasswordConfirmationError(true);
        errors++;
      } else if (password !== passwordConfirmation) {
        setPasswordConfirmationErrorText('As senhas não batem');
        setPasswordConfirmationError(true);
        errors++;
      }

      if (!bornDate) {
        setBornDateErrorText('Data de nascimento obrigatória');
        setBornDateError(true);
        errors++;
      }

      if (errors === 0) {
        await api
          .post('/users', {
            name,
            email,
            password,
            born_date: bornDate,
          })
          .then(() => {
            history.push('/signin');
          })
          .catch(err => {
            const { data } = err.response;

            setIsErrored(true);
            setErrorText(data.error);
          });
      }
    },
    [history],
  );

  function closeModal() {
    setIsErrored(false);
  }

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
            <Title>Confirme sua Senha</Title>
            <Input
              isErrored={passwordConfirmationError}
              name="passwordConfirmation"
              icon={FiLock}
              type="password"
            />
            <ErrorField isErrored={passwordConfirmationError}>
              {passwordConfirmationErrorText}
            </ErrorField>
          </FieldContent>

          <Button type="submit">Cadastrar</Button>
        </Form>
        <Link to="/">
          <FiArrowLeft />
          Voltar para tela inicial
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

export default SignUp;
