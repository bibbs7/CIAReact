import React from "react";
import "./Homepage.css" ;


export class Homepage extends React.Component {
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
                  <img src="../../../assets/image/CUB_LOGO.png" alt="SplitIT" className="responsive" />
                </div> 
                <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4" />
                <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2">
                  <a id="login">Log in</a>
                </div>
                <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2 ">
                  <a id="registar" href="https://www.w3schools.com/html/">Registar</a>
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
              <section className="col-sm-12 col-xs-12 col-md-12 col-lg-12" style={{background: 'linear-gradient(to right, #ffb566 30%, #ffffff)'}}>
                <div className="container-fluid">      
                  <div className="row" id="row3">
                    <h1 className="col-sm-12 col-xs-12 col-md-12 col-lg-12" />
                  </div>
                  <div className="row" id="row4">
                    <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6">
                      <div id="circlemanager" className="circle">Manager</div>
                                    <button id="bmanager" className="button" onclick="window.location= 'http://localhost:3000' + '/LoginAdmin' " >Administrator Login</button>
                    </div>
                    <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6">
                      <div id="circlestaff" className="circle">Staff</div>
                                    <button id="bstaff" className="button" onclick="window.location= 'http://localhost:3000' + '/LoginStaff' " >Staff Login</button>
                    </div>
                  </div>
                </div>
              </section>
            </div></div>
        );
    }
};

export default Homepage;
