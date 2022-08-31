import React from 'react';
import { useState } from 'react'
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Booking from './components/Bookings/Booking';
import Admin from './components/Admin/Admin';


// const getLoggedStatus = () => {
//   let loggedIn
// }

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [client, setClient] = useState(false)
  const [sprovider, setSprovider] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [clientId, setClientId] = useState(false)
  const [clientEmail, setClientEmail] = useState('')
  const [clientName, setClientName] = useState('')

  return (
    <Router>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}
        client={client} setClient={setClient}
        clientEmail={clientEmail} setClientEmail={setClientEmail}
        clientName={clientName} setClientName={setClientName}
        setSprovider={setSprovider}
        setAdmin={setAdmin}
        clientId={clientId} setClientId={setClientId} />
      {console.log('cl', client)}
      {client ? (<Booking clientId={clientId} clientEmail={clientEmail} clientName={clientName} />) : (null)}
      {console.log('cl, adm', client, admin)}
      {admin ? (<Admin />) : (null)}
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
