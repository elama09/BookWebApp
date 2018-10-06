import React, { Component } from 'react';
import Footer from './Footer';
import Books1 from './Books1';
import Books2 from './Books2';
import Books3 from './Books3';
import data from '../data.json';
import Book from './Book';
import Books4 from './Books4';
import BookComp from './BookComp';

const allBooks = data;
var foundBooks;
var test;

class BooksMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            current: 1,
            searchMode: false
        }
    }

    componentDidMount() {
        this.setState({ books: data })
        test = data.map((book) => {
            return <BookComp book={book} key={book.id}/>
        })
    }

    findBook = () => {
        if (!this.refs.search.value.length) {
            this.setState({ searchMode: false })
        }
        else {
            let tempBooks = [];
            let searchValue = this.refs.search.value.toLowerCase();
            this.state.books.forEach(element => {
                if (element.name.toLowerCase().includes(searchValue)) {
                    tempBooks.push(element);
                }
            });
            foundBooks = tempBooks.map((value) => {
                return <Book book={value} key={value.id} />
            });
            this.setState({ searchMode: true })
        }
    }

    pageOne = () => {
        this.setState({ current: 1 })
    }
    pageTwo = () => {
        this.setState({ current: 2 })
    }
    pageThree = () => {
        this.setState({ current: 3 })
    }
    pageFour = () => {
        this.setState({ current: 4 })
    }

    render() {
        return (
            
                <div className="container">
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Find book</span>
                        </div>
                        <input type="text" class="form-control" style={{ maxWidth: "250px" }} aria-describedby="inputGroup-sizing-sm"></input>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
                        </div>
                        <input type="text" class="form-control" style={{ maxWidth: "350px" }} aria-describedby="inputGroup-sizing-default"></input>
                    </div>

                    <div class="input-group input-group-lg">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-lg">Find</span>
                        </div>
                        <input onChange={this.findBook} ref="search" type="text" class="form-control" style={{ maxWidth: "550px" }} aria-describedby="inputGroup-sizing-lg"></input>
                    </div>
                
                {!this.state.searchMode && this.state.current === 1 && <Books1 pageTwo={this.pageTwo} pageThree={this.pageThree} pageFour={this.pageFour} />}
                {!this.state.searchMode && this.state.current === 2 && <Books2 pageOne={this.pageOne} pageThree={this.pageThree} pageFour={this.pageFour} />}
                {!this.state.searchMode && this.state.current === 3 && <Books3 pageOne={this.pageOne} pageTwo={this.pageTwo} pageFour={this.pageFour} />}
                {!this.state.searchMode && this.state.current === 4 && <Books4 pageOne={this.pageOne} pageTwo={this.pageTwo} pageThree={this.pageThree} />}

                {this.state.searchMode && foundBooks}

                <Footer />
            </div>
        );
    }
}

export default BooksMain;