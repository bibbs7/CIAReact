import React from "react";
import "./LoginStaff.css";
import $ from "jquery";
import logo from '../SplitLogo.png';

export class LoginStaff extends React.Component {
    render() {
        return (
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>SplitIT</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
                <div className="container-fluid">
                    <div className="row" id="row1">
                        <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                            
                        </div>
                        <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4" />
                        <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2">
                            <a id="login">Log in</a>
                        </div>
                        <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2 ">
                            <a id="registar" href="https://www.w3schools.com/html/">Registar</a>
                        </div>
                    </div>
                    
                    <section className="col-sm-12 col-xs-12 col-md-12 col-lg-12" style={{ background: 'linear-gradient(to right, #ffb566 30%, #ffffff)' }}>
                        <div className="container-fluid">
                            <div className="row" id="row3">
                                <h1 className="col-sm-12 col-xs-12 col-md-12 col-lg-12">Login Staff</h1>
                            </div>
                            <div className="row" id="row4">
                                <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4" />
                                <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                    <label htmlFor="staffId">Staff ID : </label>
                                    <input type="text" className="form-control" id="staffId" name="staffId" placeholder="id" />
                                    <label htmlFor="password">Password :</label>
                                    <input type="text" className="form-control" id="password" name="password" placeholder="password" />
                                </div>
                                <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                    <a href="#" className="myButton" onClick={loginStaff}>Login</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div></div>
        );

    }
};



function loginStaff(e) {

    var url = "user/loginStaff";
    var project = "https://splitall.herokuapp.com";
    var main = "Mainpage.js";

    var data = JSON.stringify({
        id: document.getElementById("staffId").value,
        password: document.getElementById("password").value

    });

    $.ajax({
        type: "POST",
        url: project + "" + url,
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json", //The type of data that you're expecting back from the server
        success: function (response) {
            if (response) {
                alert("Success!\nYour account was registered.");
                window.location.replace("http://localhost:3000/mainpage");
            }
            else {
                alert("No response");
            }
        },
        error: function (response) {
            if (response.status === "Forbidden") {
                console.log(response);
                alert("Error: " + response.status + "  Wrong path");
            }
            else
                if (response.status === "Bad request") {
                    console.log(response);
                    alert("Error: " + response.status + "  Wrong password or user doesnt exist!! Try again!!");
                }
        },
        data: data
    });

    e.preventDefault();
}

export default LoginStaff;