import * as actionTypes from '../actionTypes'

export function listPerson (data) {
 /* const foods = data.report.foods;

  return foods.reduce((arr, food) => {
    food.nutrients.forEach((nutrient) => {
      nutrient.food = food.name
    });
    return arr.concat(food.nutrients)

  }, [])*/

  return  Object.keys(data).map(key => data[key]);
}

function handleTableActions (state, action) {
  switch (action.type) {
    case actionTypes.LOAD_PERSON:
      return { isFetching: true };
    case actionTypes.LOAD_PERSON_SUCCESS:
      return {
        isFetching: false,
        data: action.data
      };
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
