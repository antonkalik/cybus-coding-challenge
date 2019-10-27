import * as actions from '../actions';
import * as types from '../types';

describe('actions', () => {
  test('should create an action to update store', () => {
    const payload = { isLoggedIn: true };
    const expectedAction = {
      type: types.UPDATE_STORE,
      payload,
    };
    expect(actions.actionUpdateStore(payload)).toEqual(expectedAction);
  });
});
