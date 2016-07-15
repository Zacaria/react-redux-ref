import * as actionTypes from '../actionTypes'
import {fetchDispatch, fetchWithData} from './fetchUtils'
import * as constants from '../constants'
/**
 * Created by chjourdain on 12/07/16.
 */

const apiFetchPersonProps = (id) => ({
    url: constants.URL_PERSON + '/' + id,
    types: {
        request: actionTypes.LOAD_PERSON_DATA,
        receive: actionTypes.LOAD_PERSON_DATA_SUCCESS,
        error: actionTypes.LOAD_PERSON_DATA_FAILURE
    }
});

const apiEditPersonProps = {
    url: constants.URL_PERSON,
    method: 'PUT',
    types: {
        request: actionTypes.EDIT_PERSON,
        receive: actionTypes.EDIT_PERSON_SUCCESS,
        error: actionTypes.EDIT_PERSON_FAILURE
    },
    redirectOnSuccess: false
};

const AddressCProps = {
    url: constants.URL_ADDRESS_C,
    method: 'PUT',
    types: {
        request: actionTypes.EDIT_ADDRESS_C,
        receive: actionTypes.EDIT_ADDRESS_C_SUCCESS,
        error: actionTypes.EDIT_ADDRESS_C_FAILURE
    },
    redirectOnSuccess: false
};

const AddressHProps = {
    url: constants.URL_ADDRESS_H,
    method: 'PUT',
    types: {
        request: actionTypes.EDIT_ADDRESS_H,
        receive: actionTypes.EDIT_ADDRESS_H_SUCCESS,
        error: actionTypes.EDIT_ADDRESS_H_FAILURE
    },
    redirectOnSuccess: false
};

const contactProps = {
    url: constants.URL_CONTACT,
    method: 'PUT',
    types: {
        request: actionTypes.EDIT_CONTACT,
        receive: actionTypes.EDIT_CONTACT_SUCCESS,
        error: actionTypes.EDIT_CONTACT_FAILURE
    },
    redirectOnSuccess: false
};

export const loadPersonData = (id, us, pw) => (dispatch) => {
    return dispatch(fetchDispatch(apiFetchPersonProps(id), us, pw))
};

export const editPerson = (us, pw, person) => (dispatch) => {
    return dispatch(fetchWithData(apiEditPersonProps, us, pw, person))
};

export const editAddress = (us, pw, person, adress, char) => (dispatch) => {
    let props;
    if (char === 'C') {
        props = AddressCProps;
        person.adresseCorrespondance = adress;
    }
    else if (char === 'H') {
        props = AddressHProps;
        person.adresseResidence = adress;
    }
    return dispatch(fetchWithData(props, us, pw, person))

};


export const editContact = (us, pw, person,contact) => (dispatch) => {
    person.contact = contact;
    return dispatch(fetchWithData(contactProps, us, pw, person));
};
