export const createReducer = (initialState, funcMap) => {
  return (state, action, ...rest) => {
    const { type } = action;
    const handler = funcMap[type];
    const newState = state || initialState;

    return handler ? handler(newState, action, ...rest) : newState;
  };
};

export const debounce = (fn, time = 500) => {
  setTimeout(fn, time);
};

export const searching = (data, query) =>
  data.filter(item => Object.values(item).find(val => val === query));

export const filterObj = (obj, k) =>
  Object.keys(obj)
    .filter(key => k !== key)
    .reduce((a, c) => {
      a[c] = obj[c];
      return a;
    }, {});

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const sortByKey = key => (a, b) => (a[key] > b[key] ? 1 : -1);
