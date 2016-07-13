import fetch from 'isomorphic-fetch';
import * as ACTIONS from '../actionTypes/index.js';
import {browserHistory} from 'react-router';

function formatErrorMessage(res) {
    return '[${res.status}]: ${res.statusText} (${res.url})';
}

function handleReturnResponse(response) {
    if (response.status === 200) {
        return response.json();
    }
    throw Error(formatErrorMessage(response))
}

function handleResponse(response) {
    if (response.status === 200) {
        return;
    }
    throw Error(formatErrorMessage(response))
}



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
            .then(handleReturnResponse)
            .then((response) => { // Dispatch the recevied action with type and data
                    //const obj = opts.onReceived ? opts.onReceived(data) : {data}
                    return dispatch({
                        type: opts.types.receive,
                        response: response
                    });
                },
                error => {
                    dispatch({
                        type: opts.types.error,
                        error: error.message || 'Default error'
                    });
                });
    };
}

export function fetchLogin(opts, us, pw) {
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
            .then(handleResponse)
            .then(() => {
                    const obj = {username: us, password: pw, isLogged: true};
                    dispatch(Object.assign({type: opts.types.receive}, obj));
                    browserHistory.push('/person');
                },
                error => {
                    dispatch({
                        type: ACTIONS.LOGIN_FAILURE,
                        error: error.message || 'Default error'
                    });
                });
    };
}

export function fetchAdd(opts, us, pw, person) {
    return (dispatch) => {
        dispatch({type: opts.types.request})
        var password = btoa(pw);
        return fetch(opts.url, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "username": us,
                "password": password

            }),
            body: JSON.stringify(person)
        })
            .then(handleResponse)
            .then(() => {
                    const obj = {username: us, password: pw, isLogged: true};
                    dispatch(Object.assign({type: opts.types.receive}, obj));
                    browserHistory.push('/person');
                },
                error => {
                    dispatch({
                        type: ACTIONS.LOGIN_FAILURE,
                        error: error.message || 'Default error'
                    });
                });
    };
}