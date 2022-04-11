import React, { Component } from 'react'

export class sunriseSunsetResults extends Component {

  render() {
    if (this.props.data.hasOwnProperty("sunrise")) {
        return (
            <div className="col-12 mt-5">
                <div className="row justify-content-around">
                    <div className="col-12 text-center">
                        <h2>
                            Your Sunrise and Sunset times for today.
                        </h2>
                    </div>
                    <div className="col-12 col-sm-5">
                        <div className="card">
                            <div className="card-emoji text-center">
                                &#x1F305;
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h3>
                                        Sunrise
                                    </h3>
                                </div>
                                <div className="card-text">
                                    {this.props.data.sunrise}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-5">
                        <div className="card">
                            <div className="card-emoji text-center">
                                &#x1F307;
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h3>
                                        Sunset
                                    </h3>
                                </div>
                                <div className="card-text">
                                    {this.props.data.sunset}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
     else {
        return null;
    }
  }
}

export default sunriseSunsetResults