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
                        <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4" />
                        <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2">
                            <a id="login">Log out</a>
                        </div>
                        <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2 ">
                        </div>
                    </div>

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
                </div>
            </div>
        );
    }
};

export default MainPage;