import '../css/home.css';
import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div className="container-fluid full-height">
          <div className="row">
              <div className="col-12 mt-5 landing text-center">
                  Welcome to my portfolio
              </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 text-center max-width-for-text below-landing">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem excepturi expedita repellat earum at beatae eum nihil sunt magnam, quidem velit nostrum possimus accusamus voluptatem odio deleniti officia accusantium facere hic temporibus corporis fugiat delectus placeat. Est excepturi quaerat adipisci? Consequuntur suscipit molestiae ipsum vitae. Ad quaerat rem libero.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor repellat perferendis nesciunt necessitatibus debitis eius blanditiis voluptas ex corrupti amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, optio?
                </p>
            </div>
          </div>
      </div>
    )
  }
}

export default Home