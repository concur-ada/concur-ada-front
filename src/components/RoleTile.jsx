import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {Card} from '@ui5/webcomponents-react/lib/Card';
import {Title} from '@ui5/webcomponents-react/lib/Title';
import {Button} from '@ui5/webcomponents-react/lib/Button';
import {Input} from '@ui5/webcomponents-react/lib/Input';
import {Label} from '@ui5/webcomponents-react/lib/Label';
import {Dialog} from '@ui5/webcomponents-react/lib/Dialog';
import {Link} from '@ui5/webcomponents-react/lib/Link';

import {setRoleInfo} from '../services/project';

const RoleTile = props => {
    const roleInfo = props.roleInfo;
    const hasData = roleInfo.name ? true : false;
    const status = props.status;
    const className = hasData ? 'role' : (status === 'Required' ?  'role role-required' : 'role role-pending');
    const addOrEditLinkText = hasData ? 'Edit' : 'Add';
    const dispatch = useDispatch();
    const refEditDialog = useRef();
    const refName = useRef();
    const refEmail = useRef();
    const refPhone = useRef();
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
            phone: refPhone.current.value,
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
            <div className="container-fluid">
                <div className="row" style={{'padding': '10px'}}>
                    <div className="col">
                    <Label htmlFor='name' required>Name :</Label>
                    <Input id='name'
                           placeholder='Enter Username'
                           type="Text"
                           required='true'
                           ref={refName}
                           value={roleInfo.name}/>
                    </div>
                </div>
                <div className="row" style={{'padding': '10px'}}>
                    <div className="col">
                    <Label htmlFor='email' required>Email :</Label>
                    <Input id='email'
                           placeholder='Enter Email'
                           ref={refEmail}
                           type="Email"
                           value={roleInfo.email}
                           required='true'/>
                    </div>
                </div>
                <div className="row" style={{'padding': '10px'}}>
                    <div className="col">
                        <Label htmlFor='phone'>Phone :</Label>
                        <Input id='phone'
                               placeholder='Enter Phone No'
                               ref={refPhone}
                               maxlength='12'
                               value={roleInfo.phone}
                              />
                    </div>
                </div>
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
            <Card id="roleCard" heading={roleInfo.title} status={status}
                  class="small"
                  onHeaderClick={() => handleHeaderClick()}
                  headerInteractive='true' tooltip={props.toolTip}>

                <div className="container">
                    <div className="row" style={{'padding': '10px'}}>
                        <div className="col text-wrap"><Title level="H5">{roleInfo.name}</Title></div>
                        <div className="col text-right" className="justify-content-end">
                            <Link
                            className=""
                            onClick={() => handleHeaderClick()}
                            slot=""
                            style={{}}
                            tooltip=""
                        >
                            {addOrEditLinkText}
                        </Link>
                        </div>
                    </div>
                </div>

            </Card>
            {editModal}
        </div>
    );
};

export default RoleTile;