import React, { useState } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { fetchUser } from '../../store/thunks/user';
// import { addFlashMessage } from '../../store/actions/flashMessages';


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginData = {
    "email": email,
    "password": password,
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch('http://localhost:3001/users', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password
  //     })
  //   })
  //     .then(resp => resp.json())
  //     .then(data => {
  //       localStorage.setItem("token", data.jwt)
  //       // props.handleLogin(data.user)
  //     })
  //   console.log('resp', resp)
  //   setEmail("")
  //   setPassword("")
  // }



  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('logging')
    try {
      const res = await axios.post('http://localhost:3001/login ', loginData);
      const { jwt, user } = res.data;
      console.log('res', res, user);
      if (jwt) {
        localStorage.setItem('token', jwt);
        console.log('j', jwt)

      }
    }
    catch (error) {
      console.log('no');
    }
  }

  return (
    <div className="container-fluid text-dark bg-light h-100">
      <div className="w-100 ">
        <h1>Log In</h1>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
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

        <div>
          or <Link to="/signup">sign up</Link>
        </div>
      </form>
      {/* <div>{this.state.errors ? this.handleErrors() : null}</div> */}
    </div>
  );
}
// }


// const mapStateToProps = (state) => ({
//   user: state.user,
//   loggedIn: state.loggedIn,
//   errors: state.errors,
// });
// const mapDispatchToProps = (dispatch) => ({
//   fetchUser: (loginInfo) => dispatch(fetchUser(loginInfo)),
//   addFlashMessage: (msg) => dispatch(addFlashMessage(msg)),
// });

// Login.propTypes = {
//   user: PropTypes.object.isRequired,
//   fetchUser: PropTypes.func.isRequired,
//   history: PropTypes.object,
//   push: PropTypes.func,
//   loggedIn: PropTypes.bool,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login
