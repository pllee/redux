const INIT_ACTION = {type: '@@redux/INIT'}

export default class Store {
  constructor({ preloadedState , reducer }) {
    this.state = preloadedState;
    this.listeners = [];

    this.reducer = reducer;
    // This actually sets up the store's default state
    this.dispatch(INIT_ACTION);
  }

  getState() {
    return this.state;
  }

  /**
   * Call the one and only reducer with the current state and passed in action.  The state returned by
   * the reducer will be the current state.
   */
  dispatch(action) {
    const nextState = this.reducer(this.state, action);
    this.state = nextState;
    this.listeners.forEach(listener => listener());

    return action;
  }

  subscribe(listener) {
    this.listeners.push(listener);
    // Return a function that removes the listener
    return () => {
        const listenerIndex = this.listeners.indexOf(listener);
        if(listenerIndex > -1) {
            this.listeners.splice(listenerIndex, 1);
        }  
    }
  }

  replaceReducer(reducer) {
      this.reducer = reducer;
  }
}