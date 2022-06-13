// https://www.npmjs.com/package/react-responsive-carousel
// import "react-responsive-carousel/lib/styles/carousel.min.css"

// var React = require('react');
// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;
import Button from '../../Button'


import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class MyCarousel extends Component {
  render() {
    return (
      <Carousel interval={5000} infiniteLoop={true} showThumbs={false} autoPlay={true}>


        <div>
          <img src="assets/bg1.jpg" />
          <p className="legend " style={{ fontSize: 30, color: '#fb6a33' }}>Make your Car Shine with Our Service</p>
        </div>
        <div>
          <img src="assets/bg2.jpg" />
          <p className="legend" style={{ fontSize: 30, color: '#fb6a33' }}>Your Satisfaction is our Motto</p>
        </div>
        {/* <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div> */}
      </Carousel >
    );
  }
}

export default MyCarousel
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls