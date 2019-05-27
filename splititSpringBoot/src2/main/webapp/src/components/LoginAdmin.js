import React from "react";
import "./LoginAdmin.css";
import $ from "jquery";

export class LoginAdmin extends React.Component {


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
                       
                    </div>
                  
                    <section className="col-sm-12 col-xs-12 col-md-12 col-lg-12" style={{ background: 'linear-gradient(to right, #ffb566 30%, #ffffff)' }}>
                        <div className="container-fluid">
                            <div className="row" id="row3">
                                <h1 className="col-sm-12 col-xs-12 col-md-12 col-lg-12">Login Administrator</h1>
                            </div>
                            <div className="row" id="row4">
                                <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4" />
                                <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                    <label htmlFor="adminId">Admin ID : </label>
                                    <input type="text" className="form-control" id="adminId" name="adminId" placeholder="id" />
                                    <label htmlFor="password">Password :</label>
                                    <input type="text" className="form-control" id="password" name="password" placeholder="password" />
                                </div>
                                <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                    <a href="#" className="myButton" onClick= {loginAdmin}>Login</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div></div>
        );
    }
};


function loginAdmin(event) {
    var url = "user/loginAdmin";
    var project = "https://webapp-190527094807.azurewebsites.net/";
    var main = "Mainpage.js";

    var data = JSON.stringify({
        id: document.getElementById("adminId").value,
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
                window.location.replace("https://webapp-190527094807.azurewebsites.net/mainpage");
            }
            else {
                alert("No response");
            }
        },
        error: function (response) {
            if (response.status === "Unauthorized") {
                console.log(response);
                alert("Error: " + response.status + "  You must be an Admin to login here. Try the staff login");
            }
            else
                if (response.status === "Forbidden") {
                    console.log(response);
                    alert("Error: " + response.status + "  Wrong path");
                }
                else
                    if (response.status === "Bad request") {
                        console.log(response);
                        alert("Error: " + response.status + "  Wrong password! Try again!!");
                    }
        },
        data: data
    });

    // event.preventDefault();
}

export default LoginAdmin;