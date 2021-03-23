/* eslint-disable import/prefer-default-export */
import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div``;

export const DashboardBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: #1c76bb;
  height: 48px;
`;

export const UserBox = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: space-between;
  margin-left: 8px;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 30%;
  margin-right: 4px;
`;

export const UserName = styled.h2``;

export const LogoutButton = styled.button`
  border-radius: 10px;
  border: 0;
  width: 64px;
  height: 32px;
  transition: background-color 0.2s;
  text-align: center;
  margin-right: 12px;

  &:hover {
    color: ${shade(0.2, '#f4ede8')};
  }
`;

export const LogoutButtonText = styled.p``;

export const ChatBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 16px;
  margin-top: 32px;
`;

export const CreateChatButton = styled.button`
  border-radius: 10px;
  border: 0;
  width: 96px;
  height: 32px;
  transition: background-color 0.2s;
  text-align: center;
  background-color: #228c22;

  &:hover {
    background-color: ${shade(0.2, '#f4ede8')};
  }
`;

export const CreateChatButtonText = styled.p`
  color: #fff;
`;
