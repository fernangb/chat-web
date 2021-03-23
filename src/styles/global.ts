import { shade } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body{
    background: #fff;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-size: 16px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: 500;
    color: #1c76bb;

  }
  button {
    cursor: pointer;
    background: #e97579;
    &:hover {
      background: ${shade(0.2, '#e97579')};
    }
  }
  input {
    background: #1c76bb;
  }
`;
