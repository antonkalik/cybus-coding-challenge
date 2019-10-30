import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import App from './App';

const store = createStore(reducer);

window.STORE = store.getState();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
