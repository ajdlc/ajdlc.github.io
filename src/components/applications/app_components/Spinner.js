import React, { Component } from 'react'

export class Spinner extends Component {

  render() {
    return (
        <div className="col-12 text-center">
            <div>
                Loading Data
            </div>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
  }
}

export default Spinner