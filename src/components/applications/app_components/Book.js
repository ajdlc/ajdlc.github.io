import React, { Component } from 'react'

export class Book extends Component {

  render() {

    const subjects = this.props.subjects.map((sub, index) => {
        return <p key={index} className="lead">{sub}</p>
    })

    const authors = this.props.authors.map((author, index) => {
        return <p key={index} className="lead">{author.name}</p>
    })

    return (
        <div className={this.props.carouselClasses}>
            <div className="card">
                <div className="card-header text-center">
                    Book ID: {this.props.id}
                </div>
                <div className="card-body">
                    <h2 className="card-title text-center fst-italic">{this.props.title}</h2>
                    <div className="card-text mt-3">
                        <div className="row justify-content-center text-center text-sm-start">
                            <div className="col-12 col-md-5">
                                <h5>Author(s)</h5>
                                <div>
                                    {authors}
                                </div>
                            </div>
                            <div className="col-12 col-md-5">
                                <h5>Subjects</h5>
                                <div>
                                    {subjects}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href={this.props.link} className="btn btn-primary" target="_blank" rel="noreferrer">View EPUB</a>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Book