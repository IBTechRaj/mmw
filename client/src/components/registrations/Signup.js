import React, { useState } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import ReactRouterPropTypes from 'react-router-prop-types';
// import { signUp } from '../../store/thunks/user';
// import { addFlashMessage } from '../../store/actions/flashMessages';
// import '../../styles/style.css';

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const signupData = {
    "email": email,
    "password": password,
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === passwordConfirmation) {
      console.log('signing up')
      try {
        const res = await axios.post('http://localhost:3001/users ', signupData);
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
    else {
      console.log('Passwords should match')
    }
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { password, passwordConfirmation } = this.state;
  //   if (password !== passwordConfirmation) {
  //     this.props.history.push('/ShowErrors');
  //   }
  //   const user = {
  //     username: this.state.username,
  //     email: this.state.email,
  //     password: this.state.password,
  //     password_confirmation: this.state.passwordConfirmation,
  //   };
  //   this.props.signUp(user).then(
  //     () => {
  //       this.props.addFlashMessage({
  //         type: 'success',
  //         text: 'You signed up successfully. Welcome!',
  //       });
  //       this.redirect();
  //     },
  //   );
  // }

  // redirect = () => {
  //   this.props.history.push('/Inputs1');
  // };

  // render() {
  //   const {
  //     username, email, password, passwordConfirmation,
  //   } = this.state;
  return (
    <div className="container-fluid text-dark bg-light h-100">
      <div className="w-100 ">
        <h1>Sign Up</h1>
      </div>
      <form onSubmit={handleSubmit}>
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
      {/* <div>{this.state.errors ? this.handleErrors() : null}</div> */}
    </div>
  );
}
// }

// const mapStateToProps = (state) => ({
//   user: state.user.user,
//   loggedIn: state.user.loggedIn,
//   errors: state.errors,
// });
// const mapDispatchToProps = (dispatch) => ({
//   signUp: (signinInfo) => dispatch(signUp(signinInfo)),
//   addFlashMessage: (msg) => dispatch(addFlashMessage(msg)),
// });

// Signup.propTypes = {
//   signUp: PropTypes.func.isRequired,
//   loggedIn: PropTypes.bool.isRequired,
//   history: ReactRouterPropTypes.history.isRequired,
//   errors: PropTypes.array,
//   addFlashMessage: PropTypes.func,
// };

export default Signup
