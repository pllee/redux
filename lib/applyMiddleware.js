import compose from './compose';
import createStore from './createStore';

export default function applyMiddleware(...middlewares) {
    return (createStore) => (reducer, defaultState) => {
      const store = createStore(reducer, defaultState);
      
      const dispatch = store.dispatch.bind(store);
      const getState = store.getState.bind(store);

      const chain = middlewares.map(middleware => middleware({dispatch, getState}));

      store.dispatch = compose(...chain)(dispatch);
  
      return store;
  }
}