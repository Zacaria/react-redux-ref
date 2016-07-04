import fetch from 'isomorphic-fetch'
import * as  ACTIONS  from '../actionTypes/index.js'

function handleResponse(response) {
    if (response.status == 200) {
        return response.json()
    }
    throw new Error(formatErrorMessage(response))
}

function handlePostResponse(response) {
    if (response.status == 200) {
        return;
    }
    throw new Error(formatErrorMessage(response))
}


function formatErrorMessage(res) {
    return `[${res.status}]: ${res.statusText} (${res.url})`
}

// Error action that is dispatched on failed fetch requests
function errorAction(error) {
    return {
        type: ACTIONS.LOAD_PERSON_FAILURE,
        error: true,
        errorMessage: error.message
    }
}

function errorLogin(error) {
    return {
        type: ACTIONS.LOGIN_FAILURE,
        error: true,
        errorMessage: error.message
    }
}

// Generic fetchDispatch utility that dispatches 3 actions:
//  Request, Receive and Error
// @param {object} opts:
//  {
//    url: {string} - url to request
//    types: {
//      request: {string} - constant when fetch begins a request,
//      receive: {string} - constant when fetch has successfully received a request
//    },
//    onReceived: {func(data)} - function to invoke when request has succeeded.
//      It must return a object associated with a successful fetch action.
//      First parameter is the json response. By default, data is return in the object
//      Default success action: {type: opts.types.receive, data: data}
//  }
export function fetchDispatch(opts, us, pw) {
    return (dispatch) => {
        dispatch({type: opts.types.request})
        var password = btoa(pw);
        return fetch(opts.url, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                "Access-Control-Allow-Origin": "*",
                "username": us,
                "password": password
            })
        })
            .then(handleResponse)
            .then((data) => { // Dispatch the recevied action with type and data
                const obj = opts.onReceived ? opts.onReceived(data) : {data}
                return dispatch(Object.assign({type: opts.types.receive}, obj))
            }).catch((error) => dispatch(errorAction(error)))
    }
}

export function fetchLogin(opts, us, pw) {
    console.log(us + pw);
    return (dispatch) => {
        dispatch({type: opts.types.request})
        var password = btoa(pw);
        return fetch(opts.url, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"

            }),
            body: JSON.stringify({
                "username": us,
                "password": password
            })
        })
            .then(handlePostResponse)
            .then(() => {
                const obj = {username: us, password: pw, isLogged: true}
                return dispatch(Object.assign({type: opts.types.receive}, obj))
            }).catch((error) => dispatch(errorLogin(error)))
    }
}

