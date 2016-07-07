/**
 * Created by excilys on 29/06/16.
 */
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import table from './tableReducer.js'
import login from './loginReducer'

const reducers = combineReducers({
    table, login,
    routing: routerReducer
});
export default reducers
