import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark" style={{
                backgroundColor: "#4d3e18"
            }} >
                <NavLink to="/home"><a className="navbar-brand" href="">Home</a></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink to="/books"><a className="nav-link" href="">Books <span className="sr-only">(current)</span></a></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/info"><a className="nav-link" href="">Info</a></NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Something</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Sales Of The Most Rare Russian Books
    </span>
                </div>
            </nav>
        );
    }
}

export default Navbar;