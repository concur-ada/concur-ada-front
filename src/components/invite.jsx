import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {useSelector} from 'react-redux';



const Invite = () => {
    const {user} = useSelector(state => state.user);
    const submitClick = () => {
    let role = document.getElementById('selectedRole').value;
    let name = document.getElementById('name').value;
    let job = document.getElementById('jobTitle').value;
    let GDPR=document.getElementById('GDPR').checked;
    
if(GDPR){

}else{
    alert('Please accept GDPR before continuing');
}
    console.log(role+name+job+GDPR);
    //save to redux
    

};
    return (
        <div>
            <Container>
                <p>Dear {user}</p>
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
                    <td><input id="name" type="text" placeholder="Enter Name" required></input></td>
                </tr>
                <tr>
                    <td><p>Job Title:</p></td>
                    <td><input id="jobTitle" type="text" placeholder="Enter Job Title" required></input></td>
                </tr>
                <tr>
                    <td><p>Choose a role from this list or enter your own:</p></td>
                    <td>
                        <label>
                            <input id="selectedRole"list="roles" name="roleList" placeholder="Enter or Select Role" required></input>
                        </label>
                        <datalist id="roles">
                            <option value="Executive Sponsor"></option>
                            <option value="Finance Project Lead"></option>
                            <option value="Finance Manager"></option>
                        </datalist></td>
                </tr>
                <tr>
                    <td><p>GDPR</p> </td>
                    <td><input type="checkbox" id="GDPR" name="GDPR"  required></input></td>
                </tr>
                <Button onClick={submitClick}>Save & Proceed</Button>
            </Container>
        </div>

    );
};
export default Invite;