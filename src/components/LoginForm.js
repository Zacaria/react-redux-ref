/**
 * Created by excilys on 04/07/16.
 */
import React from 'react';
import Form from './Form/Form';
import Input from './Form/Input';

class LoginForm extends React.Component {
    dynamicRender() {
        if (this.props.isLogging) {
            return (
                <div className="spinner">
                    <div className="cube1"></div>
                    <div className="cube2"></div>
                </div>
            );
        }
        if (this.props.error !== '') {
            return (<span className="error-message">{this.props.error}</span>);
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-8 col-xs-offset-2 box">

                        <fieldset>
                            <Form className="form-horizontal"
                                  onSubmit=
                                      {
                                      values => {
                                          console.log(values);
                                          this.props.login(values.username,values.password)
                                                }
                                      }
                            >

                                <Input
                                    label="Username"
                                    name="username"
                                    validation={["require"]}
                                    defaultValue="oduvoid"
                                />

                                <Input
                                    label="Password"
                                    name="password"
                                    validation={["require"]}
                                    type="password"
                                    defaultValue="oduvoid"
                                />

                                <div className="actions pull-right">
                                    <input className="btn btn-default" type="submit" value="Connexion"/></div>
                            </Form>
                        </fieldset>
                        {this.dynamicRender()}
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm