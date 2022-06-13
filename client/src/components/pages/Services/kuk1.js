import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import HeroSection from '../../HeroSection';
// import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
// import Pricing from '../../Pricing';

import { FaHeart, FaCompass, FaBell } from 'react-icons/fa';
import './services.css'

function Services() {
  return (
    <>
      {/* <div className="row">
      <div className="section-header">
        <h2 className="section-title text-center wow fadeInDown">Services</h2>
        <p className="text-center wow fadeInDown">
          Water wash <br />
          Interial cleaning<br />
          Fixing minor mechanical miissues<br />
        </p>
      </div>
      </div> */}

      <div className="row">
        <div className="features">
          <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="0ms">
            <div className="media service-box">
              <div className="pull-left">
                <i className="fa faHeart"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Car Checkup</h4>
                <p>
                  Backed by some of the biggest names in the industry, Firefox
                  OS is an open platform that fosters greater
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="100ms">
          <div className="media service-box">
            <div className="pull-left">
              <i className="fa faCompass"></i>
            </div>
            <div className="media-body">
              <h4 className="media-heading">Car Wash</h4>
              <p>
                Backed by some of the biggest names in the industry, Firefox
                OS is an open platform that fosters greater
              </p>
            </div>
          </div>
        </div>


        <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="200ms">
          <div className="media service-box">
            <div className="pull-left">
              <i className="fa faBell"></i>
            </div>
            <div className="media-body">
              <h4 className="media-heading">Car Repair</h4>
              <p>
                Morbi vitae tortor tempus, placerat leo et, suscipit lectus.
                Phasellus ut euismod massa, eu eleifend ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )



}

export default Services;
