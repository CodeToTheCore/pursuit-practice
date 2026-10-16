import React, {useState} from 'react';

function UserProfile(props) {
    const [showAge, setShowAge] = useState(false);
    return (
   <div>
    <h1>Hello, {props.name}!</h1>
    {showAge && <p>Age: 30</p>}
    <button onClick={() => setShowAge(!showAge)}>
        {showAge ? 'Hide Age' : 'Show Age'}
    </button>
  </div>
    );
}

export default UserProfile;