import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { initialAppState } from '../constants'
import { browserHistory } from 'react-router'
import { loadState } from './localStorage';

const configureStore = () => {
  const middlewares = [thunk];//, routerMiddleware(browserHistory)];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  const state = initialAppState;
  state.login = loadState().login;
  return createStore(reducers, state, applyMiddleware(...middlewares));
};

export default configureStore;
