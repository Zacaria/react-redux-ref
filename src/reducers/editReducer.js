import * as actionTypes from '../actionTypes'
import  {initialAppState} from '../constants'
/**
 * Created by chjourdain on 12/07/16.
 */
function handleEditActions(state, action) {

    switch (action.type) {
        case actionTypes.LOAD_PERSON_DATA:
            return {
                isFetchingData: true
            };
        case actionTypes.LOAD_PERSON_DATA_SUCCESS:
            return {
                personData: action.response,
                isFetchingData: false
            };
        case actionTypes.LOAD_PERSON_DATA_FAILURE:
            return {
                isFetchingData: false
            };
        case actionTypes.EDIT_PERSON:
            return {
                Processing: true
            };
        case actionTypes.EDIT_PERSON_SUCCESS:
            return {
                Edited: 'Details',
                Error: {
                    key: "",
                    msg: ""
                },
                Processing: false
            };
        case actionTypes.EDIT_PERSON_FAILURE:
            return {
                Error: {
                    msg: action.error,
                    key: 'Details'
                },
                Processing: false
            };

        case actionTypes.EDIT_ADDRESS_C:
            return {
                Processing: true,
                Error: {
                    key: ""
                }
            };
        case actionTypes.EDIT_ADDRESS_C_SUCCESS:
            return {
                Edited: 'C',
                Error: {key: ""},
                Processing: false
            };
        case actionTypes.EDIT_ADDRESS_C_FAILURE:
            return {
                Error: {msg: action.error, key: 'C'},
                Processing: false
            };
        case actionTypes.EDIT_ADDRESS_H:
            return {
                Processing: true,
                Error: {key: ""}
            };
        case actionTypes.EDIT_ADDRESS_H_SUCCESS:
            return {
                Edited: 'H',
                Error: {key: ""},
                Processing: false
            };
        case actionTypes.EDIT_ADDRESS_H_FAILURE:
            return {
                Error: {msg: action.error, key: 'H'},
                Processing: false
            };
        case actionTypes.EDIT_CONTACT:
            return {
                Processing: true,
                Error: {key: ""}
            };
        case actionTypes.EDIT_CONTACT_SUCCESS:
            return {
                Edited: 'Contact',
                Error: {key: ""},
                Processing: false
            };
        case actionTypes.EDIT_CONTACT_FAILURE:
            return {
                Error: {msg: action.error, key: 'Contact'},
                Processing: false
            };

        case '@@router/LOCATION_CHANGE':
            return {
                personData: {},
                isFetchingData: false,
                Error: false,
                Edited: false,
                Processing: false
            };

        default:
            return state;
    }
}

function editReducer(state = {}, action) {
    return Object.assign({}, state, handleEditActions(state, action))
}

export default editReducer
