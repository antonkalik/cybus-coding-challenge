import { getActionKeys } from '../';
const keys = ['remove', 'restart', 'stop', 'start'];
const actions = keys.reduce((a, b) => {
  a[b] = () => {};
  return a;
}, {});

describe('getActionKeys', () => {
  test('should return array with only one "remove" key', () => {
    expect(getActionKeys(actions, 'dead')).toEqual(['remove']);
  });
  test('should return array without stop key', () => {
    expect(getActionKeys(actions)).toEqual(['remove', 'restart', 'start']);
  });
  test('should return array with only one "remove" key if no actions', () => {
    expect(getActionKeys()).toEqual(['remove']);
  });
});
