import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState('');  // Initializes the state for the input

  const handleNameChange = (event) => {
    setName(event.target.value);  // Updates the state on every change in the input field
  };

  const handleSubmit = (event) => {
    event.preventDefault();  // Prevents the form from submitting in the traditional way
    alert('A name was submitted: ' + name);  // Shows an alert with the input value
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
        
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button type="submit">Submit</button>  
      </form>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
