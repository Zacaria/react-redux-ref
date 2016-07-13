import React from 'react';
import {connect} from 'react-redux';
import HeaderMenuCont from '../containers/HeaderMenuCont';
import SideMenu from '../components/SideMenu'
import {addPerson} from '../actions';
import Form from '../components/Form/Form';
import Input from '../components/Form/Input';
import * as actions from '../actions'

/**
 * Created by chjourdain on 07/07/16.
 */

class PersonForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
            this.props.fetchSociete(this.props.username, this.props.password)
    }

    render() {
        console.log('in render PersonForm')
        return (
            <div className="wrapper">
                <HeaderMenuCont/>
                <SideMenu />
                <section className="content">
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
                              this
                                .props
                                .dispatch(addPerson(this.props.username, this.props.password, values));
                            }}>
                                <Input type="select"
                                       label="Civilité"
                                       name="civilite"
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
                                />

                                <Input
                                    label="Prenom"
                                    name="prenom"
                                    validation={["require"]}
                                />

                                <Input
                                    type="select"
                                    className="form-control"
                                    name="societeid"
                                    label="Société"
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
                                />

                                <Input
                                    label="lieSecuAdmin"
                                    type="checkbox"
                                    name="lieSecuAdmin"
                                    validation={[]}
                                />

                                <Input
                                    label="Poste"
                                    name="qualite"
                                    validation={[]}
                                />
                                <button className="btn btn-primary" type="submit">
                                    Ajouter
                                </button>
                            </Form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        username: state.login.username,
        password: state.login.password,
        listSociete: state.add.listSociete
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSociete: (us, pw) => {
            dispatch(actions.listSociete(us, pw))
        }
    }
};


PersonForm = connect(mapStateToProps, mapDispatchToProps)(PersonForm);
export default PersonForm;