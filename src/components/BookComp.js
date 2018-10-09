import React, { Component } from 'react';
import bookpic from '../img-book.jpg';


class BookComp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let mailto = `mailto:michael.tcharni@gmail.com?Subject=${this.props.book.name}`

        return (
            <div className="row mt-4">

                <div className="col-4">
                    <img className="img-fluid" src={bookpic} style={{
                        maxWidth: "100%",
                        minWidth: "100px",
                        margin: "auto",
                    }} alt="book"></img>
                </div>
                <div className="col-8">
                    <div class="">
                        <h4 class="">{this.props.book.name}, written by {this.props.book.author}</h4>
                        <button class="btn btn-secondary">More info</button>
                        

                        <h5> Price: {this.props.book.price}€</h5>
                        <p>Question about this book?&nbsp;
                            <a href={mailto} target="_top">Send Mail</a>
                        </p>
                        <i>Desription:</i><p>{this.props.book.text}</p>
                    </div>

                </div>

            </div>
        );
    }
}

export default BookComp;