import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as firebase from "firebase";

class BookComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      pictureUrl1: null,
      pictureUrl2: null,
      pictureUrl3: null
    };
    this.toggle = this.toggle.bind(this);
    this.imagesRef = firebase
      .storage()
      .ref()
      .child("BooksPictures");
  }

  componentDidMount() {
    this.getImageUrlFromFirestorage(1);
    this.getImageUrlFromFirestorage(2);
    this.getImageUrlFromFirestorage(3);
  }

  getImageUrlFromFirestorage(picNumber) {
    this.imagesRef
      .child(`${this.props.book.id}img${picNumber}.jpg`)
      .getDownloadURL()
      .then(url => {
        switch (picNumber) {
          case 1:
          this.setState({pictureUrl1: url})
            break;
          case 2:
          this.setState({pictureUrl2: url})
            break;
          case 3:
          this.setState({pictureUrl3: url})
            break;
          default:
            break;
        }
      })
      .catch(err => err);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    let mailto = `mailto:russian.books.finland@gmail.com?Subject=${
      this.props.book.name
    },BookID:${this.props.book.id}`;

    return (
      <div>
        <div className="row mt-3">
          <div className="col-4">
            <img
              className="img-fluid fromImage"
              src={this.state.pictureUrl1}
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
              <h4>
                {this.props.book.author} - {this.props.book.year}
              </h4>
              <h5>{this.props.book.country}</h5>
              <h5>Condition: {this.props.book.condition}</h5>

              <h5> Price: {this.props.book.price}€</h5>
              <Button className="btn-sm" color="info" onClick={this.toggle}>
                More photos
              </Button>
              <br />
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
                    alt="No more photos of this book"
                    className="fromImage"
                    style={{
                      maxWidth: "100%"
                    }}
                    src={this.state.pictureUrl2}
                  />
                  <img
                    alt=""
                    className="fromImage"
                    style={{
                      maxWidth: "100%"
                    }}
                    src={this.state.pictureUrl3}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button outline color="primary" onClick={this.toggle}>
                    Back
                  </Button>
                  <a href={mailto} target="_top">
                    <Button outline color="success">
                      Send email about this book
                    </Button>
                  </a>
                </ModalFooter>
              </Modal>
              <br />
              <h5>Description:</h5>
              <p>{this.props.book.text}</p>
              <p>
                Question about this book?&nbsp;
                <a href={mailto} target="_top">
                  Send Mail
                </a>
              </p>
              {this.props.book.link ? (
                <a target="_blank" href={this.props.book.link}>
                  More info about the book
                </a>
              ) : null}
              <br />
              {this.props.book.details && (
                <i>Details: {this.props.book.details}</i>
              )}
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default BookComp;
