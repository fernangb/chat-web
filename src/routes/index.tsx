import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/Signup';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
  </Switch>
);

export default Routes;
