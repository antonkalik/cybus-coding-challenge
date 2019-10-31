import {
  UPDATE_STORE,
  RESET_STORE,
  UPDATE_CONTAINER,
  UPDATE_TAB,
  REMOVE_CONTAINER,
  ON_SORT,
} from './types';

export const actionUpdateStore = (payload = {}) => {
  return {
    type: UPDATE_STORE,
    payload,
  };
};

export const actionResetStore = () => {
  return {
    type: RESET_STORE,
  };
};

export const actionUpdateContainer = (id, status) => {
  return {
    type: UPDATE_CONTAINER,
    id,
    status,
  };
};

export const actionUpdateTab = currentTab => {
  return {
    type: UPDATE_TAB,
    currentTab,
  };
};

export const actionRemoveContainer = id => {
  return {
    type: REMOVE_CONTAINER,
    id,
  };
};

export const actionOnSort = (key, tab) => {
  return {
    type: ON_SORT,
    payload: {
      tab,
      key,
    },
  };
};
