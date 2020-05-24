import { createStore } from 'redux';
import reducers from './reducers';

const makeStore = () => {
    return createStore(reducers);
};

const store = makeStore();
window.store = store;

export default store;
