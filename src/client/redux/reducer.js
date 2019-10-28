import { createReducer } from '../utilities';
import { RESET_STORE, UPDATE_STORE } from './types';

const initialState = {
  isLoggedIn: false,
  userName: '',
  currentTab: 'images',
  images: [],
  containers: [],
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
});
