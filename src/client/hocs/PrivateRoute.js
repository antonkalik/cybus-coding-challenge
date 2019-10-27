import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component, isLoggedIn, ...rest }) {
  return !isLoggedIn ? <Redirect to="/login" /> : <Route {...rest} component={component} />;
}
