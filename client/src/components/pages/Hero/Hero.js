import React from 'react';
import { Row } from 'react-bootstrap'

import './hero.css'

const Hero = () => {
  return (

    <section className="hero-text">
      <Row className="container text-center">
        <div className="row">
          <h2>Make your Car Shine with Our Service</h2>
          <p>
            We are the pioneers in rendering home service for your car wash.
          </p>
        </div>
      </Row>
    </section>
  );
}

export default Hero