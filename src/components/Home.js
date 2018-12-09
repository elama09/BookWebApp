import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="jumbotron">
          <h1 className="display-3">
            Welcome to the site - <i>Rare Russian Books</i>
          </h1>
          <p className="homeText">Rare books from a privat library for sale</p>
          <p className="homeText">
            Please, have a look, and if any question comes to your mind I will
            be glad to answer
          </p>
          <p className="homeText">
            For more information please click
            <NavLink to="/info">
              <b> Info-tab</b>
            </NavLink>
          </p>

          <hr />
          <NavLink className="btn btn-primary btn-lg btn-block" to="/books">
            Show Books
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Home;
