import { createReducer } from '../utilities';
import { RESET_STORE, UPDATE_STORE } from './types';

const initialState = {
  isLoggedIn: false,
  userName: '',
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
