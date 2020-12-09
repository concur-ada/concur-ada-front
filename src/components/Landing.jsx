import React from 'react';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import './Landing.css';

const Landing = () => {

    const { user } = useSelector(state => state.user);
    const {project} = useSelector(state => state.project);
    const name = user && user.name;
    let start,configure,validate,adopt,success;
    let startH5,configureH5,validateH5,adoptH5,successH5;
    configure=start=validate=adopt=success='event-date bg-soft-primary text-primary';
    configureH5=startH5=validateH5=adoptH5=successH5='font-size-16 text-primary';

    const projectStages = project&&project.stages;
    if(projectStages!=null){
        if(projectStages.start.status==='pending'){
            console.log('pending');
            start='event-date bg-soft-danger text-danger';
            startH5='font-size-16 text-danger';
        }else if(projectStages.start.status==='completed'){
            console.log('completed');
            start='event-date bg-soft-success text-success';
            startH5='font-size-16 text-success';         
        }else if(projectStages.start.status==='progress'){
            console.log('completed');
            start='event-date bg-soft-warning text-warning';
            startH5='font-size-16 text-warning';         
        }
        if(projectStages.configure.status==='pending'){
            console.log('pending');
            configure='event-date bg-soft-danger text-danger';
            configureH5='font-size-16 text-danger';
        }else if(projectStages.configure.status==='completed'){
            console.log('completed');
            configure='event-date bg-soft-success text-success';
            configureH5='font-size-16 text-success';         
        }else if(projectStages.configure.status==='progress'){
            console.log('completed');
            configure='event-date bg-soft-warning text-warning';
            configureH5='font-size-16 text-warning';         
        }
        if(projectStages.validate.status==='pending'){
            console.log('pending');
            validate='event-date bg-soft-danger text-danger';
            validateH5='font-size-16 text-danger';
        }else if(projectStages.validate.status==='completed'){
            console.log('completed');
            validate='event-date bg-soft-success text-success';
            validateH5='font-size-16 text-success';         
        }else if(projectStages.validate.status==='progress'){
            console.log('completed');
            validate='event-date bg-soft-warning text-warning';
            validateH5='font-size-16 text-warning';         
        }
        if(projectStages.adopt.status==='pending'){
            console.log('pending');
            adopt='event-date bg-soft-danger text-danger';
            adoptH5='font-size-16 text-danger';
        }else if(projectStages.adopt.status==='completed'){
            console.log('completed');
            adopt='event-date bg-soft-success text-success';
            adoptH5='font-size-16 text-success';         
        }else if(projectStages.adopt.status==='completed'){
            console.log('completed');
            adopt='event-date bg-soft-warning text-warning';
            adoptH5='font-size-16 text-warning';         
        }
        if(projectStages.success.status==='pending'){
            console.log('pending');
            success='event-date bg-soft-danger text-danger';
            successH5='font-size-16 text-danger';
        }else if(projectStages.success.status==='completed'){
            console.log('completed');
            success='event-date bg-soft-success text-success';
            successH5='font-size-16 text-success';         
        }else if(projectStages.success.status==='progress'){
            console.log('completed');
            success='event-date bg-soft-warning text-warning';
            successH5='font-size-16 text-warning';         
        }
    }

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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="hori-timeline" dir="ltr">
                                        <ul className="list-inline events">
                                            <li className="list-inline-item event-list">
                                                <div className="px-5">
                                                    <div className={start}>1</div>
                                                    <h5 className={startH5}>Get Started</h5>
                                                    <div>
                                                        <button href="#" className="btn btn-primary btn-sm ">More info</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-inline-item event-list">
                                                <div className="px-5">
                                                    <div className={configure}>2</div>
                                                    <h5 className={configureH5}>Configure</h5>
                                                    <div>
                                                        <button href="#" className="btn btn-primary btn-sm">More Info</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-inline-item event-list">
                                                <div className="px-5">
                                                    <div className={validate}>3</div>
                                                    <h5 className={validateH5}>Validate</h5>
                                                    <div>
                                                        <button className="btn btn-primary btn-sm">More Info</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-inline-item event-list">
                                                <div className="px-5">
                                                    <div className={adopt}>4</div>
                                                    <h5 className={adoptH5}>Adopt</h5>
                                                    <div>
                                                        <button href="#" className="btn btn-primary btn-sm">More Info</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-inline-item event-list">
                                                <div className="px-5">
                                                    <div className={success}>5</div>
                                                    <h5 className={successH5}>Success</h5>
                                                    <div>
                                                        <button href="#" className="btn btn-primary btn-sm">More Info</button>
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