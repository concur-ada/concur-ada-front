import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ConfigureRoleModal = props => {
    console.log('props in PeopleConfigureModal', props);
    const roleInfo = props.roleInfo;
    return (
        <Modal show={props.show}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>{roleInfo.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter name">{roleInfo.name}</Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary">Save</Button>
                    <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    );
};

export default ConfigureRoleModal;