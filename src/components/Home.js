import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.state = {}
    };

    render() {
        return (
            <div className="container mt-4">
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to site..</h1>
                    <p className="lead">Some more information about this booksite</p>
                    <hr />
                    <p>And more clever things here</p>
                    <NavLink className="btn btn-primary btn-lg btn-block" to="/books">More info / Show Books</NavLink>
                </div>
            </div>

        );
    }
}

export default Home;