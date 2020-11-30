import React from 'react';
import Alert from 'react-bootstrap/Alert';

import './Home.css';

const Home = () => (
    <div>
        <p>
            <ui5-title>Home [Placeholder]</ui5-title>
        </p>
        <Alert variant='success'>
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
                Just an example of React Bootstrap
            </p>
            <hr/>
        </Alert>
    </div>
);

export default Home;