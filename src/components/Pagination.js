import React, { Component } from "react";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <ul class="pagination pagination-lg justify-content-center mt-2 mb-5">
          <li class={ this.props.activePage === 1 ? `page-item active` : `page-item` } >
            <a class="page-link" onClick={this.props.pageOne} href="#">
              1
            </a>
          </li>
          <li class={ this.props.activePage === 2 ? `page-item active` : `page-item` }>
            <a class="page-link" onClick={this.props.pageTwo} href="#">
              2
            </a>
          </li>
          <li class={ this.props.activePage === 3 ? `page-item active` : `page-item` }>
            <a class="page-link" onClick={this.props.pageThree} href="#">
              3
            </a>
          </li>
          <li class={ this.props.activePage === 4 ? `page-item active` : `page-item` }>
            <a class="page-link" onClick={this.props.pageFour} href="#">
              4
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Pagination;
