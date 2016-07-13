import * as actionTypes from '../actionTypes'
import {fetchAdd, fetchDispatch} from './fetchUtils'
import * as constants from '../constants'
/**
 * Created by chjourdain on 07/07/16.
 */

const apiAddProps = {
    url: constants.URL_PERSON,
    types: {
        request: actionTypes.ADD_PERSON,
        receive: actionTypes.ADD_PERSON_SUCCESS,
        error: actionTypes.ADD_PERSON_FAILURE
    }
}

const apiSocieteProps = {
    url: constants.URL_SOCIETE,
    types: {
        request: actionTypes.FETCH_SOCIETE,
        receive: actionTypes.FETCH_SOCIETE_SUCCESS,
        error: actionTypes.FETCH_SOCIETE_FAILURE
    }
}

export const addPerson = (us, pw, person) => (dispatch) => {
    return dispatch(fetchAdd(apiAddProps, us, pw, person))
};


export const listSociete = (us, pw) => (dispatch) => {
    return dispatch(fetchDispatch(apiSocieteProps, us, pw))
};
