import React from 'react'
import PersonTable from '../components/PersonTable.js'
import {connect} from 'react-redux'
import {tableActions, authentification} from '../actions/index.js'

const mapStateToProps = (state) => {
    return {
        data: state.table.data,
        filterString: state.table.filterString,
        sortKey: state.table.sortKey,
        sortDesc: state.table.sortDesc,
        isFetching: state.table.isFetching,
        isLogged: state.login.isLogged,
        username: state.login.username,
        password: state.login.password,
        error: state.login.error
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        filterBy: (filterString) => {
            dispatch(tableActions.filterBy(filterString))
        },
        sortBy: (key) => {
            dispatch(tableActions.sortBy(key))
        },
        fetchData: (us, pw) => {
            dispatch(tableActions.fetchData(us, pw))
        },
        logout: () => {
            dispatch(authentification.logout())
        }
    }
};

const PersonPage = connect(mapStateToProps, mapDispatchToProps)(PersonTable)
export default PersonPage
