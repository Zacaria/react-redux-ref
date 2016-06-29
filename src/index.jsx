import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore.prod.js'
import PersonPage from './containers/PersonPage.js'
const initialAppState = {
    table: {
        isFetching: false,
        data: [],
        filterString: '',
        sortDesc: false,
        sortKey: 'nom'
    }};
const store = configureStore(initialAppState)

render(
    <Provider store={store}>
        <PersonPage/>

    </Provider>, document.getElementById('mount-point'));
