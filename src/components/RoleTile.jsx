import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {Card} from '@ui5/webcomponents-react/lib/Card';
import {Title} from '@ui5/webcomponents-react/lib/Title';
import {Button} from '@ui5/webcomponents-react/lib/Button';
import {Input} from '@ui5/webcomponents-react/lib/Input';
import {Label} from '@ui5/webcomponents-react/lib/Label';
import {Dialog} from '@ui5/webcomponents-react/lib/Dialog';
import {setRoleInfo} from '../services/project';

const RoleTile = props => {
    const roleInfo = props.roleInfo;
    const hasData = roleInfo.name ? true : false;
    const className = hasData ? 'role' : 'role role-pending';
    const cardStatus = hasData ? 'Edit' : 'Add';
    const dispatch = useDispatch();
    const refEditDialog = useRef();
    const refName = useRef();
    const refEmail = useRef();
    const handleHeaderClick = () => {
        refEditDialog.current.open();
    };
    const handleClose = () => {
        refEditDialog.current.close();
    };
    const handleSave = () => {
        const updatedRoleInfo = {
            name: refName.current.value,
            email: refEmail.current.value,
            role: roleInfo.role
        };
        if (!updatedRoleInfo.name || !updatedRoleInfo.email) {
            return;
        }
        dispatch(setRoleInfo(updatedRoleInfo));
        refEditDialog.current.close();
    };
    const headerText = 'Enter Details for ' + roleInfo.title;
    const editModal = (<Dialog id='role-dialog' header-text={headerText}
                               ref={refEditDialog}>
        <section className='role-form'>
            <div>
                <p>
                    <Label htmlFor='name' required>Name :</Label>
                    <Input id='name'
                           placeholder='Enter Username'
                           type="Text"
                           required='true'
                           ref={refName}
                           value={roleInfo.name}/>
                </p>
                <p>
                    <Label htmlFor='email' required>Email :</Label>
                    <Input id='email'
                           placeholder='Enter Email'
                           ref={refEmail}
                           type="Email"
                           value={roleInfo.email}
                           required='true'/>
                </p>
            </div>
        </section>

        <div slot='footer' className='dialog-footer'>
            <div style={{'flex': '1'}}></div>
            <Button design="Emphasized" onClick={handleSave}>Save</Button>
            <Button design="Transparent" onClick={handleClose}>Close</Button>
        </div>
    </Dialog>);
    return (
        <div className={className}>
            <Card heading={roleInfo.title} status={cardStatus}
                  class="small"
                  onHeaderClick={() => handleHeaderClick()}
                  headerInteractive='true' tooltip={props.toolTip}>
                <div>
                    <p style={{'margin': '10px'}}>
                        <Title level="H5">{roleInfo.name}</Title>
                    </p>
                </div>
            </Card>
            {editModal}
        </div>
    );
};

export default RoleTile;