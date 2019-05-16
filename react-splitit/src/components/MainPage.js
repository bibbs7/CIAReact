import React from "react";
import "./MainPage.css";

export class MainPage extends React.Component {
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
                            <img src="../../../assets/image/SplitIt.png" alt="SplitIT" className="responsive" />
                        </div>
                        <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4" />
                        <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2">
                            <a id="login">Log out</a>
                        </div>
                        <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2 ">
                        </div>
                    </div>
                    <nav className="navbar navbar-default col-sm-12 col-xs-12 col-md-12 col-lg-12 ">
                        <div className="container-fluid">
                            <div className="row" id="row2">
                                <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
                                    <ul className="nav navbar-nav ">
                                        <li className="col-sm-1 col-xs-1 col-md-1 col-lg-1"><a href="abola.pt"> <img className="homeButton" src="../../../assets/image/HOME_BUTTON.png" /></a></li>
                                        <li><a href="contact.asp">Who are we?</a></li>
                                        <li><a href="contact.asp">What is our mission?</a></li>
                                        <li><a href="about.asp">Statistics</a></li>
                                        <li><a href="about.asp">Where are we?</a></li>
                                        <li><a href="about.asp">Contacts</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <section className="col-sm-12 col-xs-12 col-md-12 col-lg-12" style={{ background: 'linear-gradient(to right, #ffb566 30%, #ffffff)' }}>
                        <div className="container-fluid">
                            <div className="row" id="row3">
                                <h1 className="col-sm-12 col-xs-12 col-md-12 col-lg-12">Welcome to SplitIt</h1>
                            </div>
                            <div className="row" id="row4">
                                <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4" />
                                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                <title>SplitIT</title>
                                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
                                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
                                <div className="container-fluid">
                                    <div className="row" id="row1">
                                        <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                            <img src="../../../assets/image/CUB_LOGO.png" alt="SplitIT" className="responsive" />
                                        </div>
                                        <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4" />
                                        <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4" />
                                    </div>
                                </div>
                                <div className="container-fluid">
                                    <div className="row" id="row2">
                                        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12 ">
                                            <div className="well  well-lg">Select the number of the serving table:</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-fluid">
                                    <div className="row" id="row3">
                                        <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                            <button className="mesa um">1</button>
                                        </div>
                                        <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                            <button className="mesa dois">2</button>
                                        </div>
                                        <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                            <button className="mesa tres">3</button>
                                        </div>
                                        <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                            <button className="mesa quatro">4</button>
                                        </div>
                                    </div>
                                    <div className="row" id="row4">
                                        <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                            <button className="mesa cinco">5</button>
                                        </div>
                                        <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                            <button className="mesa seis">6</button>
                                        </div>
                                        <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                            <button className="mesa sete">7</button>
                                        </div>
                                        <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                            <button className="mesa oito">8</button>
                                        </div>
                                    </div>
                                    <div className="row" id="row5">
                                        <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                            <button className="mesa nove">9</button>
                                        </div>
                                        <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                            <button className="mesa dez">10</button>
                                        </div>
                                        <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                            <button className="mesa onze">11</button>
                                        </div>
                                        <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                            <button className="mesa doze">12</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                    </div>
                                </div>
                            </div>
                        </div></section>
                </div></div>
        );


        function register(event) {
            var url = "users/add";
            var project = "http://localhost:3000";
            var home = "Homepage.js";

            var data = JSON.stringify({
                name: document.forms["register"]["name"].value,
                password: document.forms["register"]["password"].value,
                isAdmin: document.forms["register"]["isAdmin"].value,

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
                        window.location.replace(project + main);
                    }
                    else {
                        alert("No response");
                    }
                },
                error: function (response) {
                    if (response.status == "Bad request") {
                        console.log(response);
                        alert("Error: " + response.status + "  Wrong fields! Try again!!");
                    }
                },
                data: data
            });

            event.preventDefault();

        }
    }
};

export default MainPage;