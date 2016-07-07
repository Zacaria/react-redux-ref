/**
 * Created by excilys on 04/07/16.
 */
import React from 'react';
import PersonPage from '../containers/PersonPage.js';
import HeaderMenuCont from '../containers/HeaderMenuCont';
import {Link} from 'react-router';

class PersonRoute extends React.Component {


    render() {
        return (
            <div className="wrapper">
                <HeaderMenuCont/>
                <aside className="main-sidebar">
                    <section className="sidebar">
                        <ul className="sidebar-nav">
                            <li className="sidebar-brand">Personne</li>
                            <li><Link to='/add'>Ajout </Link></li>
                            <li><Link to='/person'>Liste </Link></li>
                        </ul>
                    </section>
                </aside>
                <PersonPage/>
            </div>)
    }


}

export default PersonRoute
