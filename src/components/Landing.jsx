import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import ContentBar from './NameBadgeDisplay';
import '@ui5/webcomponents-icons/dist/badge';
import './Landing.css';
import './Landing.css';

const Landing = () => {
    const { user } = useSelector(state => state.user);
    const name = user && user.name;
    const badges = (user && user.badges) || 0;

    return (
        <>
            <div>
            <ContentBar className='contentBar'></ContentBar>
            </div>
            {name &&
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
                                                        <Link to='/people' class="btn btn-primary btn-sm">More Info</Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-inline-item event-list">
                                                <div class="px-5">
                                                    <div class="event-date bg-soft-success text-success">2</div>
                                                    <h5 class="font-size-16 text-success">Configure</h5>
                                                    <div>
                                                        <Link to='/configure' class="btn btn-primary btn-sm">More Info</Link>
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
}
        </>
    );
};

export default Landing;