import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  opacity: 0.6;
  background-color: #f7f7f7;
  padding: 8px;
  margin: 8px;

  &:hover {
    color: ${shade(0.2, '#f4ede8')};
  }
`;

export const ChatName = styled.p`
  font-size: 20px;
`;

export const ChatUserNumber = styled.p`
  font-size: 20px;
`;

export const ChatListenerNumber = styled.p`
  font-size: 20px;
`;

export const JoinButton = styled.button`
  border-radius: 10px;
  border: 0;
  width: 64px;
  height: 32px;
  transition: background-color 0.2s;
  text-align: center;

  &:hover {
    color: ${shade(0.2, '#f4ede8')};
  }
`;

export const ButtonText = styled.p`
  font-size: 16px;
`;
