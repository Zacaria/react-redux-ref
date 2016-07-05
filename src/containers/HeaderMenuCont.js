/**
 * Created by excilys on 01/07/16.
 */
import React from 'react'
import HeaderMenu from '../components/HeaderMenu.js'
import {connect} from 'react-redux'
import {authentification} from '../actions/index.js'

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
        logout: () => {
            dispatch(authentification.logout())
        }
    }
}


//bindActionCreators(actions, dispatch)


const HeaderMenuCont = connect(mapStateToProps, mapDispatchToProps)(HeaderMenu)
export default HeaderMenuCont
