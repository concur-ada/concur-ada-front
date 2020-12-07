import React from 'react';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import './Landing.css';

const Landing = () => {

    const { user } = useSelector(state => state.user);
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
                    <hr />
                </Alert>

                {name &&
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col lg="3"><Alert variant='success'>
                                You have {user.badges} Badges!
                    </Alert></Col>
                        </Row>
                    </Container>
                }
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="hori-timeline" dir="ltr">
                                        <ul class="list-inline events">
                                            <li class="list-inline-item event-list">
                                                <div class="px-5">
                                                    <div class="event-date bg-soft-success text-success">1</div>
                                                    <h5 class="font-size-16 text-success">Get Started</h5>
                                                    <div>
                                                        <a href="#" class="btn btn-primary btn-sm ">More info</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-inline-item event-list">
                                                <div class="px-5">
                                                    <div class="event-date bg-soft-success text-success">2</div>
                                                    <h5 class="font-size-16 text-success">Configure</h5>
                                                    <div>
                                                        <a href="#" class="btn btn-primary btn-sm">More Info</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-inline-item event-list">
                                                <div class="px-5">
                                                    <div class="event-date bg-soft-success text-success">3</div>
                                                    <h5 class="font-size-16 text-success">Validate</h5>
                                                    <div>
                                                        <a href="#" class="btn btn-primary btn-sm">More Info</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-inline-item event-list">
                                                <div class="px-5">
                                                    <div class="event-date bg-soft-success text-success">4</div>
                                                    <h5 class="font-size-16 text-success">Adopt</h5>
                                                    <div>
                                                        <a href="#" class="btn btn-primary btn-sm">More Info</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-inline-item event-list">
                                                <div class="px-5">
                                                    <div class="event-date bg-soft-success text-success">5</div>
                                                    <h5 class="font-size-16 text-success">Success</h5>
                                                    <div>
                                                        <a href="#" class="btn btn-primary btn-sm">More Info</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default Landing;