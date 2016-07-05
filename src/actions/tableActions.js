import * as actionTypes from '../actionTypes'
import {fetchDispatch} from './fetchUtils'
import * as constants from '../constants'

const apiProps = {
    url: constants.URL_PERSON,
    types: {
        request: actionTypes.LOAD_PERSON,
        receive: actionTypes.LOAD_PERSON_SUCCESS
    }
}

function shouldFetchData({table}) {
    return (!table.data || !table.isFetching)
}

function fetchData(us, pw) {
    return (dispatch, getState) => {
        if (shouldFetchData(getState())) {
            return dispatch(fetchDispatch(apiProps, us, pw))
        }
    }
}

function filterBy(filterString) {
    return {
        type: actionTypes.FILTER_PERSON,
        filterString
    }
}

function sortBy(sortKey) {
    return {
        type: actionTypes.SORT_PERSON,
        sortKey
    }
}

export default {fetchData, filterBy, sortBy}


