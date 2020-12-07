import React from 'react';

import {Card} from '@ui5/webcomponents-react/lib/Card';
import {Title} from '@ui5/webcomponents-react/lib/Title';

const RoleTile = props => {
    const roleInfo = props.roleInfo;
    const className = roleInfo.name ? 'role' : 'role role-pending';
    return (
        <div className={className}>
            <Card heading={roleInfo.title} status="Edit"
                  class="small"
                  onHeaderClick={props.handlePeopleTileClick}
                  headerInteractive='true'>
                <div className="content content-padding">
                    <p>
                        <Title level="H5">{roleInfo.name}
                        </Title>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default RoleTile;