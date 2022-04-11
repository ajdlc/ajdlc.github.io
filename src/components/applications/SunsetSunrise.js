import React, { Component } from 'react'
import SunriseSunsetResults from './app_components/SunriseSunsetResults';
import Spinner from './app_components/Spinner';
import '../../css/sunsetSunrise.css';

export class SunsetSunrise extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: 0.00,
            longitude: 0.00,
            data: {},
            searchDisabled: true,
            showResults: false,
            showSpinner: false
        }

        this.getLocation = this.getLocation.bind(this);
        this.searchSunriseSunset = this.searchSunriseSunset.bind(this);
        this.handleChangeLatitude = this.handleChangeLatitude.bind(this);
        this.handleChangeLongitude = this.handleChangeLongitude.bind(this);
        this.updateSearchButton = this.updateSearchButton.bind(this);
    }

    handleChangeLatitude(event) {
        this.setState({
            latitude: event.target.value
        });

        this.updateSearchButton();
    }

    handleChangeLongitude(event) {
        this.setState({
            longitude: event.target.value
        });

        this.updateSearchButton();
    }

    updateSearchButton() {
        this.setState((state) => ({
            searchDisabled: !(state.latitude !== 0 && state.longitude !== 0)
        }));
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });

            // Enable the submit button for custom searching.
            this.updateSearchButton();

            // Perform the search
            this.searchSunriseSunset();
        })
    }

    searchSunriseSunset() {
        this.setState({
            showSpinner: true
        });

        fetch(`https://api.sunrise-sunset.org/json?lat=${this.state.latitude}&lng=${this.state.longitude}&date=today`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            this.setState({
                data: data.results,
                showResults: true,
                showSpinner: false
            });
        })
    }

  render() {
    return (
      <div className="row">
          <div className="col-12">
              <h2>
                  Demonstration of the Sunset and Sunrise API
              </h2>
              URL: <a href="https://sunrise-sunset.org/api" className="btn btn-link" target="_blank" rel="noreferrer">https://sunrise-sunset.org/api</a>
          </div>
          {'geolocation' in navigator ?
            <div className="col-12 col-sm-6 align-self-center">
                <button className="btn btn-primary btn-lg" onClick={this.getLocation}>
                    Use my Location
                </button>
            </div>
            :
            <div className="col-12 col-sm-6 align-self-center">
                <button className="btn btn-primary" disabled>
                    Geolocation services disabled in Browser
                </button>
            </div>
          }
          <div className="col-12 col-sm-6">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" className='form-control' value={this.state.latitude} onChange={this.handleChangeLatitude} />

              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" className='form-control' value={this.state.longitude} onChange={this.handleChangeLongitude} />

              <button className="btn btn-success mt-3" onClick={this.searchSunriseSunset} disabled={this.state.searchDisabled}>
                  Submit
              </button>
          </div>
          {this.state.showSpinner &&
            <Spinner></Spinner>
          }
          <SunriseSunsetResults data={this.state.data} showResults={this.state.showResults}></SunriseSunsetResults>
      </div>
    )
  }
}

export default SunsetSunrise