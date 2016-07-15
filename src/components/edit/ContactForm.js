import React from 'react';
import Form from '../Form/Form';
import Input from '../Form/Input';

/**
 * Created by chjourdain on 15/07/16.
 */

export default class ContactForm extends React.Component {

    render() {
        return (
            <div>
                {()=> {
                    if (this.props.Edited === this.props.propKey) return (<span className="alert alert-success">Edité</span>)
                }}
                <Form
                    onSubmit={values => {
                             console.log(values);
                             this
                                .props
                                .editContact(this.props.username, this.props.password,this.props.personData ,values);
                            }}>

                    <div className="row">
                        <div className="col-sm-6">
                            <Input
                                label="Téléphone Fixe"
                                name="telFixe"
                                validation={[]}
                                defaultValue={this.props.contactData.telFixe}
                            />
                        </div>
                        <div className="col-sm-6">
                            <Input
                                label="Téléphone portable"
                                name="telPort"
                                validation={[]}
                                defaultValue={this.props.contactData.telPort}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <Input
                                label="Mail"
                                name="mail"
                                validation={[]}
                                defaultValue={this.props.contactData.mail}
                            />
                        </div>
                        <div className="col-sm-6">
                            <Input
                                label="Fax"
                                name="fax"
                                validation={[]}
                                defaultValue={this.props.contactData.fax}
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit" disabled={this.props.contactProcessing}>
                        Editer
                    </button>
                    {(this.props.Edited === this.props.propKey) ? <span className="alert alert-success"> Edité</span> : ""}
                    {(this.props.Error.key === this.props.propKey) ?
                        <span className="alert alert-danger"> {this.props.Error.msg}</span> : ""}
                </Form>
            </div>
        )
    }
}
