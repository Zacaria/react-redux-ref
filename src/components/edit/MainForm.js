import React from 'react';
import {addPerson} from '../../actions';
import Form from '../Form/Form';
import Input from '../Form/Input';

/**
 * Created by chjourdain on 12/07/16.
 */

export default class MainForm extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-lg-3"/>
                <div className="col-lg-6">
                    <Form
                        onSubmit={values => {
                                                values.societe={
                                        'id': values.societeid,
                                        'nom': 'test',
                                        'entree': '29/03/1992'
                                    };
                                    values.contact = {};
                                    delete values['societeid'];
                                    values.adresseCorrespondance= {};
                                    values.adresseResidence= {};
                                    console.log('edit values :',values)
                              /*this
                                .props
                                .dispatch(addPerson(this.props.username, this.props.password, values));*/
                            }}>
                        <Input type="select"
                               label="Civilité"
                               name="civilite"
                               defaultValue={this.props.personData.civilite}
                        >
                            <option value="">Sélectionner une civilité</option>
                            <option value="M">M</option>
                            <option value="Mme">Mme</option>
                            <option value="Mlle">Mlle</option>
                        </Input>


                        <Input
                            label="Nom"
                            name="nom"
                            validation={["require"]}
                            defaultValue={this.props.personData.nom}
                        />

                        <Input
                            label="Prenom"
                            name="prenom"
                            validation={["require"]}
                            defaultValue={this.props.personData.prenom}
                        />

                        <Input
                            type="select"
                            className="form-control"
                            name="societeid"
                            label="Société"
                            defaultValue={this.props.personData.societe.id}

                        >
                            <option value="">Sélectionner une société</option>
                            {  Object.keys(this.props.listSociete).map(
                                (id) => {
                                    return (<option value={id}>{this.props.listSociete[id]}</option>)
                                })}

                        </Input>

                        <Input
                            label="Matricule"
                            name="matricule"
                            validation={["require"]}
                            defaultValue={this.props.personData.matricule}

                        />

                        <Input
                            label="lieSecuAdmin"
                            type="checkbox"
                            name="lieSecuAdmin"
                            validation={[]}
                            defaultChecked={this.props.personData.lieSecuAdmin}
                        />

                        <Input
                            label="Poste"
                            name="qualite"
                            validation={[]}
                            defaultValue={this.props.personData.qualite}

                        />
                        <button className="btn btn-primary" type="submit">
                            Editer
                        </button>
                    </Form>
                </div>
            </div>
        )
    }
}