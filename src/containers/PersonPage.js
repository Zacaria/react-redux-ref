import React from 'react'
import PersonTable from '../components/PersonTable.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { tableActions  } from '../actions/index.js'

/*const PersonPage = (props) => {
  return (
    <div>
      <h2> Liste de personne </h2>
      <PersonTable {...props} />
    </div>
  )
}*/

const mapStateToProps = (state) => {
    console.log('state : '+state.table.toString())
    return {
        data : state.table.data,
        filterString : state.table.filterString,
        sortKey : state.table.sortKey,
        sortDesc : state.table.sortDesc,
        isFetching : state.table.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
return {
    filterBy : (filterString) => {dispatch(tableActions.filterBy(filterString))},
    sortBy : (key) => {dispatch(tableActions.sortBy(key))},
    fetchData : () => {dispatch(tableActions.fetchData())}
}}


//bindActionCreators(actions, dispatch)


const PersonPage = connect(mapStateToProps, mapDispatchToProps)(PersonTable)
export default PersonPage
