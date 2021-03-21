import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import SignUp from '../pages/Signup';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default Routes;
