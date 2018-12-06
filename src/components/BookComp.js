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
      <div>
        <div className="row mt-3">
          <div className="col-4">
            <img
              className="img-fluid"
              src={`http://www.elisanet.fi/romantestaus/images/${
                this.props.book.id
              }img1`}
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
              <h4 class="">{this.props.book.name}</h4>
              <h4>{this.props.book.author} - {this.props.book.year}</h4>
              <h5>{this.props.book.country}</h5>
              <h5>Condition: {this.props.book.condition}</h5>

              
              <p>
                Question about this book?&nbsp;
                <a href={mailto} target="_top">
                  Send Mail
                </a>
              </p>
              <h5> Price: {this.props.book.price}€</h5>
              <Button className="btn-sm" color="info" onClick={this.toggle}>
                More photos
              </Button>
              <br/>
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
                    src={`http://www.elisanet.fi/romantestaus/images/${this.props.book.id}img2`}
                  />
                  <img
                    alt="A Book"
                    src={`http://www.elisanet.fi/romantestaus/images/${this.props.book.id}img3`}
                  />
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
              <i>Description:</i>
              <p>{this.props.book.text}</p>
              <a target="_blank" href={this.props.book.link}>More info</a>
              <br/>
              {
                this.props.book.details && <i>Details: {this.props.book.details}</i>
              }
              
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default BookComp;
