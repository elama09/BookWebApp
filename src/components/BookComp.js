import React, { Component } from 'react';
import bookpic from '../img-book.jpg';


class BookComp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="card text-center">
                <div class="card-header">
                    Very Old Book
                </div>
                <img src={bookpic}></img>
                <div class="card-body">
                    <h5 class="card-title">{this.props.book.name} && {this.props.book.author}</h5>
                    <p class="card-text">{this.props.text}</p>
                    <a class="btn btn-secondary">Go somewhere</a>
                </div>
                <div class="card-footer text-muted">
                    Price: {this.props.price}€
                </div>
            </div>
        );
    }
}

export default BookComp;