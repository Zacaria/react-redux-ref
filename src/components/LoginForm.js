/**
 * Created by excilys on 04/07/16.
 */
import React from 'react'
import { IndexLink, Link } from 'react-router'
let inputUsername;
let inputPw;

class LoginForm extends React.Component {

    render() {
        return (
            <div>
                <form
                    onSubmit={e => {
        e.preventDefault();
        if (!inputUsername.value.trim())
          return;
        this.props.login(inputUsername.value,inputPw.value)
      }}>
                    <input ref={node => {
          inputUsername = node
        }} placeholder="Username"/>
                    <input ref={node => {
          inputPw = node
        }} placeholder="Mot de passe"/>
                    <button className="btn btn-default" type="submit">
                        Connexion
                    </button>
                </form>
                <Link to='/person' >
                    Counter
                </Link>
            </div>);
    }
}


export default LoginForm
