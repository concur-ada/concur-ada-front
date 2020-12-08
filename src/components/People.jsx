import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import RoleTile from './RoleTile';
import './People.css';

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

            <div className="people">
                <div className="people-row">
                    <RoleTile
                        roleInfo={getRoleInfo('primarySponsor')}
                    />
                    <RoleTile
                        roleInfo={getRoleInfo('projectManager')}
                    />
                    <RoleTile
                        roleInfo={getRoleInfo('concurAdmin')}
                    />
                </div>
                    <div className="people-row">
                    <RoleTile
                        roleInfo={getRoleInfo('technicalLead')}
                    />
                    <RoleTile
                        roleInfo={getRoleInfo('changeOwner')}
                    />
                    <RoleTile
                        roleInfo={getRoleInfo('other')}
                    />
                </div>
            </div>
        </>
    );
};

export default People;