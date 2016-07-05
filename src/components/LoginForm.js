/**
 * Created by excilys on 04/07/16.
 */
import React from 'react'
import {IndexLink, Link} from 'react-router'
let inputUsername;
let inputPw;

class LoginForm extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-8 col-xs-offset-1 box">
                        <form className="form-horizontal"
                              onSubmit={e => {
        e.preventDefault();
        if (!inputUsername.value.trim())
          return;
        this.props.login(inputUsername.value,inputPw.value)
      }}>


                            <div className="form-group">
                                <label>Username</label>
                                <input className="form-control" ref={node => {
          inputUsername = node
        }} placeholder="Username" value="oduvoid"/></div>

                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" ref={node => {
          inputPw = node
        }} placeholder="Mot de passe" value="oduvoid"/></div>
                            <div className="actions pull-right">

                                <input className="btn btn-default" type="submit" value="Connexion"/></div>


                        </form>

                    </div>
                </div>
            </div>);
    }
}


export default LoginForm
