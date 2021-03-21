import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Routes from './routes';
import Main from './pages/Main';
import SignUp from './pages/Signup';

const App: React.FC = () => (
  <Router>
    <Routes />

    {/* <Main /> */}
    {/* <SignUp /> */}

    <GlobalStyles />
  </Router>
);

export default App;
