import { fakeData } from './fakeData';
import { createReducer } from '../utilities';
import { RESET_STORE, UPDATE_STORE, UPDATE_CONTAINER, UPDATE_TAB, REMOVE_CONTAINER } from './types';

const initialState = {
  isLoggedIn: false,
  userName: '',
  currentTab: 'images',
  ...fakeData,
  search: '',
  modal: false,
  shareData: {},
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
  [UPDATE_CONTAINER]: (state, { id, status }) => {
    return {
      ...state,
      containers: state.containers.map(it => {
        if (it.id !== id) {
          return it;
        }

        return {
          ...it,
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
  [REMOVE_CONTAINER]: (state, { id }) => {
    return {
      ...state,
      containers: state.containers.filter(it => it.id !== id),
    };
  },
});
