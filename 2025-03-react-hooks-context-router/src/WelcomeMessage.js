import React from 'react';



function WelcomeMessage(props) {
    const secretMessage = process.env.REACT_APP_SECRET;
       
    if (props.isLoggedIn){
    return  (
        <div>
            
            <p>{secretMessage}</p>
            {props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>} 
        </div>
    );
} else {
    return <h1>Please sign up.</h1>;
 }
}

export default WelcomeMessage;