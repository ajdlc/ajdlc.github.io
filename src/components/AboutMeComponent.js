import React, { Component } from 'react'

export class AboutMeComponent extends Component {

  render() {
    return (
        <div className="row justify-content-around mt-3">
            <div className="col-12 col-lg-6 align-self-lg-center mb-3">
                <h1>{this.props.title} <i className={this.props.iconClasses}></i></h1>
            </div>
            <div className="col-12 col-lg-6">
                <p>
                    {this.props.description}
                </p>
            </div>
            <div className="col-12">
                <hr />
            </div>
        </div>
    )
  }
}

export default AboutMeComponent