import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom';
import {useHistory } from 'react-router-dom';


const Invite = () => {
    const history = useHistory();
    const { user } = useSelector(state => state.user);
    let name = user && user.name;
    let role = user && user.role;
    const submitClick = () => {
        let GDPR = document.getElementById('GDPR').checked;

        if (GDPR) {
            //save to redux here
            history.push('/landing');

        } else {
            alert('Please accept GDPR before continuing');
        }
    };
    const onTextChange = (event)=>{
        name=event.target.value;
    };
    return (
        <>
            {user ? null : <Redirect to="/login"/>}
        <div>
            <Container>
                <p>Dear {name}</p>
                <p>Welcome to SAP Concur</p>
                <p>Your Finance business transformation journey begins here. You have purchased the following services from us:</p>
                <ul>
                    <li>Request</li>
                    <li>Expense</li>
                    <li>Invoice</li>
                </ul>
                <p>In order to move to the next stage of our journey together we now need to ask for some basic information. If at any point you have any questions please feel free to contact your sales person [name] or implementation.</p>
                <p>Please confirm your contact details & company role</p>

                <tr>
                    <td><p>Name</p></td>
                    <td><input id="name" type="text" placeholder="Enter Name" value ={name} onChange={onTextChange} required></input></td>
                </tr>
                <tr>
                    <td><p>Job Title:</p></td>
                    <td><input id="jobTitle" type="text" placeholder="Enter Job Title" required></input></td>
                </tr>
                <tr>
                    <td><p>Choose a role from this list or enter your own:</p></td>
                    <td>
                        <label>
                            <input id="selectedRole" list="roles" name="roleList" placeholder="Enter or Select Role" required></input>
                        </label>
                        <datalist id="roles">
                            <option value="Primary Sponsor"></option>
                            <option value="Finance Project Lead"></option>
                            <option value="Finance Manager"></option>
                        </datalist></td>
                </tr>
                <tr>
                    <td><p>GDPR</p> </td>
                    <td><input type="checkbox" id="GDPR" name="GDPR" required></input></td>
                </tr>
                <Button onClick={submitClick}>Save & Proceed</Button>
            </Container>
        </div>
        </>

    );
};
export default Invite;