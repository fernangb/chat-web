/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

interface MessageProps {
  isUser: boolean;
}

export const Container = styled.div<MessageProps>`
  display: flex;
  flex-direction: column;

  ${props =>
    props.isUser &&
    css`
      align-items: flex-end;
    `}
`;

export const Content = styled.div<MessageProps>`
  background: #1c76bb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 4px;

  ${props =>
    props.isUser &&
    css`
      background: #228c22;
    `}
`;

export const Message = styled.div`
  color: #fff;
  font-size: 12;
  margin: 8px;
`;

export const MessageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: #fff;
  font-size: 16;
  font-weight: bold;
`;

export const UserHeader = styled.div`
  margin: 4px;
`;

export const DateHeader = styled.div`
  margin: 4px;
`;
