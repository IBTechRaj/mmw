import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdLocalCarWash } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';


const Navbar = ({ loggedIn, setLoggedIn }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const onOpenLoginModal = () => {
    setOpenLogin(true);

  }
  const onCloseLoginModal = () => setOpenLogin(false);
  const onOpenSignupModal = () => {
    setOpenSignup(true)

  }
  const onCloseSignupModal = () => setOpenSignup(false);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')


  const loginData = {
    "email": email,
    "password": password,
  }

  const signupData = {
    "email": email,
    "password": password,
  }


  // const handleSubmitSignup = async (event) => {
  //   event.preventDefault();
  //   if (password === passwordConfirmation) {
  //     console.log('signing up')
  //     try {
  //       const res = await axios.post('http://localhost:3001/signup ', signupData);
  //       const { token, user } = res.data;
  //       console.log('res', res.data);
  //       if (token) {
  //         setLoggedIn(true);
  //         onCloseSignupModal()
  //         localStorage.setItem('token', token);
  //         console.log('jwt: ', token)
  //       }
  //     }
  //     catch (error) {
  //       console.log('oh, no', error);
  //     }
  //   }
  //   else {
  //     console.log('Passwords should match')
  //   }
  // }

  const handleSubmitSignup = async (event) => {
    event.preventDefault();
    if (password === passwordConfirmation) {
      console.log('signing up')
      fetch("http://localhost:3001/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: password,
          },
        }),
      })
        .then((res) => {
          if (res.ok) {
            console.log(res.headers.get("Authorization"));
            localStorage.setItem("token", res.headers.get("Authorization"));
            return res.json();
          } else {
            throw new Error(res);
          }
        })
        .then((json) => console.dir(json))
        .catch((err) => console.error(err));

    }
    else {
      console.log('Passwords should match')
    }
  }

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    console.log('logging')
    try {
      const res = await axios.post('http://localhost:3001/users/sign_in ', loginData);
      const { token, user } = res.data;
      console.log('res', res.data);
      if (token) {
        setLoggedIn(true);
        onCloseLoginModal()
        localStorage.setItem('token', token);
        console.log('jwt: ', token)
      }
    }
    catch (error) {
      console.log('Err: ', error);
    }
  }
  const handleLogout = () => {
    delete axios.defaults.headers.common.Authorization;
    setLoggedIn(false)
    localStorage.removeItem('token');
  }

  // const handleLogout = (){

  // }
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

              <li className='nav-item'>
                <Link
                  to='/contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>

              {/* </ul> */}
              {/* <ul> */}
              {/* {(openLogin || openSignup) ? ( */}
              {(loggedIn) ? (
                <li>
                  <button className='nav-links' style={{ backgroundColor: 'black', border: 'none' }} onClick={handleLogout}>Logout</button>
                </li>
              )
                : (
                  <li>
                    <button className='nav-links' style={{ backgroundColor: 'black', border: 'none' }} onClick={onOpenLoginModal}>Login</button>
                  </li>
                )
              }
              <li>
                <button className='nav-links' style={{ backgroundColor: 'black', border: 'none' }} onClick={onOpenSignupModal}>Signup</button>
              </li>
            </ul>

          </div>
        </nav>
      </IconContext.Provider>
      <Modal open={openLogin} onClose={onCloseLoginModal} centre>
        <h2>Login</h2>
        <form onSubmit={handleSubmitLogin}>
          <label className="justify-left w-100 px-5">
            <input
              className="form-control"
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={event => {
                setEmail(event.target.value)
              }}
            />
            <br />
            <input
              className="form-control"
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={event => {
                setPassword(event.target.value)
              }}
            />
          </label>
          <br /><br />
          <label className="justify-left w-100 px-5">
            {' '}
            <input className="w-100 btn btn-custom" type="submit" />
          </label>

          {/* <div>
            or <Link to="/signup">Sign up</Link>
          </div> */}
        </form>
      </Modal>
      <Modal open={openSignup} onClose={onCloseSignupModal} centre>
        <h2>Signup</h2>
        <form onSubmit={handleSubmitSignup}>
          <label className="justify-left w-100 px-5">
            {/* User Name
            <input
              className="form-control"
              placeholder="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            /> */}
            Email
            <input
              className="form-control"
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={event => {
                setEmail(event.target.value)
              }}
            />
            Password
            <input
              className="form-control"
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={event => {
                setPassword(event.target.value)
              }}
            />
            Confirm Password
            <input
              className="form-control"
              placeholder="password confirmation"
              type="password"
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={event => {
                setPasswordConfirmation(event.target.value)
              }}
            />
          </label>

          <label className="justify-left w-100 px-5">
            {' '}
            <input className="w-100 btn btn-custom" type="submit" />
          </label>
        </form>
      </Modal>

    </>
  );
}

export default Navbar;



