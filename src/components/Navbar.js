import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          backgroundColor: "rgb(43, 39, 28)"
        }}
      >
        <NavLink to="/home">
          <a className="navbar-brand" href="">
            Home
          </a>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/books">
                <a className="nav-link" href="">
                  Books <span className="sr-only">(current)</span>
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/info">
                <a className="nav-link" href="">
                  Info
                </a>
              </NavLink>
            </li>
          </ul>
          <span className="navbar-text">
            <i>Sales</i> Of The Most <i>Rare</i> Russian <i>Books</i>
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
