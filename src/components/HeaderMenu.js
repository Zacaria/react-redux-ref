import React from 'react'

class HeaderMenu extends React.Component {


    onClickLogin() {

        alert(React.findDOMNode(this.refs.usernameInput).value);
    }


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
        if (this.props.isLogged) {
            return (
                <ul  className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a href="#" data-toggle="dropdown" role="button" className="dropdown-toggle"><i className="glyphicon glyphicon-user"></i>
                        { this.props.username }</a></li>
                <li>
                  <a href="${ctx}/j_spring_logout"><i className="glyphicon glyphicon-lock"></i>
                        Déconnexion</a>
                </li>
                </ul>
            )
        }
        let inputUsername;
        let inputPw;
        return (
            <ul  className="nav navbar-nav navbar-right">
            <li className="dropdown">

            <form
                onSubmit={e => {
        e.preventDefault();
        if (!inputUsername.value.trim())
          return;
        this.props.login(inputUsername.value,inputPw.value)
      }}>
                <input ref={node => {
          inputUsername = node
        }} placeholder="Username"/>
                <input ref={node => {
          inputPw = node
        }} placeholder="Mot de passe"/>
                <button className="btn btn-default" type="submit">
                    Connexion
                </button>
            </form>
        </li></ul>)

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
