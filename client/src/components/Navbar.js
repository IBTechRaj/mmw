import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdLocalCarWash } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return (
      window.removeEventListener('resize', showButton)
    )
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdLocalCarWash className='navbar-icon' style={{ fontSize: 24, color: '#fb6a33', marginBottom: '12' }} />
              <p style={{ fontSize: 30, fontWeight: 900, color: '#fb6a33' }}>MY MOTOR WASH</p>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/whowe'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Who we
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/pricing'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Pricing
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/gallery'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Gallery
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link
                  to='/team'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Team
                </Link>
              </li> */}
              <li className='nav-item'>
                <Link
                  to='/contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link
                  to='/register'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Register
                </Link>
              </li> */}
              <li className='nav-item'>
                <Link
                  to='/login'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;



  //           <div class="dropdown " style="float:left;">
  //             <button class="dropbtn ">Login</button>
  //             <div class="dropdown-content" style="left:0;">
  //               <a href="#" data-toggle="modal" data-target="#loginModal">Customer</a>
  //               <a href="#">ServiceProvider</a>
  //               <a href="#">Admin</a>
  //             </div>
  //           </div>
  //         </ul>
  //       </div>
  //     </div>
  //     <!--/.container-->
  //   </nav>
  //   <!--/nav-->
  // </header>
  // <!--/header-->