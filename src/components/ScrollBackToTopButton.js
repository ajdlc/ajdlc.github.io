import React, { Component } from 'react'
import '../css/scrollBackToTopButton.css';

export class ScrollBackToTopButton extends Component {
    constructor(props) {
        super(props);


        this.goToTop = this.goToTop.bind(this);
    }

    goToTop() {
        console.log(this);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

  render() {
    return (
      <button className="" id='scrollBackToTopButton' onClick={this.goToTop}>
          <i className="fa-solid fa-angle-up"></i>
      </button>
    )
  }
}

window.onscroll = function() {
    let scrollBtn = document.getElementById("scrollBackToTopButton");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

export default ScrollBackToTopButton