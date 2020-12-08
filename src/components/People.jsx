import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import RoleTile from './RoleTile';
import './People.css';
import '@ui5/webcomponents-icons/dist/arrow-right';

const stage = 'people';

const People = () => {
    const user = useSelector(state => state.user.user);

    const people = useSelector(state => {
        if (state.project && state.project.project) {
            return state.project.project.stages[stage];
        }
        return null;
    });

    const status = people && people.status;
    const nextLinkClass = status === 'completed' ? 'whatsNext': 'whatsNext disabled-link' ;
    const getRoleFromState = role => people && people[role];
    const title = {
        primarySponsor: 'Primary Sponsor',
        projectManager: 'Project Manager',
        concurAdmin: 'Concur Admin',
        technicalLead: 'Technical Lead',
        changeOwner: 'Change Owner',
        other: 'Other',
    };

    const getRoleInfo = role => {
        return {
            title: title[role],
            role: role,
            ...getRoleFromState(role)
        };
    };

    return (
        <>
            {user ? null : <Redirect to="/login"/>}

            <div className="container-fluid pageTitle">
                <h3>Get Started</h3>
            </div>

            <div className="container-fluid people">
                <div className="row people-row">
                    <RoleTile
                        roleInfo={getRoleInfo('primarySponsor')}
                        toolTip='Main Business Sponsor'
                        status='Required'
                    />
                    <RoleTile
                        roleInfo={getRoleInfo('projectManager')}
                        toolTip='Person who will lead the project delivery'
                        status='Required'
                    />
                    <RoleTile
                        roleInfo={getRoleInfo('concurAdmin')}
                        toolTip='Administrator from Concur'
                    />
                </div>
                <div className="row people-row">
                    <RoleTile
                        roleInfo={getRoleInfo('technicalLead')}
                        toolTip='Person who will be responsible for any company technical requirements'
                    />
                    <RoleTile
                        roleInfo={getRoleInfo('changeOwner')}
                        toolTip='Person who will be deploying the solution to your employees'
                    />
                    <RoleTile
                        roleInfo={getRoleInfo('other')}
                        toolTip='Any other user'
                    />
                </div>
            </div>

            <div id="preNextStage" className="container-fluid">
                <div className="row justify-content-around">
                    <div className="col-3">
                        <div className="float-left" >

                        </div>
                    </div>
                    <div className="col-3">
                        <div className="float-none">
                            <Link className='whatsNext' to='/landing'
                                  style={{'textDecoration': 'none'}}>
                                <h4>Home</h4>
                            </Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="float-right">
                            <Link className={nextLinkClass} to='/configure'
                                  style={{'textDecoration': 'none'}}>
                                <h4>Next: Configure</h4>
                                <div className="arrow" style={{'marginLeft': '30px'}}>
                                    <div className="right-pointer-line"></div>
                                    <div className="right-pointer"></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default People;