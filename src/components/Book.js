import React, { Component } from 'react';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h5>{this.props.book.name}, author: {this.props.book.author}</h5>
                <p>{this.props.book.text}, price: {this.props.book.price}€</p>
            </div>
        );
    }
}

export default Book;