/**
 * Created by excilys on 04/07/16.
 */
import React from 'react'
import Form from './Form/Form'
import Input from './Form/Input'
import {IndexLink, Link} from 'react-router'
let inputUsername;
let inputPw;

class LoginForm extends React.Component {
    dynamicRender = () => {
        if (this.props.isLogging) {
            return ( <div className="spinner">
                <div className="cube1"></div>
                <div className="cube2"></div>
            </div>);
        }
        if (this.props.error !== '') {
            return ( <span className="error-message">{this.props.error}</span>);
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-8 col-xs-offset-2 box">

                        <fieldset>
          /**                  <form className="form-horizontal"
                                  onSubmit={e => {
        e.preventDefault();
        if (!inputUsername.value.trim())
          return;
        this.props.login(inputUsername.value,inputPw.value)
      }}>


                                <div className="form-group">
                                    <h1>Username</h1>
                                    <input className="form-control" ref={node => {
          inputUsername = node
        }} placeholder="Username" value="oduvoid"/></div>

                                <div className="form-group">
                                    <h2>Password</h2>
                                    <input className="form-control" ref={node => {
          inputPw = node
        }} placeholder="Mot de passe" type="password"/></div>
                                <div className="actions pull-right">

                                    <input className="btn btn-default" type="submit" value="Connexion"/></div>


                            </form>**/

                          <Form onSubmit={(values) => console.log(values)}>
                              <Input
                              label="Username"
                              name="username"
                              validation={["require"]}
                              ref="username"
                              />
                              <input className="btn btn-default"
                                     type="submit"
                                     value="Connexion"

                              />
                          </Form>



                        </fieldset>
                        {this.dynamicRender()}
                    </div>
                </div>
            </div>);
    }
}


export default LoginForm
