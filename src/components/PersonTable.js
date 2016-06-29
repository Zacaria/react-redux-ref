import React from 'react'
import { Table, Column, Cell } from 'fixed-data-table'
import ResponsiveTableWrapper from './ResponsiveTableWrapper/ResponsiveTableWrapper.js'

// Stateless cell components for Table component

var columns = [{key: "id", label: "Id"},
  {key: "nom", label: "Nom"},
  {key: "prenom", label: "Prénom"},
  {key: "matricule", label: "Matricule"},
  {key: "qualite", label: "Qualité"},
  {key: "numTelFix", label: "Num. tél. fixe"},
  {key: "numTelPort", label: "Num. tél. port."},
  {key: "nomSociete", label: "Société"},
  {key: "dateEntree", label: "Date d\'entrée"},
  {key: "dateSortie", label: "Date de sortie"}];

function SortHeaderCell ({children, columnKey, ...props}) {
  const clickFunc = () => props.sortBy(columnKey);

  return (
    <Cell {...props}>
      <a onClick={clickFunc}>
        {children}
      </a>
    </Cell>
  )
}



class PersonTable extends React.Component {
  componentWillMount () {
    this.props.fetchData()
  }

  handleFilterStringChange (e) {
    e.preventDefault();
    this.props.filterBy(e.target.value)
  }

  handleSortClick (label, key) {
    const sortFunc = () => this.props.sortBy(key);
    return <a onClick={sortFunc}>{label}</a>
  }

  doesMatch (str) {
    return (key) => (key + '').toLowerCase().indexOf(str) !== -1
  }

  filterData () {
    const {data, filterString} = this.props;
    const str = filterString.toLowerCase();
    return str !== ''
      ? data.filter((r) => Object.values(r).some(this.doesMatch(str)))
      : data
  }

  sortData () {
    const {data, sortKey, sortDesc} = this.props;
    const multiplier = sortDesc ? -1 : 1;
    data.sort((a, b) => {
      const aVal = a[sortKey] || 0;
      const bVal = b[sortKey] || 0;
      return aVal > bVal ? multiplier : (aVal < bVal ? -multiplier : 0)
    });
    return this
  }

  renderFromColumns(columns,data) {
      columns.map((columns)=> {
        return (
      <Column
        columnKey={columns.key}
    //    header={<SortHeaderCell {...this.props}> {columns.label} </SortHeaderCell>}
        cell={
        props => (
            <Cell {...props}>
              {data[0].id}
            </Cell>
          )
        //<DataCell data={data} />
        }
        flexGrow={0.5}
        width={100} />
    );}
        )
  }

  render () {
    const { isFetching, filterString } = this.props;
    console.log('in render of PersonTable');
    const data = this.sortData().filterData();
    //const data = this.props.data;
    return (

      <div>


        <input className='filter-input' value={filterString}
          onChange={::this.handleFilterStringChange}
          type='text' placeholder='Filter Rows'
          autoCorrect='off' autoCapitalize='off' spellCheck='false' />
        <br />

        {isFetching && data.length === 0 &&
          <div className='loader-box'></div>}
        {!isFetching && data.length === 0 &&
          <h3 className='center'>No Matching Results :( </h3>}

      <table>
        <thead>
        <tr>
          {  columns.map((column)=> {
              const clickFunc = () => this.props.sortBy(column.key);
              return <th><a  onClick={clickFunc}>{column.label}</a></th>})
         }
        </tr>
          </thead>
<tbody>
{ data.map((person)=> {
    return(
    <tr>
        {columns.map((column) => {
            const key = column.key;
            return(
      <td>{person[key]}</td>)
  })}
   </tr>)

})
}
</tbody>
        </table>
      </div>
    )
  }
}

PersonTable.propTypes = {
  // actions
  fetchData: React.PropTypes.func.isRequired,
  sortBy: React.PropTypes.func.isRequired,
  filterBy: React.PropTypes.func.isRequired,

  // state data
  data: React.PropTypes.array.isRequired,
  filterString: React.PropTypes.string.isRequired,
  sortKey: React.PropTypes.string.isRequired,
  sortDesc: React.PropTypes.bool.isRequired,
  isFetching: React.PropTypes.bool.isRequired
};

export default PersonTable
