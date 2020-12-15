import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Dials from './Dials.jsx';
import '@ui5/webcomponents-icons/dist/arrow-right';
import PrevNextLinks from './PrevNextLinks';

const stage = 'configure';

const People = () => {
    const user = useSelector(state => state.user.user);
    const configure = useSelector(state => {
        if (state.project && state.project.project) {
            return state.project.project.stages[stage];
        }
        return null;
    });

    const status = configure && configure.status;
    const prevNextLinks = {
        hasPrevLink : true,
        prevLinkText : 'People',
        hasNextLink : true,
        nextLinkText : 'Validate',
        isNextLinkEnabled : status === 'completed' ? true: false
    };

    return (
        <>
            {user ? null : <Redirect to="/login"/>}

            <div className="container-fluid pageTitle">
                <h3>Configure</h3>
            </div>
            <Dials></Dials>
            <PrevNextLinks prevNextLinks={prevNextLinks}/>
        </>
    );
};

export default People;