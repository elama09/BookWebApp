import React, { Component } from 'react';
import Footer from './Footer';
import Books1 from './Books1';
import Books2 from './Books2';
import Books3 from './Books3';

class BooksMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            current: 1
        }
    }

    pageOne = () => {
        this.setState({current:1})
    }
    pageTwo = () => {
        this.setState({current:2})
    }
    pageThree = () => {
        this.setState({current:3})
    }

    render() {
        return (
            <div>
                {this.state.current === 1 && <Books1 pageTwo={this.pageTwo} pageThree={this.pageThree}/>}
                {this.state.current === 2 && <Books2 pageOne={this.pageOne} pageThree={this.pageThree}/>}
                {this.state.current === 3 && <Books3 pageOne={this.pageOne} pageTwo={this.pageTwo}/>}



                <Footer />
            </div>
        );
    }
}

export default BooksMain;