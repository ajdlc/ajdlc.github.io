import React, { Component } from 'react'
import Spinner from './app_components/Spinner';

export class InternetArchiveWaybackMachine extends Component {

  render() {
    return (
      <div className="row">
          <div className="col-12">
              <p className="h2">
                  Demonstration of Retrieving a Snapshot from the Wayback Machine of Archive.org
              </p>
          </div>
      </div>
    )
  }
}

export default InternetArchiveWaybackMachine