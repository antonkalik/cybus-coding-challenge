import { UPDATE_STORE, RESET_STORE, UPDATE_CONTAINER, UPDATE_TAB, REMOVE_CONTAINER } from './types';

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

export const actionUpdateContainer = (index, status) => {
  return {
    type: UPDATE_CONTAINER,
    index,
    status,
  };
};

export const actionUpdateTab = currentTab => {
  return {
    type: UPDATE_TAB,
    currentTab,
  };
};

export const actionRemoveContainer = index => {
  return {
    type: REMOVE_CONTAINER,
    index,
  };
};
