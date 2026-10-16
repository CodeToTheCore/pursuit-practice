import React, {useState} from 'react';

function FormContainer() {
    //State that holds user info and access code
    const [userInfo, setUserInfo] = useState({ name: '', email: ''});
    const [accessCode, setAccessCode] = useState('');

    // Function to handle changes in user info
    const handleUserInfoChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value});
    };

    // Function to handle changes in access code
    const handleAccessCodeChange = (e) => {
        setAccessCode(e.target.value);
    };

    return (
        <div>
            <UserInformation userInfo={userInfo} onUserInfoChange={handleUserInfoChange} />
            <AccessCode accessCode={accessCode} onAccessCodeChange={handleAccessCodeChange} />
        </div>
    );
}

function UserInformation({ userInfo, onUserInfoChange }) {
    return (
        <div>
            <input
            type='text'
            name='name'
            value={userInfo.name}
            onChange={onUserInfoChange}
            placeholder='Enter your email'
            />
        </div>
    );
}

function AccessCode({ accessCode, onAccessCodeChange}) {
    return (
        <div>
            <input type='text' value={accessCode}
            onChange={onAccessCodeChange}
            placeholder='Enter access code'
            />
        </div>
    );
}

export default FormContainer;