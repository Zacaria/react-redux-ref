/**
 * Created by excilys on 04/07/16.
 */
import React from 'react';
import PersonPage from '../containers/PersonPage.js';
import HeaderMenuCont from '../containers/HeaderMenuCont';
import SideMenu from'../components/SideMenu'

class PersonRoute extends React.Component {


    render() {
        return (
            <div className="wrapper">
                <HeaderMenuCont/>
               <SideMenu />
                <PersonPage/>
            </div>)
    }


}

export default PersonRoute
