import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/root-reducer';

const store = createStore(rootReducer);

// saga middleware run and listen some type of actions

export default store;