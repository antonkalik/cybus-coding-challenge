import { fakeData, headers } from './fakeData';
import { createReducer, sortByKey } from '../utilities';
import {
  RESET_STORE,
  UPDATE_STORE,
  UPDATE_CONTAINER,
  UPDATE_TAB,
  REMOVE_CONTAINER,
  ON_SORT,
} from './types';

export const initialState = {
  isLoggedIn: false,
  userName: '',
  currentTab: 'images',
  ...fakeData,
  headers,
  search: '',
  modal: false,
  shareData: {},
  sorted: true,
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
  [ON_SORT]: (state, { payload: { tab, key } }) => {
    if (!tab || !key || !state[tab]) {
      return state;
    }
    const sortedData = state[tab].sort(sortByKey(key));

    return {
      ...state,
      [tab]: state.sorted ? sortedData.reverse() : sortedData,
      sorted: !state.sorted,
    };
  },
});
