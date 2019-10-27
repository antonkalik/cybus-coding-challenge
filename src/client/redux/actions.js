import { UPDATE_STORE, RESET_STORE } from './types';

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
