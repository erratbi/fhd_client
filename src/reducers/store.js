import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './index';

const middleware = composeWithDevTools(thunk);

const store = createStore(rootReducer, middleware);

export default store;
