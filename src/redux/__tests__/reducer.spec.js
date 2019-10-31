import reducer, { initialState } from '../reducer';
import * as types from '../types';

describe('reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle UPDATE_STORE', () => {
    expect(
      reducer(initialState, {
        type: types.UPDATE_STORE,
        payload: { isLoggedIn: true },
      })
    ).toEqual({ ...initialState, isLoggedIn: true });

    expect(
      reducer(
        { ...initialState, currentTab: 'images' },
        {
          type: types.UPDATE_TAB,
          currentTab: 'containers',
        }
      )
    ).toEqual({ ...initialState, currentTab: 'containers' });
  });
});
