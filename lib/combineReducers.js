const combineReducers = reducerKeysToReducers => {
  return (state = {}, action) => {
    for (let key in reducerKeysToReducers) {
      state[key] = reducerKeysToReducers[key](state[key], action);
    }

    return state;
  };
};

export default combineReducers;
