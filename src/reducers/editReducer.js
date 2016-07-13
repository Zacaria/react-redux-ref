import * as actionTypes from '../actionTypes'
import  {initialAppState} from '../constants'
/**
 * Created by chjourdain on 12/07/16.
 */
function handleEditActions (state, action) {

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
            return  {
                isFetchingData: false
            };
        default:
            return state;
    }
}

function editReducer (state = {}, action) {
    return Object.assign({}, state, handleEditActions(state, action))
}

export default editReducer
