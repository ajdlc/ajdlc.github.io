import React, { Component } from 'react'

export class ContactMe extends Component {
  render() {
    return (
      <div className="container mt-5">
          <div className="row justify-content-center text-center">
              <div className="col-12">
                  Like what you see?
              </div>
              <div className="col-12 col-sm-auto mt-3">
                  <div className="d-grid">
                      <button className="btn btn-primary">
                          Contact Me
                      </button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default ContactMe