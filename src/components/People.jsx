import React from 'react';

import {useState} from 'react';
import {Card} from '@ui5/webcomponents-react/lib/Card';
import ConfigureRoleModal from './ConfigureRoleModal';
import RoleTile from './RoleTile';
import './People.css';
import {useDispatch, useSelector} from 'react-redux';

const stage = 'people';

const People = () => {

    const [isOpen, setIsOpen] = useState(false);
    let roleInfo = {
           test:'testing'
    };

    const dispatch = useDispatch();

    const people = useSelector(state => {
        if (state.project && state.project.project) {
            return state.project.project.stages[stage];
        }
        return null;
    });

    const getRoleFromState =  role => people && people[role];
    const title = {
        primarySponsor : 'Primary Sponsor',
        projectManager: 'Project Manager',
        concurAdmin: 'Concur Admin',
        technicalLead: 'Technical Lead',

    };

    const getRoleInfo = role => {
        return {
            title: title[role],
            ...getRoleFromState(role)
        };
    };

    const handlePeopleTileClick = (role) => {
        roleInfo = {...getRoleInfo(role)};
        console.log('handlePeopleTileClick - roleInfo ', roleInfo);
        setIsOpen(true);
        return (<ConfigureRoleModal roleInfo={roleInfo} show={true}
                                    handleClose={() => handleClose()}/>);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="people">
            <div className="people-row">
                <RoleTile
                    roleInfo={getRoleInfo('primarySponsor')}
                    handlePeopleTileClick={() => handlePeopleTileClick('primarySponsor')}
                />
                <RoleTile
                    roleInfo={getRoleInfo('projectManager')}
                    handlePeopleTileClick={() => handlePeopleTileClick('projectManager')}
                />
                <RoleTile
                    roleInfo={getRoleInfo('concurAdmin')}
                    handlePeopleTileClick={handlePeopleTileClick}
                />
                <RoleTile
                    roleInfo={getRoleInfo('technicalLead')}
                    handlePeopleTileClick={handlePeopleTileClick}
                />
                <div className="role role-pending">
                    <Card heading="Change Owner" status="Pending"
                          className="medium"></Card>
                </div>
                <div className="role role-pending">
                    <Card heading="Other" status="Pending"
                          className="medium"></Card>
                </div>
            </div>
        </div>
    );
};


export default People;