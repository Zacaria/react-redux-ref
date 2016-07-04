/**
 * Created by excilys on 29/06/16.
 */
import { combineReducers } from 'redux'
import table from './tableReducer.js'
import login from './loginReducer'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const referentielApp = combineReducers({
    table,
    login,
    routing: routerReducer
})

export default referentielApp
