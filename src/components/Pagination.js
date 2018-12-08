import React, { Component } from "react";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <ul class="pagination justify-content-center mt-3 mb-3">
          <li class={this.props.activePage === 1 ? "mr-2 page-item active" : "mr-2 page-item"} >
            <a class="page-link" onClick={this.props.pageOne} href="#">
              1
            </a>
          </li>
          <li class={this.props.activePage === 2 ? `mr-2 page-item active` : `mr-2 page-item` }>
            <a class="page-link" onClick={this.props.pageTwo} href="#">
              2
            </a>
          </li>
          <li class={this.props.activePage === 3 ? `mr-2 page-item active` : `mr-2 page-item` }>
            <a class="page-link" onClick={this.props.pageThree} href="#">
              3
            </a>
          </li>
          <li class={this.props.activePage === 4 ? `mr-2 page-item active` : `mr-2 page-item` }>
            <a class="page-link" onClick={this.props.pageFour} href="#">
              4
            </a>
          </li>
          <li class={this.props.activePage === 5 ? `mr-2 page-item active` : `mr-2 page-item` }>
            <a class="page-link" onClick={this.props.pageFive} href="#">
              5
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Pagination;
