import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from './modules/auth/reducer';
import userReducer from './modules/user';
import postReducer from './modules/post';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    post: postReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;