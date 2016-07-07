import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {initialAppState} from '../constants'
import { browserHistory } from 'react-router'

const configureStore = () => {
  const middlewares = [thunk];//, routerMiddleware(browserHistory)];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  return createStore(reducers, initialAppState, applyMiddleware(...middlewares));
};

export default configureStore;
