import React from 'react';
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents-icons/dist/sys-help-2';
import '@ui5/webcomponents-icons/dist/upload';
import '@ui5/webcomponents-icons/dist/create';
import '@ui5/webcomponents-icons/dist/arrow-right';
import Dials from './Dials.jsx';
import PrevNextLinks from './PrevNextLinks';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Button} from '@ui5/webcomponents-react/lib/Button';
import {UploadCollection} from '@ui5/webcomponents-react/lib/UploadCollection';
import {FormItem} from '@ui5/webcomponents-react/lib/FormItem';
import {Input} from '@ui5/webcomponents-react/lib/Input';
import {Label} from '@ui5/webcomponents-react/lib/Label';
import {CheckBox} from '@ui5/webcomponents-react/lib/CheckBox';
import {Table} from '@ui5/webcomponents-react/lib/Table';
import {TableCell} from '@ui5/webcomponents-react/lib/TableCell';
import {TableRow} from '@ui5/webcomponents-react/lib/TableRow';
import {TableColumn} from '@ui5/webcomponents-react/lib/TableColumn';
import {FileUploader} from '@ui5/webcomponents-react/lib/FileUploader';
import {FlexBox} from '@ui5/webcomponents-react/lib/FlexBox';
import {Avatar} from '@ui5/webcomponents-react/lib/Avatar';
import {Select} from '@ui5/webcomponents-react/lib/Select';
import {Option} from '@ui5/webcomponents-react/lib/Option';
import {DatePicker} from '@ui5/webcomponents-react/lib/DatePicker';
import ButtonMailto from './ButtonMailTo';

import Sticky from 'react-sticky-el';

const stage = 'configure';

