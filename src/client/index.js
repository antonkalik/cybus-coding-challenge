import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import App from './App';
import { LocalStorage } from './storage';

const interceptor = store => next => action => {
  const { containers, images, isLoggedIn } = store.getState();
  if (isLoggedIn) {
    LocalStorage.setItem('persistedData', { containers, images });
  } else {
    LocalStorage.removeItem('persistedData');
  }
  return next(action);
};

const store = createStore(reducer, applyMiddleware(interceptor));

window.store = store;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
