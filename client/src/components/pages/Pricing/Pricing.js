import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap'
import './Pricing.css';
import axios from 'axios';

const Pricing = () => {

  const [serviceData, setServiceData] = useState([]);

  const jwt = localStorage.getItem('token');
  const servicesUrl = (process.env.REACT_APP_SERVER) ? `https://mymotorwash.herokuapp.com/services/}` : `http://localhost:3001/services/`

  const getServices = () => {
    axios.get(servicesUrl, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
      .then(response => {
        console.log('res.dat', response.data)
        setServiceData(response.data)
      })
  }
  useEffect(() => {

    getServices()
  }, [])


  return (


    <Row style={{
      background: '#F4F4F5'
    }}>
      <div className="container" id="pricing">
        <div className="section-header">
          <h2 className="section-title text-center wow fadeInDown mt-4" style={{ color: 'black' }}>Our Pricing</h2>
          <p className="text-center wow fadeInDown">
            We tried to keep our pricing as affordable as possible. Once you get <br />
            your car serviced you will understand how reasonable our pricing is.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 menuItem">
            <ul className="menu">


              {serviceData && serviceData.map(({ id, sname, price, offerprice, description }) => (
                <li key={id}>
                  {sname} <span className="price">{price}</span> <span className="offerprice">{offerprice}</span>
                  <div className="detail">{description}</div>
                </li>
              ))}


              {/* <li>
                Car Wash <span className="price">Rs.150</span>
                <div className="detail">Water wash that cleans the vehicle</div>
              </li>
              <li>
                Car Repair <span className="price">Rs.150</span>
                <div className="detail">Minor repairs which do not need any parts replacement</div>
              </li>
              <li>
                Car Checkup <span className="price">Rs.150</span>
                <div className="detail">Preliminary checkup for any unnoticed problems</div>
              </li>

              <li>
                Tyre Change <span className="price">Rs.150</span>
                <div className="detail">Punctured tyres would be replaced</div>
              </li>
            </ul>
          </div>
          <div className="col-md-4 menuItem">
            <ul className="menu">
              <li>
                Car Painting <span className="price">Rs.150</span>
                <div className="detail">Minor scratches can be fixed on the spot</div>
              </li>
              <li>
                Music System <span className="price">Rs.150</span>
                <div className="detail">Music system would be fixed if compatible</div>
              </li>
              <li>
                Car Interior <span className="price">Rs.150</span>
                <div className="detail">Interior accessories are fixed if already available with you</div>
              </li>
              <li>
                Car Exterior <span className="price">Rs.150</span>
                <div className="detail">Exterior accessories can be attached if  available with you</div>
              </li>
            </ul>
          </div>
          <div className="col-md-4 menuItem">
            <ul className="menu">
              <li>
                Car Polishing <span className="price">Rs.150</span>
                <div className="detail">Polishing interiors or exteriors </div>
              </li>
              <li>
                Scrach Remove <span className="price">Rs.150</span>
                <div className="detail">Scratches disappear with matching paint</div>
              </li>
              <li>
                Denting <span className="price">Rs.150</span>
                <div className="detail">Dents flattened and scratches removed</div>
              </li>

              <li>
                Car Salon <span className="price">Rs.150</span>
                <div className="detail">Any other customised service </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </Row >

  )
}

export default Pricing;