const People = () => {
    const user = useSelector((state) => state.user.user);
    const configure = useSelector((state) => {
        if (state.project && state.project.project) {
            return state.project.project.stages[stage];
        }
        return null;
    });

    const status = configure && configure.status;
    const prevNextLinks = {
        hasPrevLink: true,
        prevLinkText: 'People',
        hasNextLink: true,
        nextLinkText: 'Validate',
        isNextLinkEnabled: status === 'completed' ? true : false
    };

    return (
        <>
            {user ? null : <Redirect to='/login'/>}

            {/* <Jumbotron fluid>
        <Container>
          <h1><b>Configure</b></h1>
          <p>
          Let's begin implementation!
          </p>
        </Container>
      </Jumbotron> */}

            <div className="container-fluid pageTitle">
                <h2>Configure</h2>
                <h5>Let's begin implementation!</h5>
            </div>

            <Dials/>

            <Sticky>
                <ButtonMailto mailto='mailto:no-reply@example.com'></ButtonMailto>
            </Sticky>
            <div style={{textAlign: 'center'}} className='container-fluid pageTitle'>
                <h1>Upload</h1>
                <br></br>
                <h6>Upload your company expense policy OR click to create new policy with the Concur Policy Builder</h6>
            </div>
            <UploadCollection
                className=''
                onDrop={function noRefCheck() {
                }}
                onFileDeleted={function noRefCheck() {
                }}
                onSelectionChange={function noRefCheck() {
                }}
                slot=''
                style={{width: '1790px'}}
                tooltip=''
            />
            <FlexBox style={{marginLeft: '845px'}}>
                <FileUploader hideInput>
                    <Avatar icon='upload'/>
                </FileUploader>
                <ui5-link
                    href='https://www.concur.co.uk/expense-policy-builder'
                    target='_blank'
                >
                    <Avatar style={{marginLeft: '5px'}} tooltip='Concur Policy Builder' icon='create'/>
                </ui5-link>
            </FlexBox>
            <br></br>
            <br></br>
            <div style={{textAlign: 'center'}} className='container-fluid pageTitle'>
                <h1>Fill</h1>
                <br></br>
                <h6>What expense type does your company track? Fill it in!</h6>
            </div>
            <br></br>

            <Table
                className=''
                columns={
                    <>
                        <TableColumn>
                            <Label>Expense Type</Label>
                        </TableColumn>
                        <TableColumn>
                            <Label>Active</Label>
                        </TableColumn>
                        <TableColumn>
                            <Label>Account Code</Label>
                        </TableColumn>
                        <TableColumn>
                            <Label>Cost Centre</Label>
                        </TableColumn>
                    </>
                }
                onPopinChange={function noRefCheck() {
                }}
                onRowClick={function noRefCheck() {
                }}
                slot=''
                style={{marginLeft: '570px', width: '600px'}}
                tooltip=''
            >
                <TableRow>
                    <TableCell>
                        <Label>Hotel</Label>
                    </TableCell>
                    <TableCell>
                        <CheckBox style={{marginBottom: '-20px'}} checked/>
                    </TableCell>
                    <TableCell>
                        <FormItem>
                            <Input/>
                        </FormItem>
                    </TableCell>
                    <TableCell>
                        <Select
                            className=''
                            onChange={function noRefCheck() {
                            }}
                            slot=''
                            style={{}}
                            tooltip=''
                        >
                            <Option>Select Item</Option>
                            <Option>Process</Option>
                            <Option>Personal</Option>
                            <Option>Impersonal</Option>
                            <Option>Production</Option>
                            <Option>Service</Option>
                            <Option>Operation</Option>
                        </Select>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Label>Airfare</Label>
                    </TableCell>
                    <TableCell>
                        <CheckBox style={{marginBottom: '-20px'}} checked/>
                    </TableCell>
                    <TableCell>
                        <FormItem>
                            <Input/>
                        </FormItem>
                    </TableCell>
                    <TableCell>
                        <Select
                            className=''
                            onChange={function noRefCheck() {
                            }}
                            slot=''
                            style={{}}
                            tooltip=''
                        >
                            <Option>Select Item</Option>
                            <Option>Process</Option>
                            <Option>Personal</Option>
                            <Option>Impersonal</Option>
                            <Option>Production</Option>
                            <Option>Service</Option>
                            <Option>Operation</Option>
                        </Select>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Label>Fuel Mileage (Personal)</Label>
                    </TableCell>
                    <TableCell>
                        <CheckBox style={{marginBottom: '-20px'}} checked/>
                    </TableCell>
                    <TableCell>
                        <FormItem>
                            <Input/>
                        </FormItem>
                    </TableCell>
                    <TableCell>
                        <Select
                            className=''
                            onChange={function noRefCheck() {
                            }}
                            slot=''
                            style={{}}
                            tooltip=''
                        >
                            <Option>Select Item</Option>
                            <Option>Process</Option>
                            <Option>Personal</Option>
                            <Option>Impersonal</Option>
                            <Option>Production</Option>
                            <Option>Service</Option>
                            <Option>Operation</Option>
                        </Select>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Label>Gift (Clients)</Label>
                    </TableCell>
                    <TableCell>
                        <CheckBox style={{marginBottom: '-20px'}} checked/>
                    </TableCell>
                    <TableCell>
                        <FormItem>
                            <Input/>
                        </FormItem>
                    </TableCell>
                    <TableCell>
                        <Select
                            className=''
                            onChange={function noRefCheck() {
                            }}
                            slot=''
                            style={{}}
                            tooltip=''
                        >
                            <Option>Select Item</Option>
                            <Option>Process</Option>
                            <Option>Personal</Option>
                            <Option>Impersonal</Option>
                            <Option>Production</Option>
                            <Option>Service</Option>
                            <Option>Operation</Option>
                        </Select>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Label>Uniforms</Label>
                    </TableCell>
                    <TableCell>
                        <CheckBox style={{marginBottom: '-20px'}} checked/>
                    </TableCell>
                    <TableCell>
                        <FormItem>
                            <Input/>
                        </FormItem>
                    </TableCell>
                    <TableCell>
                        <Select
                            className=''
                            onChange={function noRefCheck() {
                            }}
                            slot=''
                            style={{}}
                            tooltip=''
                        >
                            <Option>Select Item</Option>
                            <Option>Process</Option>
                            <Option>Personal</Option>
                            <Option>Impersonal</Option>
                            <Option>Production</Option>
                            <Option>Service</Option>
                            <Option>Operation</Option>
                        </Select>
                    </TableCell>
                </TableRow>
            </Table>

            <div style={{textAlign: 'center'}} className='container-fluid pageTitle'>
                <h1>Select</h1>
                <br></br>
                <h6>Select a day for implementation</h6>
            </div>
            <br></br>
            <DatePicker
                className=''
                onChange={function noRefCheck() {
                }}
                onInput={function noRefCheck() {
                }}
                slot=''
                style={{marginLeft: '790px'}}
                tooltip=''
            />
            <br></br>
            <br></br>
            <div style={{textAlign: 'center'}} className='container-fluid pageTitle'>
                <h1>Confirm</h1>
            </div>
            <br></br>
            <Button
                className=''
                design='Positive'
                icon=''
                onClick={function noRefCheck() {
                }}
                slot=''
                style={{marginLeft: '755px', fontSize: 'x-large'}}
                tooltip=''
            >
                Confirm Implementation
            </Button>

            <PrevNextLinks prevNextLinks={prevNextLinks}/>
        </>
    );
};

export default People;