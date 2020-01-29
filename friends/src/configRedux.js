import { createStore, applyMiddleware } from 'redux';
import {friendReducer} from './reducers/';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const middlewares = [thunk, logger];
const configRedux = () => createStore(friendReducer, applyMiddleware(...middlewares));

export default configRedux;