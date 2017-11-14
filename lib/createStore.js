import Store from './Store';

export default function createStore(reducer, preloadedState, enhancer) {
    if(enhancer) {
        const storeEnhancer = enhancer(createStore);
        return storeEnhancer(reducer, preloadedState);
    }
    return new Store({reducer, preloadedState});
}    