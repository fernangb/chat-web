/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const ChatTitle = styled.h2`
  margin-left: 8px;
  margin-bottom: 8px;
`;

export const ChatTableHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  margin-left: 20px;

  ul {
    color: #1c76bb;
  }
`;
