import React, { Component } from 'react';
import Footer from './Footer';
import Book from './Book';
import bookpic from '../img-book.jpg';
import data from '../data.json';

class Books4 extends Component {
    state = {}

    render() {
        return (
            <div className="container">
                


                <nav>
                    <ul class="pagination pagination-lg justify-content-center mt-2 mb-5">
                        <li class="page-item"><a class="page-link" onClick={this.props.pageOne} href="#">1</a></li>
                        <li class="page-item"><a class="page-link" onClick={this.props.pageTwo} href="#">2</a></li>
                        <li class="page-item"><a class="page-link" onClick={this.props.pageThree} href="#">3</a></li>
                        <li class="page-item active"><a class="page-link" >4</a></li>
                    </ul>
                </nav>


            </div>
        );
    }
}

export default Books4;