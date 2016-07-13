import React from 'react';
import {Link} from 'react-router';
/**
 * Created by chjourdain on 11/07/16.
 */

class SideMenu extends React.Component {

    render() {
        return ( <aside className="main-sidebar">
            <section className="sidebar">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">Personne</li>
                    <li><Link to='/add'>Ajout </Link></li>
                    <li><Link to='/person'>Liste </Link></li>
                </ul>
            </section>
        </aside>);
    }
}
export default SideMenu;