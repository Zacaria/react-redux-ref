import React from 'react'

class HeaderMenu extends React.Component {

    staticRender() {
        return (
            <div className="navbar-header">
                <button data-target=".navbar-collapse" data-toggle="collapse" className="navbar-toggle" type="button">
                    <span className="icon-bar"></span>
                </button>
                <ul id="onglet-portail">
                    <li id="onglet-accueil">
                        <a accesskey="accesskeys-tabs" href="https://maestrodev.excilys.com/maestro-portail">Maestro</a>
                    </li>
                    <li id="onglet-accueil">
                        <a accesskey="accesskeys-tabs" href="https://maestrodev.excilys.com/maestro-fdt">Maestro-FDT</a>
                    </li>
                    <li id="onglet-accueil">
                        <a accesskey="accesskeys-tabs" href="https://maestrodev.excilys.com/maestro-ndf">Maestro-NDF</a>
                    </li>
                    <li className="selected" id="onglet-accueil">
                        <a accesskey="accesskeys-tabs" href="https://maestrodev.excilys.com/maestro-ref">Maestro-Referentiel</a>
                    </li>
                    <li id="onglet-accueil">
                        <a accesskey="accesskeys-tabs" href="https://maestrodev.excilys.com/maestro-contrat">Maestro-Contrat</a>
                    </li>
                    <li id="onglet-accueil">
                        <a accesskey="accesskeys-tabs" href="https://maestrodev.excilys.com/maestro-facture">Maestro-Facture</a>
                    </li>
                    <li id="onglet-accueil">
                        <a accesskey="accesskeys-tabs"
                           href="https://maestrodev.excilys.com/maestro-cvforge">CV-Forge</a>
                    </li>
                    <li id="onglet-accueil">
                        <a accesskey="accesskeys-tabs" href="https://maestrodev.excilys.com/maestro-salaire">Maestro-Salaire</a>
                    </li>
                </ul>
            </div>
        )
    }

    dynamicRender() {
        if (this.props.username == '') {
            this.props.logout();
            return;
        }
        return (
            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a href="#" data-toggle="dropdown" role="button" className="dropdown-toggle"><i
                        className="glyphicon glyphicon-user"></i>
                        { this.props.username }</a></li>
                <li>
                    <a onClick={e => {
                        e.preventDefault();
                        this.props.logout();}}><i className="glyphicon glyphicon-lock"></i>
                        Déconnexion</a>
                </li>
            </ul>
        )

    }

    render() {
        return (
            <div className="navbar navbar-inverse navbar-static-top" id="top-nav">
                <div className="container-fluid">
                    {this.staticRender()}
                    <div className="navbar-collapse collapse">
                        {this.dynamicRender()}
                    </div>
                    {this.props.error}
                </div>
            </div>)
    }

}
export default HeaderMenu
