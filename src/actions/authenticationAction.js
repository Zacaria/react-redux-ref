import * as actionTypes from '../actionTypes'
import { fetchLogin} from './fetchUtils'
import * as constants from '../constants'
import {  browserHistory } from 'react-router'

/**
 * Created by chjourdain on 05/07/16.
 */

const apiLogProps = {
    url: constants.URL_LOGIN,
    types: {
        request: actionTypes.LOGIN,
        receive: actionTypes.LOGIN_SUCCESS
    }
}

function login(us, pw) {
    return (dispatch) => {
        return dispatch(fetchLogin(apiLogProps, us, pw))
    }
}

function logout(){
    browserHistory.push('/login')
    return {
        type: actionTypes.LOGOUT,

    }
}
export default {login, logout}
