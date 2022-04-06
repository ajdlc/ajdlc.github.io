import React, { Component } from 'react'

export class ContactMe extends Component {
  render() {
    return (
      <div className="container mt-5">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-sm-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Want to talk business?
                  </h5>
                  <div className="d-grid mt-3">
                    <a href="#" className="btn btn-primary">
                      Contact Me &#x2709;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default ContactMe