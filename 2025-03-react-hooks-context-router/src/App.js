import React from 'react';
import './App.css';
import logo from './logo.svg';
import Welcome from './Welcome';
import UserProfile from './UserProfile';
import Counter from './Counter';
import AuthStatus from './AutoStatus';
import WelcomeMessage from './WelcomeMessage';
import Mailbox from './Mailbox';
import Users from './Users';
import ThemeContext from './ThemeContext';
import ChildComponent from './ChildComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import AppProvider from './AppProvider';








function App() {
  const user = {
    isLoggedIn: true,
    unreadMessages: ['message1', 'message2']
  };

  return (
    <AppProvider>
    <Router>
      <div className="App">
      <Navbar />    {/* This will show the navigation bar */}
        {/* Routing Setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Other Components */}
        <ThemeContext.Provider value='dark'>
          <ChildComponent />
        </ThemeContext.Provider>
        <Welcome />
        <Counter />
        <AuthStatus />
        <Users />
        <WelcomeMessage isLoggedIn={user.isLoggedIn} />
        <Mailbox unreadMessages={user.unreadMessages} />
        <UserProfile name='Cornell' />

        {/* Static Part */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Learn React, opens in new window"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
    </AppProvider>
  );
}

export default App;
