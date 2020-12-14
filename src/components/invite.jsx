import React, { useRef, useEffect, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
const submitClick = () => {

};

const Invite = () => {
    return (
        <div>
                        <Container>

            <p>Dear [name]</p>
            <p>Welcome to SAP Concur</p>
            <p>Your Finance business transformation begins here. You have purchased the following services from us:</p>
            <p>In order to move to the next stage of our journey together we now need to ask for some basic information. If at any point you have any questions please feel free to contact your sales person [name] or implementation.</p>
            <p>1. Please confirm your contact details and company roll</p>
            <tr>
                <td><p>Name</p></td>
                <td><input type="text" placeholder="name" required></input></td>
            </tr>
            <tr>
                <td><p>job title:</p></td>
                <td><input type="text" placeholder="job title" required></input></td>
                </tr>
            <tr>
                <td><p>Choose a role from this list or enter your own:</p></td>
                <td>
                    <label>
                <input list="roles" name="roleList" placeholder="role" required></input>
                </label>
                <datalist id="roles">
                    <option value="Executive Sponsor"></option>
                    <option value="Finance Project Lead"></option>
                    <option value="Finance Manager "></option>
                </datalist></td>
                </tr>
            <tr><td><p>GDPR</p> </td><td><input type="checkbox" id="GDPR" name="GDPR" value="GDPR" required></input></td></tr>
            <Button onClick={submitClick}>Next</Button>
</Container>
        </div>

    );
};
export default Invite;