import { UPDATE_STORE, RESET_STORE, UPDATE_CONTAINER, UPDATE_TAB, RESET_SEARCH } from './types';

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

export const actionUpdateContainer = (container, index) => {
  return {
    type: UPDATE_CONTAINER,
    container,
    index,
  };
};

export const actionUpdateTab = currentTab => {
  return {
    type: UPDATE_TAB,
    currentTab,
  };
};
