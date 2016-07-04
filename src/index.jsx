import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore.prod.js'
import PersonPage from './containers/PersonPage.js'
import HeaderMenuCont from './containers/HeaderMenuCont'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const initialAppState = {
    table: {
        isFetching: false,
        data: [],
        filterString: '',
        sortDesc: false,
        sortKey: 'nom'
    },
    login: {
        isLogged: false,
        username:'',
        password:'',
        isLogging: false
    }

};
const store = configureStore(initialAppState)
const history = syncHistoryWithStore(browserHistory, store)
render(
    <Provider store={store}>
        <div className="wrapper">
        <HeaderMenuCont/>
            <aside className="main-sidebar">
                <section className="sidebar">

                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">Factures</li></ul>
                </section>
            </aside>

            <PersonPage/>
</div>
    </Provider>, document.getElementById('mount-point'));
