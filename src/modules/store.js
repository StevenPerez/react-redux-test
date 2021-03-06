import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const reducer = combineReducers({
	...reducers
});

const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore);

export default createStoreWithMiddleware(reducer);
