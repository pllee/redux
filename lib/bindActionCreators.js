export default (actionCreators, dispatch) => {
    let boundActionCreators = {};

    if(typeof actionCreators === 'function') {
        return (...args) => dispatch(actionCreators(...args));
    }

    for(let key in actionCreators) {
        boundActionCreators[key] = (...args) => dispatch(actionCreators[key](...args));
    }

    return boundActionCreators;
}