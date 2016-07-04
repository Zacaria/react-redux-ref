/**
 * Created by excilys on 01/07/16.
 */
import React from 'react'
import HeaderMenu from '../components/HeaderMenu.js'
import {connect} from 'react-redux'
import {tableActions} from '../actions/index.js'


const mapStateToProps = (state) => {
    return {
        isLogged: state.login.isLogged,
        isLogging: state.login.isLogging,
        password: state.login.password,
        username: state.login.username
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (us, pw) => {
            dispatch(tableActions.login(us, pw))
        }
    }
}


//bindActionCreators(actions, dispatch)


const HeaderMenuCont = connect(mapStateToProps, mapDispatchToProps)(HeaderMenu)
export default HeaderMenuCont
