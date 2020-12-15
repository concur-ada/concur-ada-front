import React from 'react';
import {Link} from 'react-router-dom';

const PrevNextLinks = props => {

    const links = {
        People : '/people',
        Configure : '/configure'
    };

    const {prevNextLinks} = props;
    const prevLink = prevNextLinks.hasPrevLink ? links[prevNextLinks.prevLinkText] : '#';
    const nextLink = prevNextLinks.hasNextLink ? links[prevNextLinks.nextLinkText] : '#';
    const nextLinkClass = prevNextLinks.isNextLinkEnabled === true ? 'whatsNext': 'whatsNext disabled-link' ;

    return (
        <div id="preNextStage" className="container-fluid" style={{'marginBottom': '40px'}}>
            <div className="row justify-content-around">
                <div className="col-3">
                    <div className="float-left">
                        {prevNextLinks.hasPrevLink &&
                        <Link className='whatsNext' to={prevLink}
                              style={{'textDecoration': 'none'}}>
                            <h4>Previous: {prevNextLinks.prevLinkText}</h4>
                            <div className="arrow" style={{'marginLeft': '30px'}}>
                                <div className="left-pointer-line"></div>
                                <div className="left-pointer"></div>
                            </div>
                        </Link>
                        }
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
                        {prevNextLinks.hasNextLink &&
                            <Link className={nextLinkClass} to={nextLink}
                                  style={{'textDecoration': 'none'}}>
                                <h4>Next: {prevNextLinks.nextLinkText}</h4>
                                <div className="arrow" style={{'marginLeft': '30px'}}>
                                    <div className="right-pointer-line"></div>
                                    <div className="right-pointer"></div>
                                </div>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrevNextLinks;