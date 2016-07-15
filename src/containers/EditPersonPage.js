import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import MainForm from '../components/edit/MainForm';
import {BaseCollapse, Collapse, AltCollapse} from 'pui-react-collapse';
import HeaderMenuCont from '../containers/HeaderMenuCont';
import SideMenu from'../components/SideMenu';
import * as actions from '../actions';
import AdressForm from '../components/edit/AdressForm'
import ContactForm from '../components/edit/ContactForm'

/**
 * Created by chjourdain on 12/07/16.
 */

class EditPersonPage extends React.Component {

    componentDidMount() {
        this.props.fetchSociete(this.props.username, this.props.password);
        this.props.fetchPerson(this.props.id, this.props.username, this.props.password);
    }

    renderDetail() {
        if (!this.props.isFetchingData && !this.props.isFetchingSociete && typeof(this.props.personData) !== 'undefined' && typeof(this.props.personData.societe) !== 'undefined') {
            return (
                <MainForm
                    personData={this.props.personData}
                    listSociete={this.props.listSociete}
                    editPerson={this.props.editPerson}
                    Edited={this.props.Edited}
                    Error={this.props.Error}
                    username={this.props.username}
                    password={this.props.password}
                    id={this.props.id}
                    Processing={this.props.Processing}
                    propKey="Details"
                />
            )
        }
    }

    renderContact() {
        if (!this.props.isFetchingData && !this.props.isFetchingSociete && typeof(this.props.personData) !== 'undefined' && typeof(this.props.personData.societe) !== 'undefined') {
            return (
                <ContactForm
                    personData={this.props.personData}
                    editContact={this.props.editContact}
                    Edited={this.props.Edited}
                    Error={this.props.Error}
                    username={this.props.username}
                    password={this.props.password}
                    id={this.props.id}
                    Processing={this.props.Processing}
                    propKey="Contact"
                    contactData={this.props.personData.contact}
                />
            )
        }
    }

    renderAdress(char) {
        if (!this.props.isFetchingData && !this.props.isFetchingSociete && typeof(this.props.personData) !== 'undefined' && typeof(this.props.personData.societe) !== 'undefined') {
            console.log('render de address, this.props.persondate : ', this.props.personData);
            let AddressData;
            let editAddress;
            let propKey;

            if (char === 'C') {
                AddressData = this.props.personData.adresseCorrespondance;
                editAddress = this.props.editAddressC;
                propKey = "C"
            }
            else if (char === 'H') {
                AddressData = this.props.personData.adresseResidence;
                editAddress = this.props.editAddressH;
                propKey = "H"
            }
            return (
                <AdressForm
                    addressData={AddressData}
                    editAdress={editAddress}
                    Edited={this.props.Edited}
                    Error={this.props.Error}
                    Processing={this.props.Processing}
                    username={this.props.username}
                    password={this.props.password}
                    id={this.props.id}
                    personData={this.props.personData}
                    propKey={propKey}
                />
            )
        }
    }

    render() {
        console.log('in render of edit page ')
        return (
            <div className="wrapper">
                <HeaderMenuCont/>
                <SideMenu />
                <section className="content">
                    <div className="row">
                        <div className="col-lg-6">
                            <Collapse header="Détails" className="panel panel-default">
                                {this.renderDetail()}
                            </Collapse>
                        </div>
                        <div className="col-lg-6">
                            <Collapse header="Contact" defaultExpanded className="panel panel-default">
                                {this.renderContact()}
                            </Collapse>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <Collapse header="Adresse de Correspondance" defaultExpanded
                                      className="panel panel-default">
                                {this.renderAdress('C')}
                            </Collapse>
                        </div>
                        <div className="col-lg-6">
                            <Collapse header="Adresse de Résidence" defaultExpanded
                                      className="panel panel-default">
                                {this.renderAdress('H')}
                            </Collapse>
                        </div>
                    </div>


                </section>
            </div>);
    }
}

const mapStateToProps = (state, {params}) => {
    const id = params.id || '0';
    return {
        id,
        username: state.login.username,
        password: state.login.password,
        listSociete: state.add.listSociete,
        isFetchingData: state.edit.isFetchingData,
        personData: state.edit.personData,
        isFetchingSociete: state.add.isFetchingSociete,

        Edited: state.edit.Edited,
        Error: state.edit.Error,
        Processing: state.edit.Processing

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPerson: (id, us, pw) => {
            dispatch(actions.loadPersonData(id, us, pw))
        },
        fetchSociete: (us, pw) => {
            dispatch(actions.listSociete(us, pw))
        },
        editPerson: (us, pw, person) => {
            dispatch(actions.editPerson(us, pw, person))
        },
        editAddressC: (us, pw, person, address) => {
            dispatch(actions.editAddress(us, pw, person, address, 'C'))
        },
        editAddressH: (us, pw, person, address) => {
            dispatch(actions.editAddress(us, pw, person, address, 'H'))
        },
        editContact: (us, pw, person, contact) => {
            dispatch(actions.editContact(us, pw, person, contact))
        }
    }
};
export default EditPersonPage =
//Give access to router params into mapStateToProps
    withRouter(
// Subscribe to the store
        connect(mapStateToProps, mapDispatchToProps)(EditPersonPage));
