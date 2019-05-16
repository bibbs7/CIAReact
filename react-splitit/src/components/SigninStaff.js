import React from "react";

class SigninStaff extends React.Component {
    render() {
        return (
            <div>
                <h1> Sign in Staff </h1>
                <p></p>
                <form>
                    Name : <input type="text" id="userName" name="userName" placeholder="Name"></input>
                    <p></p>
                    Password : <input type="text" id="password" name="password" placeholder="Password"></input>
                </form>
                <p></p>
                <button>Sign in</button>
            </div>
        );
    }
};

export default SigninStaff;