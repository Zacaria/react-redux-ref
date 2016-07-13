import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import MainForm from '../components/edit/MainForm';
import {BaseCollapse, Collapse, AltCollapse} from 'pui-react-collapse';
import HeaderMenuCont from '../containers/HeaderMenuCont';
import SideMenu from'../components/SideMenu';
import * as actions from '../actions';

/**
 * Created by chjourdain on 12/07/16.
 */

class EditPersonPage extends React.Component {

    componentDidMount() {
        this.props.fetchSociete(this.props.username, this.props.password)
        this.props.fetchPerson(this.props.id, this.props.username, this.props.password)
    }

    renderDetail() {
        if (!this.props.isFetchingData && !this.props.isFetchingSociete && typeof(this.props.personData.societe) != 'undefined') {
            return (
                <MainForm
                    personData={this.props.personData}
                    listSociete={this.props.listSociete}
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

                    <Collapse header="Détails" className="panel panel-default">
                        {this.renderDetail()}
                    </Collapse>

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
        isFetchingSociete: state.add.isFetchingSociete
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPerson: (id, us, pw) => {
            dispatch(actions.loadPersonData(id, us, pw))
        },
        fetchSociete: (us, pw) => {
            dispatch(actions.listSociete(us, pw))
        }
    }
};
export default EditPersonPage =
//Give access to router params into mapStateToProps
    withRouter(
// Subscribe to the store
        connect(mapStateToProps, mapDispatchToProps)(EditPersonPage));
