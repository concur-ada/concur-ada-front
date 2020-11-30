import React from 'react';

import '@ui5/webcomponents/dist/Dialog';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/Input';
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/Title';

const Login = (refLoginDialog, refLoginBtn, refCancelBtn) => {

    const user = 'Sam';
    let headerText = 'Login';
    if (user) {
        headerText = 'Change Login';
    }

    return (
        <ui5-dialog id='login-dialog' header-text={headerText}
                    ref={refLoginDialog}>
            <section className='login-form'>
                <div>
                    {user &&
                    <p align='center'>
                        <ui5-title level='H5'>Currently logged in as <span style={{'font-weight':'bold'}}>{user}</span></ui5-title>
                    </p>}

                    <ui5-label htmlFor='username' required>Username:</ui5-label>
                    <ui5-input id='username' placeholder='Enter Username'>></ui5-input>
                </div>
            </section>

            <div slot='footer' className='dialog-footer'>
                <div style={{'flex': '1'}}></div>
                <ui5-button design="Emphasized" ref={refLoginBtn}>Login</ui5-button>
                <ui5-button design="Transparent" ref={refCancelBtn}>Cancel</ui5-button>
            </div>
        </ui5-dialog>
    );
};

export default Login;