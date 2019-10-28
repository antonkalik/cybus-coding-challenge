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
