import React, {useRef, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ShellBar} from '@ui5/webcomponents-react/lib/ShellBar';
import {Avatar} from '@ui5/webcomponents-react/lib/Avatar';
import '@ui5/webcomponents-icons/dist/customer';
import '@ui5/webcomponents-icons/dist/nav-back';

import {loginAction} from '../services/auth';
import Login from './Login';
import {Link, useHistory } from 'react-router-dom';

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

    const history = useHistory();
    useEffect(() => {
        refLoginBtn.current.addEventListener('click', () => {
            if (!refUserName.current.value) {
                return;
            }
            //populate redux store with the new user info
            dispatch(loginAction(refUserName.current.value));
            //redirect to landing page after a login
            if(refUserName.current.value==='tim'){
                history.push('/invite');

            }else{
            history.push('/landing');
            }
            refLoginDialog.current.close();
        });
    }, [dispatch, history]);

    useEffect(() => {
        refCancelBtn.current.addEventListener('click', () => {
            refLoginDialog.current.close();
        });
    }, []);

    return (
        <div>
            <ShellBar
                className=""
                logo={<img slot='logo' alt='logo' src='images/sap-concur.png'/>}
                onLogoClick={function noRefCheck() {
                }}
                onProfileClick={handleProfileClick}
                primaryTitle="ADA"
                profile={<Avatar icon='customer'/>}
                startButton={<Link slot='startButton' to='/landing'>
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