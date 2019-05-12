import React from "react";

import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
import Register from "./components/Register";
import LoginStaff from "./components/LoginStaff";
import LoginAdmin from "./components/LoginAdmin";
import MainPage from "./components/MainPage";
import {SigninAdmin} from "./components/SigninAdmin";
import SigninStaff from "./components/SigninStaff";

class App extends React.Component {
    
    state = {
        name: undefined,
        password: undefined,
        role: undefined
    }

    signup = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const password = e.target.elements.password.value;
        const role = e.target.elements.radio.value;

        console.log(name);
        console.log(password);
        console.log(role);

        this.setState({

        });
    }

    render() {
        return (
                                <div>
                                    <Register />
                                </div>
                    
                                
         );
    }
};

export default App;