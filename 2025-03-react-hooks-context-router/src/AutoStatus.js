import React, {useState} from 'react';

function AuthStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h1>Welcome back!</h1>
                    <button onClick={() => setIsLoggedIn(false)}>Log out</button>
                    </div>
                   ) : (
                    <div>
                        <h1>Please log in.</h1>
                        <button onClick={() => setIsLoggedIn(true)}>Log in</button>
                    </div>
                   )}
        </div>
    );
}

export default AuthStatus;