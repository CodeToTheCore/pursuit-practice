import React from 'react';
import { browserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

function App() {
    return (
        <Router>
            <div>
                <nav>
                 <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/ contact">Contact</Link></li>
                 </ul>
                </nav>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/about' component={AboutPage} />
                    <Route path='/contact' component={ContactPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;