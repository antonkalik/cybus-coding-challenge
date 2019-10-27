import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LocalStorage } from '../storage';

export default function PrivateRoute({ component, ...rest }) {
  const isLoggedIn = LocalStorage.getItem('isLoggedIn');
  return isLoggedIn ? <Route {...rest} component={component} /> : <Redirect to="/login" />;
}
