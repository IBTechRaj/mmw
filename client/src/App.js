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
import Card from './components/Bookings/Card'

const getLoggedStatus = () => {
  let loggedIn
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [client, setClient] = useState(false)
  const [sprovider, setSprovider] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [clientId, setClientId] = useState(false)

  return (
    <Router>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}
        client={client} setClient={setClient}
        setSprovider={setSprovider}
        setAdmin={setAdmin}
        clientId={clientId} setClientId={setClientId} />
      {console.log('cl', client)}
      {client ? (<Booking clientId={clientId} />) : (null)}
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
