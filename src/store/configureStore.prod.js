import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import referentielApp from '../reducers/referentielApp'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
export default function configureStore (initialState) {
  return createStoreWithMiddleware(referentielApp, initialState)
}
