import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdLocalCarWash } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>


      {/* <section className='social-media'> */}
      <div className='social-media-wrap'>
        <div className='footer-logo'>
          <Link to='/' className='social-logo'>
            <MdLocalCarWash className='navbar-icon' style={{ fontSize: 24 }} />
            MY MOTOR WASH
          </Link>
        </div>
        <small className='website-rights'>Mike's Car Wash' © 2021</small>
        <div className='social-icons'>
          <Link
            className='social-icon-link'
            to='/'
            target='_blank'
            aria-label='Facebook'
          >
            <FaFacebook />
          </Link>

          <Link
            className='social-icon-link'
            to={
              '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
            }
            target='_blank'
            aria-label='Youtube'
          >
            <FaYoutube />
          </Link>
          <Link
            className='social-icon-link'
            to='/'
            target='_blank'
            aria-label='Twitter'
          >
            <FaTwitter />
          </Link>
          <Link
            className='social-icon-link'
            to='/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
