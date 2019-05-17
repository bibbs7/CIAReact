import React from "react";
import "./Homepage.css";
import logo from '../SplitLogo.png';


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
                            
                </div> 
                <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4" />
                <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2">
                  <a id="login">Log in</a>
                </div>
                        <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2 ">



                </div>         
              </div>
             
              <section className="col-sm-12 col-xs-12 col-md-12 col-lg-12" style={{background: 'linear-gradient(to right, #ffb566 30%, #ffffff)'}}>
                <div className="container-fluid">      
                  <div className="row" id="row3">
                    <h1 className="col-sm-12 col-xs-12 col-md-12 col-lg-12" />
                  </div>
                  <div className="row" id="row4">
                    <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6">
                                    <div id="circlemanager" className="circle">Administrator</div>



                                </div>
                    <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6">
                      <div id="circlestaff" className="circle">Staff</div>







                                </div>
                  </div>
                </div>
              </section>
            </div></div>
        );
    }
};

export default Homepage;
