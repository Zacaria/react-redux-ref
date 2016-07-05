import React from 'react'
import LoginForm from '../components/LoginForm.js'
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
        login: (us, pw) => {
            dispatch(authentification.login(us, pw))
        }
    }
}


//bindActionCreators(actions, dispatch)


const LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginForm)
export default  LoginPage
