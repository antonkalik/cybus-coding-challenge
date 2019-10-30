import { fakeData } from '../db';
import { createReducer } from '../utilities';
import { RESET_STORE, UPDATE_STORE, UPDATE_CONTAINER, UPDATE_TAB, REMOVE_CONTAINER } from './types';

const initialState = {
  isLoggedIn: false,
  userName: '',
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
  [UPDATE_CONTAINER]: (state, { index, status }) => {
    return {
      ...state,
      containers: state.containers.map((container, i) => {
        if (i !== index) {
          return container;
        }

        return {
          ...container,
          status,
        };
      }),
    };
  },
  [UPDATE_TAB]: (state, { currentTab }) => {
    return {
      ...state,
      ...fakeData,
      currentTab,
    };
  },
  [REMOVE_CONTAINER]: (state, { index }) => {
    return {
      ...state,
      containers: [...state.containers.slice(0, index), ...state.containers.slice(index + 1)],
    };
  },
});
