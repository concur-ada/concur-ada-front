import React from 'react';
import {Link} from 'react-router-dom';

import {useSelector} from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import './Home.css';


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

            {name &&
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg="3"><Alert variant='success'>
                        You have {user.badges} Badges!
                    </Alert></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="3"><Link to='/people'>Configure People </Link></Col>
                </Row>
            </Container>

            }
        </div>
    );
};

export default Home;