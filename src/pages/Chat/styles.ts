/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  height: 90%;
`;

export const ChatName = styled.div`
  display: flex;
  flex: 1;
  background: #f7f7f7;
  height: 32px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const MessageBox = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  background: #00f;
`;

export const UserMessage = styled.input`
  background: #ff0;
  width: 80%;
`;
