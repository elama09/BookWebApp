import React, { Component } from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

class Info extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <h2><i>INFO Here</i></h2>
          <h3><u>What size</u></h3>
          <h4>Or even smaller</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
        <li>Here something</li>
        <li>Here something</li>
        <li>Here something</li>
        <li>Here something</li>
        <h5>
          <a href="/">Link</a>
        </h5>
        <NavLink to="/books">Show Books</NavLink>

        <div className="footer">
            <h6 className="text-center">Footer here, © copyright Michael Tcharni / Rare Russian Books</h6>
        </div>
      </div>
    );
  }
}

export default Info;
