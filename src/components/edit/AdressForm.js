import React from 'react';
import Form from '../Form/Form';
import Input from '../Form/Input';

/**
 * Created by chjourdain on 15/07/16.
 */

export default class AdressForm extends React.Component {

    render() {
        return (
            <div>
                <Form
                    onSubmit={values => {
                             console.log(values);
                             this
                                .props
                                .editAdress(this.props.username, this.props.password,this.props.personData ,values);
                            }}>
                    <Input
                        label="Complément 1"
                        name="complementInt"
                        validation={["require"]}
                        defaultValue={this.props.addressData.complementInt}
                    />

                    <Input
                        label="Complement 2"
                        name="complementExt"
                        validation={[]}
                        defaultValue={this.props.addressData.complementExt}
                    />

                    <Input
                        label="Voie"
                        name="voie"
                        validation={["require"]}
                        defaultValue={this.props.addressData.voie}
                    />

                    <Input
                        label="Mentions"
                        name="mention"
                        validation={[]}
                        defaultValue={this.props.addressData.mention}
                    />


                    <div className="row">
                        <div className="col-sm-6">
                            <Input
                                label="Code Postal"
                                name="codePostal"
                                validation={["require"]}
                                defaultValue={this.props.addressData.codePostal}
                            />
                        </div>
                        <div className="col-sm-6">
                            <Input
                                label="Ville"
                                name="localite"
                                validation={[]}
                                defaultValue={this.props.addressData.localite}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <Input
                                label="Cedex"
                                name="cedex"
                                validation={[]}
                                defaultValue={this.props.addressData.cedex}
                            />
                        </div>
                        <div className="col-sm-6">
                            <Input
                                label="Pays"
                                name="pays"
                                validation={[]}
                                defaultValue={this.props.addressData.pays}
                            />
                        </div>
                    </div>
                    <Input
                        label="commentaires"
                        name="commentaires"
                        validation={[]}
                        defaultValue={this.props.addressData.commentaires}
                    />


                    <button className="btn btn-primary" type="submit" disabled={this.props.addressProcessing}>
                        Editer
                    </button>
                    {(this.props.Edited === this.props.propKey) ? <span className="alert alert-success"> Edité</span> : ""}
                    {(this.props.Error === this.props.propKey.key) ?
                        <span className="alert alert-danger"> {this.props.Error.msg}</span> : ""}
                </Form>
            </div>
        )
    }
}
