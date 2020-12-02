import React, {useRef, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Shellbar} from 'fundamental-react/lib/Shellbar';
import {ShellBar} from '@ui5/webcomponents-react/lib/ShellBar';
import {Avatar} from '@ui5/webcomponents-react/lib/Avatar';
import '@ui5/webcomponents-icons/dist/customer';
import '@ui5/webcomponents-icons/dist/nav-back';

import {loginAction} from '../services/auth';
import Login from './Login';
import {Link} from 'react-router-dom';

import './Header.css';

const Header = () => {
    const refUserName = useRef();
    const refLoginDialog = useRef();
    const refLoginBtn = useRef();
    const refCancelBtn = useRef();
    const {user} = useSelector(state => state.user);
    const loginDialog = Login(refLoginDialog, refLoginBtn, refCancelBtn, refUserName, user);
    const dispatch = useDispatch();

    const handleProfileClick = useCallback(event => {
        refLoginDialog.current.open(event.detail.targetRef);
    }, []);

    useEffect(() => {
        refLoginBtn.current.addEventListener('click', () => {
            //populate redux store with the new user info
            dispatch(loginAction(refUserName.current.value));
            refLoginDialog.current.close();
        });
    }, [dispatch]);

    useEffect(() => {
        refCancelBtn.current.addEventListener('click', () => {
            refLoginDialog.current.close();
        });
    }, []);

    return (
        <div>
            <Shellbar
                className="header"
                backAction={<Link to='/home'>
                </Link>}
                onProfileClick={handleProfileClick}
                logo={<img alt='SAP' src='images/sap-concur.png' />}
                productTitle='PRODUCTS'
                profile={<Avatar glyph='customer'/>}
                />



            <ShellBar
                className=""
                logo={<img slot='logo' alt='logo' src='images/sap-concur.png'/>}
                onLogoClick={function noRefCheck() {
                }}
                onProfileClick={handleProfileClick}
                primaryTitle="PRODUCTS"
                profile={<Avatar icon='customer'/>}
                startButton={<Link slot='startButton' to='/home'>
                    <ui5-button icon='nav-back' design='Transparent' style={{'color': 'white'}}
                                slot='startButton'/>
                </Link>}
                slot=""
                style={{'--sapShellColor': 'black'}}
                tooltip=""
            />
            {loginDialog}
        </div>
    );
};

export default Header;