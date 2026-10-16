import React, {useState, useEffect} from 'react';

function Users() {
    const [users, setUsers] = useState([]); // state to store the users data
    const [isLoading, setIsLoading] = useState(true); // State to track loading status

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data); // Set the users in state
            setIsLoading(false); // Set loading state to false
        })
        .catch(error => {
            console.error('Error fecthing data: ', error);
        setIsLoading(false); // Set loading state to false
    });
    }, []); // The empty array causes this effect to only run on mount

    if (isLoading) {
        return <p>Loading users...</p>
    }

    return(
        <div>
            <h1>Users</h1>
            {users.map(user => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    </div>
            ))}
       </div>
    );
}

export default Users;