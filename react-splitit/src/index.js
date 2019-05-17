import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Homepage from './components/Homepage';
import LoginStaff from './components/LoginStaff';
import LoginAdmin from './components/LoginAdmin';
import Register from './components/Register';
import User from './components/User';
import * as serviceWorker from './serviceWorker';
import logo from './SplitLogo.png';

const routing = (
    < Router >
        <div>
            <ul>
                <img src={logo} className="App-logo" alt="logo" />
            <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users/:id">My Account</Link>
                </li>
            <li>
                <Link to="/loginstaff">Login Staff</Link>
                </li>
                <li>
                    <Link to="/loginadmin">Login Administrator</Link>
                </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            </ul>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/loginstaff" component={LoginStaff} />
                <Route path="/loginadmin" component={LoginAdmin} />
                <Route path="/users/:id" component={User} />
                <Route path="/register" component={Register} />
            </Switch>
    </div>
    </Router >
)

ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
