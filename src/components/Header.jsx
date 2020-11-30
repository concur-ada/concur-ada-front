import React, {useRef, useEffect, useCallback} from 'react';
import {Link} from 'react-router-dom';

import '@ui5/webcomponents-fiori/dist/ShellBar';
import '@ui5/webcomponents/dist/Card';
import '@ui5/webcomponents/dist/Panel';
import '@ui5/webcomponents/dist/Avatar';
import '@ui5/webcomponents/dist/Link';
import '@ui5/webcomponents-icons/dist/customer';
import '@ui5/webcomponents-icons/dist/nav-back';

import Login from './Login';

const Header = () => {
    const refTopNavBar = useRef();
    const refLoginDialog = useRef();
    const refLoginBtn = useRef();
    const refCancelBtn = useRef();
    const loginDialog = Login(refLoginDialog, refLoginBtn, refCancelBtn);

    const handleProfileClick = useCallback(event => {
        console.log('profile clicked');
        //check state if a user is already logged in
        // then change the dialog text
        refLoginDialog.current.open(event.detail.targetRef);
    }, []);

    const handleCancel = useCallback(() => {
        refLoginDialog.current.close();
    }, []);

    const handleLogin = useCallback(() => {
        console.log('Logged in');
        //populate redux store with the new user info
        refLoginDialog.current.close();
    }, []);

    useEffect(() => {
        refLoginBtn.current.addEventListener('click', handleLogin);
    }, [handleLogin]);

    useEffect(() => {
        refCancelBtn.current.addEventListener('click', handleCancel);
    }, [handleCancel]);

    useEffect(() => {
        refTopNavBar.current.addEventListener('profile-click', handleProfileClick);
    }, [handleProfileClick]);

    return (
        <div>
        <ui5-shellbar
            id='topNavBar'
            style={{'--sapShellColor': 'black'}}
            primary-title='PRODUCTS'
            ref={refTopNavBar}
        >
            <Link slot='startButton' to='/home'>
                <ui5-button icon='nav-back' design='Transparent' style={{'color':'white'}}
                            slot='startButton'/>
            </Link>
            <img slot='logo' alt='logo' src='images/sap-concur.png'/>
            <ui5-avatar slot='profile' icon='customer'/>

        </ui5-shellbar>
            {loginDialog}
        </div>
    );
};

export default Header;