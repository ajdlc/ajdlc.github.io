import React, { Component } from 'react'
import Book from './app_components/Book';
import Spinner from './app_components/Spinner';
import '../../css/gutendexDemo.css';

export class GutendexDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            formats: []
        };

        this.getBooks = this.getBooks.bind(this);
    }

    async getBooks() {
        let url = "https://gutendex.com/books";

        let results = await fetch(url);
        let data = await results.json();

        this.setState({
            books: data.results
        });

        
    }

    async componentDidMount() {
        await this.getBooks();
        console.log(this.state.books);
    }

  render() {

    const books = this.state.books.map((book, index) => {
        if (index === 1) {
            return <Book key={book.id} id={book.id} carouselClasses={"carousel-item active"} title={book.title} authors={book.authors} subjects={book.subjects} link={book.formats["text/html"]}></Book>
        } else {
            return <Book key={book.id} id={book.id} carouselClasses={"carousel-item"} title={book.title} authors={book.authors} subjects={book.subjects} link={book.formats["text/html"]}></Book>
        }
    })

    return (
        <div className="row">
            <div className="col-12">
                <h2>
                    Demonstration of retrieving data from the Gutendex API
                </h2>
                URL: <a href="https://gutendex.com/" className="btn btn-link" target="_blank" rel="noreferrer">https://gutendex.com/</a>
            </div>
            <div className="col-12">
                <div className="row justify-content-center">
                    {this.state.books.length < 1 &&
                        <Spinner></Spinner>
                    }
                    <div className="col-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div className="carousel-inner">
                                {books}
                            </div>
                            <button className="carousel-control-prev carousel-background-left-color carousel-control-width" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-background-right-color carousel-control-width" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default GutendexDemo