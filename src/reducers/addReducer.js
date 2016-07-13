import * as actionTypes from '../actionTypes'
import  {initialAppState} from '../constants'
/**
 * Created by chjourdain on 07/07/16.
 */

function handleLoginActions (state, action) {

    switch (action.type) {
     
        case actionTypes.FETCH_SOCIETE:
            return {isFetchingSociete: true}
        case actionTypes.FETCH_SOCIETE_SUCCESS:
            return {
                listSociete: action.response,
                isFetchingSociete: false
            };
        case actionTypes.FETCH_SOCIETE_FAILURE:
            return {isFetchingSociete: false}
        default:
            return state.add
    }
}

function loggingReducer (state = {}, action) {
    return Object.assign({}, state, handleLoginActions(state, action))
}

export default loggingReducer
