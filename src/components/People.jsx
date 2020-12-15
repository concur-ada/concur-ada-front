import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import RoleTile from './RoleTile';
import Dials from './Dials.jsx';
import './People.css';
import '@ui5/webcomponents-icons/dist/arrow-right';
import PrevNextLinks from './PrevNextLinks';

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

    const prevNextLinks = {
        hasPrevLink : false,
        hasNextLink : true,
        nextLinkText : 'Configure',
        isNextLinkEnabled : status === 'completed' ? true: false
    };

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
                <h5>Please input the name, email address & phone number of each team member</h5>
            </div>
            <Dials/>
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

            <PrevNextLinks prevNextLinks={prevNextLinks}/>
        </>
    );
};

export default People;