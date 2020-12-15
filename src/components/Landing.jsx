import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './Landing.css';
import Dials from './Dials.jsx';

const Landing = () => {
    const {user} = useSelector(state => state.user);
    const name = user && user.name;
    const {project} = useSelector(state => state.project);
    let start, configure, validate, adopt, success;
    configure = start = validate = adopt = success = 'event-date bg-soft-primary';
    const projectStages = project && project.stages;
    if (projectStages != null) {
        if (projectStages.people.status === 'pending') {
            start = 'event-date bg-soft-danger text-danger';
        } else if (projectStages.people.status === 'completed') {
            start = 'event-date bg-soft-success text-success';
        } else if (projectStages.people.status === 'progress') {
            start = 'event-date bg-soft-warning text-warning';
        }
        if (projectStages.configure.status === 'pending') {
            configure = 'event-date bg-soft-danger text-danger';
        } else if (projectStages.configure.status === 'completed') {
            configure = 'event-date bg-soft-success text-success';
        } else if (projectStages.configure.status === 'progress') {
            configure = 'event-date bg-soft-warning text-warning';
        }
        if (projectStages.validate.status === 'pending') {
            validate = 'event-date bg-soft-danger text-danger';
        } else if (projectStages.validate.status === 'completed') {
            validate = 'event-date bg-soft-success text-success';
        } else if (projectStages.validate.status === 'progress') {
            validate = 'event-date bg-soft-warning text-warning';
        }
        if (projectStages.adopt.status === 'pending') {
            adopt = 'event-date bg-soft-danger text-danger';
        } else if (projectStages.adopt.status === 'completed') {
            adopt = 'event-date bg-soft-success text-success';
        } else if (projectStages.adopt.status === 'completed') {
            adopt = 'event-date bg-soft-warning text-warning';
        }
        if (projectStages.success.status === 'pending') {
            success = 'event-date bg-soft-danger text-danger';
        } else if (projectStages.success.status === 'completed') {
            success = 'event-date bg-soft-success text-success';
        } else if (projectStages.success.status === 'progress') {
            success = 'event-date bg-soft-warning text-warning';
        }
    }

    return (
        <>
            {!name &&
            <div>
                <h3>Hey, {name} nice to see you</h3>
                <span>Login (click on the Avatar link on top right) to checkout the implementation journey of Concur Expense</span>
            </div>}

            {name &&
            <div style={{'marginTop': '40px'}}>
                <Dials></Dials>
            <div class="container-fluid" style={{'marginTop': '40px'}}>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="hori-timeline" dir="ltr">
                                    <ul class="list-inline events">
                                        <li class="list-inline-item event-list">
                                            <div className={start}>
                                                <h5 className="font-size-16">Get Started</h5>
                                                <div>
                                                    <Link to='/people'
                                                          class="btn btn-primary btn-sm">More
                                                        Info</Link></div>
                                            </div>
                                        </li>
                                        <li className="list-inline-item event-list">
                                            <div className={configure}>
                                                <h5 className="font-size-16">Configure</h5>
                                                <div>
                                                    <Link to='/configure'
                                                          class="btn btn-primary btn-sm">More
                                                        Info</Link></div>
                                            </div>
                                        </li>
                                        <li className="list-inline-item event-list">
                                            <div className={validate}>
                                                <h5 className="font-size-16">Validate</h5>
                                                <div>
                                                    <Link to='/validate'
                                                          class="btn btn-primary btn-sm">More
                                                        Info</Link></div>
                                            </div>
                                        </li>
                                        <li className="list-inline-item event-list">
                                            <div className={adopt}>
                                                <h5 className="font-size-16">Adopt</h5>
                                                <div>
                                                    <Link to='/adopt'
                                                          class="btn btn-primary btn-sm">More
                                                        Info</Link></div>
                                            </div>
                                        </li>
                                        <li className="list-inline-item event-list">
                                            <div className={success}>
                                                <h5 className="font-size-16">Success</h5>
                                                <div>
                                                    <Link to='/success'
                                                          class="btn btn-primary btn-sm">More
                                                        Info</Link></div>
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
            }
        </>
    );
};

export default Landing;