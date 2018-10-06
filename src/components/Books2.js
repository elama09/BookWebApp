import React, { Component } from 'react';
import bookpic from '../img-book.jpg';

class Books2 extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() {
        return (
            <div className="container">
                <h2>Books 2!!!!!</h2>

                <div class="card-deck">
                    <div class="card border-dark">
                        <img class="card-img-top" height="250" src={bookpic} alt="Book"></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Very small text here</small></p>
                            <button className="btn btn-outline-secondary">Info</button>
                        </div>
                    </div>
                    <div class="card border-primary">
                        <img class="card-img-top" height="250" src={bookpic} alt="Book"></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-muted">Very small text here</small></p>
                            <button className="btn btn-outline-primary">Info</button>
                        </div>
                    </div>
                    <div class="card bg-light">
                        <img class="card-img-top" height="250" src={bookpic} alt="Book"></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Very small text here</small></p>
                            <button className="btn btn-info">Info</button>
                        </div>
                    </div>
                </div>



                <div class="card-group">
                    <div class="card">
                        <img class="card-img-top" src="http://www.elisanet.fi/romantestaus/images/2image" alt=""></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">250€</small>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={bookpic} alt=""></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                            <big class="">100€</big>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={bookpic} alt=""></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                            <p><strong>200€</strong></p>
                        </div>
                    </div>
                </div>




                <div class="card" style={{
                    width: "500"
                }}>
                    <img class="card-img-top" src={bookpic} alt="" style={{
                        maxWidth: "100px"
                    }}></img>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>

                </div>


                <nav>
                    <ul class="pagination pagination-lg justify-content-center mt-2 mb-5">
                        <li class="page-item"><a class="page-link" onClick={this.props.pageOne} href="#">1</a></li>
                        <li class="page-item active"><a class="page-link">2</a></li>
                        <li class="page-item"><a class="page-link" onClick={this.props.pageThree} href="#">3</a></li>
                        <li class="page-item"><a class="page-link" onClick={this.props.pageFour} href="#">4</a></li>
                    </ul>
                </nav>

                
            </div>
        );
    }
}

export default Books2;