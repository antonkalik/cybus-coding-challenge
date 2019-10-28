import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import FakeDB, { LocalStorage } from '../storage';

export default function PrivateRoute({ component, ...rest }) {
  const isLoggedIn = LocalStorage.getItem('isLoggedIn');
  const userName = FakeDB.findByKey('userName');
  return isLoggedIn && userName ? (
    <Route {...rest} component={component} />
  ) : (
    <Redirect to="/login" />
  );
}
