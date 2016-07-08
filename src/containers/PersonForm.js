import React from 'react';
import {connect} from 'react-redux';
import HeaderMenuCont from '../containers/HeaderMenuCont';
import {addPerson} from '../actions';


/**
 * Created by chjourdain on 07/07/16.
 */

class PersonForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let civilite;
        let nom;
        let prenom;
        let matricule;
        let lieSecuAdmin = false;
        let qualite;
        let societeId;
        return (
            <div className="wrapper">
                <HeaderMenuCont/>
                <aside className="main-sidebar">
                    <section className="sidebar">
                        <ul className="sidebar-nav">
                            <li className="sidebar-brand">Factures</li>
                        </ul>
                    </section>
                </aside>
                <section className="content">
                    <div>
                        <form
                            onSubmit={e => {
          e.preventDefault();
          this
            .props
            .dispatch(addPerson(this.props.username, this.props.password,
            {
                "civilite": civilite.value,
                "nom": nom.value,
                "prenom": prenom.value,
                "matricule": matricule.value,
                "lieSecuAdmin": lieSecuAdmin,
                "qualite": qualite.value,

                'contact': {},
                'adresseCorrespondance': {},
'adresseResidence': {},
                 "societe": {
                    'id': societeId.value,
                    'nom': 'test',
                    'entree': '29/03/1992'
                }
            }));
        }}>
                            <div className="form-group">
                                <label>Civilité</label>
                                <select className="form-control" ref={node => { civilite = node }}>
                                    <option value="">Sélectionner une civilité</option>
                                    <option value="M">M</option>
                                    <option value="Mme">Mme</option>
                                    <option value="Mlle">Mlle</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Nom</label>
                                <input className="form-control" ref={node => { nom = node }}/>
                            </div>
                            <div className="form-group">
                                <label>Prénom</label>
                                <input className="form-control" ref={node => { prenom = node }}/>
                            </div>

                            <div className="form-group">
                                <label>Société</label>
                                <select className="form-control" ref={node => { societeId = node }}>
                                    <option value="">Sélectionner une société</option>
                                    <option value="1">eBusiness Information</option>
                                    <option value="2">Altendis</option>
                                </select></div>

                            <div className="form-group">
                                <label>Matricule</label>
                                <input className="form-control" ref={node => { matricule = node }}/>
                            </div>

                            <div className="form-group">
                                <label>lieSecuAdmin</label>

                                <input type="checkbox"
                                       defaultChecked={lieSecuAdmin}
                                       onChange={() => (lieSecuAdmin= !lieSecuAdmin)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Poste</label>
                                <input className="form-control" ref={node => { qualite = node }}/>
                            </div>

                            <button className="btn btn-primary" type="submit">
                                Ajouter
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        username: state.login.username,
        password: state.login.password
    }
};

PersonForm = connect(mapStateToProps)(PersonForm);
export default PersonForm;