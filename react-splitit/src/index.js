import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Homepage from './components/Homepage';
import LoginStaff from './components/LoginStaff';
import LoginAdmin from './components/LoginAdmin';
import Register from './components/Register';
import * as serviceWorker from './serviceWorker';

const routing = (
    < Router >
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/loginstaff">Login Staff</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            </ul>
        <Route exact path="/" component={Homepage} />
            <Route path="/loginstaff" component={LoginStaff} />

            <Route path="/loginadmin" component={LoginAdmin} />
        <Route path="/register" component={Register} />
    </div>
    </Router >
)

ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
