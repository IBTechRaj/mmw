import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
// import { Button } from '../../Button';
import './gallery.css';
// import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <Container fluid className="container portfolio">
      <Row className="portfolio">
        {/* <div className="container"> */}
        <div className="section-header">
          <h2 className="section-title text-center wow fadeInDown">Gallery</h2>
          <p className="text-center wow fadeInDown">
            Here are some of the vehicles serviced by us <br />
            And you can see how they shine.
          </p>
        </div>
      </Row>
      {/* <Row>
        <div className="text-center">
          <ul className="portfolio-filter">
            <li><a className="active" href="#" data-filter="*">Show All</a></li>
            <li><a href="#" data-filter=".designing">Exterior</a></li>
            <li><a href="#" data-filter=".mobile">Interior</a></li>
          </ul>
        #portfolio-filter
        </div>
      </Row>
 */}

      <Row >
        <Col className="portfolio-item designing">
          <div className="portfolio-item-inner">
            <Image className="imgResponsive" src="images/portfolio/1.jpg" fluid alt="" />
            <div className="portfolio-info">
              <a className="preview" href="images/portfolio/1.jpg" rel="prettyPhoto"><i className="fa fa-search" /></a>
            </div>
          </div>
        </Col>
        {/*/.portfolio-item*/}
        <Col className="portfolio-item mobile development">
          <div className="portfolio-item-inner">
            <Image className="imgResponsive" src="images/portfolio/2.jpg" fluid alt="" />
            <div className="portfolio-info">
              <a className="preview" href="images/portfolio/2.jpg" rel="prettyPhoto"><i className="fa fa-search" /></a>
            </div>
          </div>
        </Col>
        {/* </div> */}
        <Col className="portfolio-item designing">
          <div className="portfolio-item-inner">
            <Image className="imgResponsive" src="images/portfolio/3.jpg" fluid alt="" />
            <div className="portfolio-info">
              <a className="preview" href="images/portfolio/3.jpg" rel="prettyPhoto"><i className="fa fa-search" /></a>
            </div>
          </div>
        </Col>
        {/*/.portfolio-item*/}
        <Col className="portfolio-item mobile">
          <div className="portfolio-item-inner">
            <Image className="imgResponsive" src="images/portfolio/4.jpg" fluid alt="" />
            <div className="portfolio-info">
              <a className="preview" href="images/portfolio/4.jpg" rel="prettyPhoto"><i className="fa fa-search" /></a>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        {/*/.portfolio-item*/}
        <Col className="portfolio-item designing development">
          <div className="portfolio-item-inner">
            <Image className="imgResponsive" src="images/portfolio/5.jpg" fluid alt="" />
            <div className="portfolio-info">
              <a className="preview" href="images/portfolio/5.jpg" rel="prettyPhoto"><i className="fa fa-search" /></a>
            </div>
          </div>
        </Col>
        {/*/.portfolio-item*/}
        <Col className="portfolio-item mobile">
          <div className="portfolio-item-inner">
            <Image className="imgResponsive" src="images/portfolio/6.jpg" fluid alt="" />
            <div className="portfolio-info">
              <a className="preview" href="images/portfolio/6.jpg" rel="prettyPhoto"><i className="fa fa-search" /></a>
            </div>
          </div>
        </Col>
        {/*/.portfolio-item*/}
        <Col className="portfolio-item designing development">
          <div className="portfolio-item-inner">
            <Image className="imgResponsive" src="images/portfolio/7.jpg" fluid alt="" />
            <div className="portfolio-info">
              <a className="preview" href="images/portfolio/7.jpg" rel="prettyPhoto"><i className="fa fa-search" /></a>
            </div>
          </div>
        </Col>
        {/*/.portfolio-item*/}
        <Col className="portfolio-item mobile">
          <div className="portfolio-item-inner">
            <Image className="imgResponsive" src="images/portfolio/8.jpg" fluid alt="" />
            <div className="portfolio-info">
              <a className="preview" href="images/portfolio/8.jpg" rel="prettyPhoto"><i className="fa fa-search" /></a>
            </div>
          </div>
        </Col>

      </Row >
    </Container >

  )
}

export default Gallery