import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
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

            <div className="container-fluid">
                <div className="row pageTitle">
                    <div className="col justify-content-md-left">
                        <h3>Get Started</h3>
                    </div>
                </div>
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

            <div className="container-fluid">
                <div className="float-right" style={{'paddingRight': '200px'}}>
                    <a className='whatsNext' href='#' style={{'textDecoration': 'none'}}>
                        <h4>What's next?</h4>
                        <div className="arrow" style={{'marginLeft': '30px'}}>
                            <div className="line"></div>
                            <div className="pointer"></div>
                        </div>
                    </a>
                </div>
            </div>

        </>
    );
};

export default People;