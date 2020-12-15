import React from 'react';
import {useSelector} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import '@ui5/webcomponents-icons/dist/arrow-right';

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
    const nextLinkClass = status === 'completed' ? 'whatsNext' : 'whatsNext disabled-link';

    return (
        <>
            {user ? null : <Redirect to="/login"/>}

            <div className="container-fluid pageTitle">
                <h3>Configure</h3>
            </div>

            <div id="preNextStage" className="container-fluid">
                <div className="row justify-content-around">
                    <div className="col-3">
                        <div className="float-left">
                            <Link className='whatsNext' to='/people'
                                  style={{'textDecoration': 'none'}}>
                                <h4>Previous: Get Started</h4>
                                <div className="arrow" style={{'marginLeft': '30px'}}>
                                    <div className="left-pointer-line"></div>
                                    <div className="left-pointer"></div>
                                </div>
                            </Link>
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
                            <Link className={nextLinkClass} to='#'
                                  style={{'textDecoration': 'none'}}>
                                <h4>Next: Validate</h4>
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