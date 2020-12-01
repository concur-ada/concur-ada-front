import React from 'react';
import Alert from 'react-bootstrap/Alert';

import './Home.css';
import {useSelector} from 'react-redux';

const Home = () => {

    const {user} = useSelector(state => state.user);
    const name = user && user.name;

    return (
        <div>
            <p>
                <ui5-title>Home [Placeholder]</ui5-title>
            </p>
            <Alert variant='success'>
                <Alert.Heading>Hey, {name} nice to see you</Alert.Heading>
                <p>
                    Just an example of React Bootstrap
                </p>
                <hr/>
            </Alert>
        </div>
    );
};

export default Home;