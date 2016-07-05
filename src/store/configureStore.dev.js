import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer  } from 'react-router-redux'
import table from '../reducers/tableReducer.js'
import login from '../reducers/loginReducer'
import {initialAppState} from '../constants'



let createStoreWithMiddleware;

// Configure the dev tools when in DEV mode
createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
)(createStore);

const appReducer =  combineReducers({
  table,login,
  routing: routerReducer
})

//a wrapper to reset the state in case of LOGOUT
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = initialAppState
  }
  return appReducer(state, action)
}

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
