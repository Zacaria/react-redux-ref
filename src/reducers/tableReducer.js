import * as actionTypes from '../actionTypes'

function handleTableActions (state, action) {
  switch (action.type) {
    case actionTypes.LOAD_PERSONS:
      return {
        isFetching: true,
        error:''
      };
    case actionTypes.LOAD_PERSONS_SUCCESS:
      return {
        isFetching: false,
        data: action.response,
        error: ''
      };
    case actionTypes.LOAD_PERSONS_FAILURE:
          return {
            isFetching: false,
            error: action.error
          }
    case actionTypes.FILTER_PERSON:
      return { filterString: action.filterString.toLowerCase() };
    case actionTypes.SORT_PERSON:
      return {
        sortKey: action.sortKey,
        sortDesc: state.sortKey === action.sortKey ? !state.sortDesc : false
      };
    default:
      return state
  }
}

function tableReducer (state = {}, action) {
  return Object.assign({}, state, handleTableActions(state, action))
}

export default tableReducer
