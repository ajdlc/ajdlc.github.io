import React, { Component } from 'react'

export class ExperienceComponent extends Component {

  render() {
    const bulletPoints = this.props.bulletPoints.map((bp, index) => {
        return <li key={index}>{bp}</li>
    });

    return (
      <div className="row">
        <div className="col-12 col-lg-8 align-self-lg-center mb-3">
            <div className="row">
                <div className="col-12">
                    <h2>
                        {this.props.title}
                    </h2>
                </div>
                <div className="col-12 fst-italic lead">
                    {this.props.employer}
                </div>
            </div>
        </div>
        <div className="col-12 col-lg-4 text-lg-end fw-bold">
            {this.props.timeEmployed}
        </div>
        <div className="col-12">
            <ul>
                {bulletPoints}
            </ul>
        </div>
        {!this.props.end &&
            <div className="col-12">
                <hr />
            </div>
        }
      </div>
    )
  }
}

export default ExperienceComponent