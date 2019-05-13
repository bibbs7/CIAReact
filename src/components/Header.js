import React from "react";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="">Home</a></li>
                        <li><a href="">Signup</a></li>
                        <li><a href="">Signin Administrator</a></li>
                        <li><a href="">Signin Staff</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};