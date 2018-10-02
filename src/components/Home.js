import React, { Component } from 'react';
import Footer from './Footer';

class Home extends Component {
    constructor() {
        super();
        this.state = {}
    };

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to site..</h1>
                    <p className="lead">Some more information about this booksite</p>
                    <hr className="my-4" />
                    <p>And more clever things here</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">More info push here</a>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Home;