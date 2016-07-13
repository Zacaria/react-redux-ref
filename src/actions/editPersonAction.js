import * as actionTypes from '../actionTypes'
import {fetchDispatch} from './fetchUtils'
import * as constants from '../constants'
/**
 * Created by chjourdain on 12/07/16.
 */

const apiFetchPersonProps = (id) => ({
    url: constants.URL_PERSON+'/'+id,
    types: {
        request: actionTypes.LOAD_PERSON_DATA,
        receive: actionTypes.LOAD_PERSON_DATA_SUCCESS,
        error: actionTypes.LOAD_PERSON_DATA_FAILURE
    }
});

export const loadPersonData = (id, us, pw) => (dispatch) => {
    return dispatch(fetchDispatch(apiFetchPersonProps(id), us, pw))
};
