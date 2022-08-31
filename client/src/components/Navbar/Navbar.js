import React, { useState, useEffect } from 'react';

import axios from 'axios';
// import { Button } from '../Button';
// import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import { MdLocalCarWash } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';


const Navbar = ({ loggedIn, setLoggedIn, client, setClient, sprovider, setSprovider, admin, setAdmin, clientId, setClientId, clientEmail, setClientEmail, clientName, setClientName }) => {
  
  // const server = (process.env.REACT_APP_SERVER) ? `https://mymotorwash.herokuapp.com` : `http://localhost:3001`

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
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [mobile, setMobile] = useState('')
  const [pincode, setPincode] = useState('')



  const handleSubmitSignup = async (event) => {
    event.preventDefault();
    if (password === passwordConfirmation) {
      const emailData = {
        "subject": 'Client Registration Success!',
        "name": firstName,
        "email": email,
        "message":
          "Dear " + firstName
          + ",\n\n"
          + "Thank you for registering with MyMotorWash Services. Now you can login and book your vehicle service from the convenience of your home\n"
          + "For any queries please call Customer Care."
          + "\n\n"
          + "Team MyMotorWash"
      }
      console.log('signing up')
      const signUpUrl = (process.env.REACT_APP_SERVER) ? `https://mymotorwash.herokuapp.com/signup` : `http://localhost:3001/signup`

      // fetch("http://localhost:3001/signup", {
        fetch(signUpUrl, {
        method: "post",
        headers: {
          // 'accept': 'application/json',
          // 'Access-Control-Allow-Origin': "*",
          // 'content-type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Credentials': 'true',
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            "email": email,
            "password": password,
            "first_name": firstName,
            "last_name": lastName,
            "gender": gender,
            "date_of_birth": dob,
            "mobile": mobile,
            "pincode": pincode,
            "usertype": 0
          },
        }),
      })
        .then((res) => {
          if (res.ok) {
            console.log(res.headers.get("Authorization"));
            localStorage.setItem("token", res.headers.get("Authorization"));
            setLoggedIn(true);

            onCloseSignupModal()
            return res.json();
          } else {
            console.log('Error signup')
            onCloseSignupModal()
            throw new Error(res);
          }
        })
        .then((data) => {
          setClientId(data.data.id)
          if (data.data.usertype === 'client') {
            setClient(true)
            setClientName(data.data.first_name)
            setClientEmail(data.data.email)
          }
          else if (data.data.usertype === 'sprovider') {
            setSprovider(true)
          } else if (data.data.usertype === 'admin') {
            setAdmin(true)
          }
        })
        .then((json) => {
          console.dir(json)
        })
        .then(() => {
          const jwt = localStorage.getItem('token')
          // const contacturl = 'server/contacts'
          const contactUrl = (process.env.REACT_APP_SERVER) ? `https://mymotorwash.herokuapp.com/contacts` : `http://localhost:3001/contacts`


          try {
            const res = axios.post(contactUrl, emailData, { headers: { Authorization: `Bearer ${jwt}` } });
            console.log('res', res);
          }
          catch (error) {
            console.log('oh, no', error);
          } 
        })
        .catch((err) => console.error(err));
    }
    else {
      console.log('Passwords should match')
    }
  }

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    console.log('logging')
    const loginUrl = (process.env.REACT_APP_SERVER) ? `https://mymotorwash.herokuapp.com/login` : `http://localhost:3001/login`

    try {
      fetch(loginUrl, {
        method: "post", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            "email": email,
            "password": password
          },
        }),
      })
        .then((res) => {
          if (res.ok) {
            console.log(res.headers.get("Authorization"));
            localStorage.setItem("token", res.headers.get("Authorization"));
            setLoggedIn(true);
            onCloseLoginModal()
            return res.json();
          } else {
            throw new Error(res);
          }
        })
        .then((data) => {
          setClientId(data.data.id)
          console.log('data', data.data);
          if (data.data.usertype === 'client') {
            setClient(true)
            setClientName(data.data.first_name)
            setClientEmail(data.data.email)
          }
          else if (data.data.usertype === 'sprovider') {
            setSprovider(true)
          } else if (data.data.usertype === 'admin') {
            setAdmin(true)
          }
        })
        .then((json) => console.dir(json))
    }
    catch (error) {
      console.log('Err: ', error);
    }
  }

  const handleLogout = () => {
    delete axios.defaults.headers.common.Authorization;
    setLoggedIn(false)
    setClient(false)
    setAdmin(false)
    localStorage.removeItem('token');
  }

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
                <Link to='#home' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='#services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='#about'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Who we
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='#pricing'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Pricing
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/#gallery'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Gallery
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  to='#contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>


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

        </form>
      </Modal>


      <Modal open={openSignup} onClose={onCloseSignupModal} centre>
        <h2>Signup</h2>
        <form onSubmit={handleSubmitSignup}>
          <label className="justify-left w-100 px-5">

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
            First Name
            <input
              className="form-control"
              placeholder="First Name"
              type="string"
              name="firstname"
              value={firstName}
              onChange={event => {
                setFirstName(event.target.value)
              }}
            />
            Last Name
            <input
              className="form-control"
              placeholder="Last Name"
              type="string"
              name="lastName"
              value={lastName}
              onChange={event => {
                setLastName(event.target.value)
              }}
            />
            Gender
            {/* <label> */}
            Your Gender:
            <select value={gender} onChange={event => {
              setGender(parseInt(event.target.value))
            }}
            >
              <option value="0" >She</option>
              <option value="1" >He</option>
              <option value="2" >Others</option>
            </select>
            {/* </label> */}

            Date of Birth
            <input
              className="form-control"
              placeholder="Date of Birth"
              type="date"
              name="dob"
              value={dob}
              onChange={event => {
                setDob(event.target.value)
              }}
            />
            Mobile
            <input
              className="form-control"
              placeholder="Mobile"
              type="string"
              name="mopbile"
              value={mobile}
              onChange={event => {
                setMobile(event.target.value)
              }}
            />
            Pincode
            <input
              className="form-control"
              placeholder="Pincode"
              type="string"
              name="pincode"
              value={pincode}
              onChange={event => {
                setPincode(event.target.value)
              }}
            />
          </label>

          <label className="justify-left w-100 px-5">
            {' '}
            <input className="w-100 btn btn-custom" type="submit" />
          </label>
        </form >
      </Modal >

    </>
  );
}

export default Navbar;



