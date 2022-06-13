import React from 'react';
import { useState } from 'react'
import './App.css';
import Home from './components/Home';
// import Login from './components/registrations/Login'
// import Signup from './components/registrations/Signup'
// import Services from './components/pages/Services/Services';
// import Products from './components/pages/Products/Products';
// import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from './components/Navbar/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Booking from './components/Bookings/Booking';

const getLoggedStatus = () => {
  let loggedIn
}


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <Router>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {loggedIn ? (<Booking />) : (null)}
      {/* <Header /> */}
      {/* <Signup /> */}
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/services' component={Services} /> */}
        {/* <Route path='/products' component={Products} /> */}
        {/* <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
