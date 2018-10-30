import React, { Component } from "react";
import bookpic from "../img-book.jpg";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class BookComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    let mailto = `mailto:michael.tcharni@gmail.com?Subject=${
      this.props.book.name
    }`;

    return (
      <div className="row mt-3">
        <div className="col-4">
          <img
            className="img-fluid"
            src={bookpic}
            style={{
              maxWidth: "100%",
              minWidth: "100px",
              margin: "auto"
            }}
            alt="book"
          />
        </div>
        <div className="col-8">
          <div class="">
            <h4 class="">
              {this.props.book.name}, written by {this.props.book.author}
            </h4>
            <button class="btn btn-secondary">More info</button>

            <h5> Price: {this.props.book.price}€</h5>
            <p>
              Question about this book?&nbsp;
              <a href={mailto} target="_top">
                Send Mail
              </a>
            </p>
            <Button color="info" onClick={this.toggle}>
              More photos
            </Button>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>
                {this.props.book.name}
              </ModalHeader>
              <ModalBody>
                <img
                  alt="A Book"
                  src={`www.google.com/${this.props.book.id}`}
                />
                Some info or some text about this book, if needed
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>
                  Back
                </Button>
                <a href={mailto} target="_top">
                  <Button color="success">Send email about this book</Button>
                </a>
              </ModalFooter>
            </Modal>
            <br />
            <i>Desription:</i>
            <p>{this.props.book.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BookComp;
