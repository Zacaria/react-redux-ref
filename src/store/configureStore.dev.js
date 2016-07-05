import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer  } from 'react-router-redux'
import table from '../reducers/tableReducer.js'
import login from '../reducers/loginReducer'


let createStoreWithMiddleware;

// Configure the dev tools when in DEV mode
createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
)(createStore);

const rootReducer =  combineReducers({
  table,login,
  routing: routerReducer
})

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
