import React from "react";
import "./Register.css";
import $ from "jquery";

import logo from '../SplitLogo.png';


export class Register extends React.Component {
    render() {
        return (
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="src/app/components/register.component.scss" rel="stylesheet" />
                <title>SplitIT</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
                <div className="container-fluid">
                    <div className="row" id="row1">
                        <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
</div>
                        <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4" />
                        <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2">
                            <a id="login" >Log in</a>
                        </div>
                        <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2 ">
                            <a id="registar" >Register</a>
                        </div>
                    </div>
               
                    <section className="col-sm-12 col-xs-12 col-md-12 col-lg-12" style={{ background: 'linear-gradient(to right, #ffb566 30%, #ffffff)' }}>
                        <div className="container-fluid">
                            <div className="row" id="row3">
                                <h1 className="col-sm-12 col-xs-12 col-md-12 col-lg-12">Sign up</h1>
                            </div>
                            <div className="row" id="row4">
                                <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4" />
                                <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                    <label htmlFor="userName">Name : </label>
                                    <input type="text" className="form-control" id="userName" name="userName" placeholder="name" />
                                    <label htmlFor="password">Password :</label>
                                    <input type="text" className="form-control" id="password" name="password" placeholder="password" />
                                    <form action method="post">
                                        <label htmlFor="userName">Role : </label>
                                        <br />
                                        <input type="radio" id="admin" defaultValue="A" name="radio" /> Administrator
                        <input type="radio" id="staff" defaultValue="S" name="radio" /> Staff
                      </form>
                                </div>
                                <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                    <a href="#" className="myButton" onClick={register}>Create Account</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div></div>
        );



        function register(e) {
            
            this.props.history.push('/');

            e.preventDefault();
            var url = "users/add";
            var project = "http://localhost:3000";
            var home = "/";

            var data = JSON.stringify({
                name: document.forms["register"]["name"].value,
                password: document.forms["register"]["password"].value,
                isAdmin: document.forms["register"]["isAdmin"].value,

            });

            $.ajax({
                type: "POST",
                url: project + "/" + url,
                contentType: "application/json; charset=utf-8",
                crossDomain: true,
                dataType: "json", //The type of data that you're expecting back from the server
                success: function (response) {
                    if (response) {
                        alert("Success!\nYour account was registered.");
                        window.location.replace(project + "/" + home);
                    }
                    else {
                        alert("No response");
                    }
                },
                error: function (response) {
                    if (response.status == 400) {
                        console.log(response);
                        alert("Error: " + response.status);
                    }
                },
                data: data
            });

        }
    }
};



export default Register;