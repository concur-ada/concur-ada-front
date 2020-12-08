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
    const badges = user && user.badges || 0;
    return (
        <div>
            <Alert variant='success'>
                <Alert.Heading>Hey, {name} nice to see you</Alert.Heading>
                <p>
                    <Alert variant='success'>
                        You have {badges} Badges!
                    </Alert>
                </p>
            </Alert>

            {name &&
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg="3"><Link to='/people'><Alert variant='success'>
                        Configure People
                    </Alert> </Link></Col>
                </Row>
            </Container>
            }
        </div>
    );
};

export default Home;