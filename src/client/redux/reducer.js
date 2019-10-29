import { fakeData } from '../db';
import { createReducer } from '../utilities';
import { RESET_STORE, UPDATE_STORE, UPDATE_CONTAINER, UPDATE_TAB } from './types';

const initialState = {
  isLoggedIn: false,
  userName: 'antonkalik',
  currentTab: 'images',
  ...fakeData,
  search: '',
};

export default createReducer(initialState, {
  [UPDATE_STORE]: (state, { payload }) => {
    return {
      ...state,
      ...payload,
    };
  },
  [RESET_STORE]: () => {
    return initialState;
  },
  [UPDATE_CONTAINER]: (state, { container, index }) => {
    let containers = state.containers;
    containers[index] = container;
    return {
      ...state,
      containers,
    };
  },
  [UPDATE_TAB]: (state, { currentTab }) => {
    return {
      ...state,
      ...fakeData,
      currentTab,
    };
  },
});
