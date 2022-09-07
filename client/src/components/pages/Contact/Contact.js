import React, {useState} from 'react';
import './contact.css';
import axios from 'axios'

const Contact = () => {

  const [email, setEmail] = useState()
  const [name, setName]=useState()
  const createEmail = (e) => {
    e.preventDefault()
    console.log("Button worked")

    const emailEnquiryData = {
      "subject": 'Enquiry',
      "name":  name,
      "email": 'business@mymotorwash.com',
      "message": 'message'
        // "Dear "
        // + props.clientName
        // + ",\n\n"
        // + "Thank you for booking your motor wash with MyMotorWash Services. The following are the details of your booking\n"
        // + "\nAppointment Date :" + startDate
        // + "\nAppointment Time : " + apptTime
        // + "\nService Name: " + service
        // + "\n\n"
        // + "Kindly be available to show your vehicle when our service person arrives. For any queries please call Customer Care."
        // + "\n\n"
        // + "Team MyMotorWash"
    }

    // const booking = {
    //   bkg_date: startDate,
    //   bkg_time: apptTime,
    //   service: service,
    //   address1: address1,
    //   address2: address2,
    //   pincode: pincode,
    //   user_id: props.clientId,
    //   area_id: 1,
    // }

    // const jwt = localStorage.getItem('token');
    // const bkgUrl = (process.env.REACT_APP_SERVER) ? `https://mymotorwash.herokuapp.com/bookings` : `http://localhost:3001/bookings`

    // const bkgUrl = 'https://mymotorwash.herokuapp.com/bookings';

    // axios.post(bkgUrl, booking, {
    //   headers: { Authorization: `Bearer ${jwt}` },
    // })
    //   .then(response => {
    //     if (response.status === 201) {
    //       props.setBookingVisible(false)
    //       alert('Your booking successful')
    //     }
    //   })
    //   .then(() => {
    //     const jwt = localStorage.getItem('token')
    //     const contactUrl = (process.env.REACT_APP_SERVER) ? `https://mymotorwash.herokuapp.com/contacts` : `http://localhost:3001/contacts`

        const contactUrl = 'https://mymotorwash.herokuapp.com/contacts'

        try {
          const res = axios.post(contactUrl, emailEnquiryData,
            // { headers: { Authorization: `Bearer ${jwt}` } }
          );
        }
        catch (error) {
          console.log('cl eml err', error);
        }

      // })
  }

  // }
  return (

    <section id="contact">
      <div className="container-wrapper">
        <div className="container contact-info">
          <div className="row">
            <div className="col-sm-4 col-md-4">
              <div className="contact-form">
                <address>
                  <strong>Mike's Car Wash.</strong><br />
                  <abbr title="Phone">P: 9000006820
                  </abbr></address>
              </div>
            </div>
            <div className="col-sm-8 col-md-8">
              

              <form onSubmit={createEmail}>
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
                    type="text"
                    name="name"
                    value={name}
                    onChange={event => {
                      setName(event.target.value)
                    }}
                  />
                </label>
                <br /><br />
                <label className="justify-left w-100 px-5">
                  {' '}
                  <input className="w-100 btn btn-custom" type="submit" />
                </label>

              </form>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

//   < div className = "contact-form" >
// <form name="sentMessage" id="contactForm" noValidate>
//   <div className="control-group">
//     <div className="controls">
//       <input type="text" className="form-control" placeholder="Full Name" id="name" required data-validation-required-message="Please enter your name" />
//       <p className="help-block" />
//     </div>
//   </div>
//   <div className="control-group">
//     <div className="controls">
//       <input type="email" className="form-control" placeholder="Email" id="email" required data-validation-required-message="Please enter your email" />
//     </div>
//   </div>
//   <div className="control-group">
//     <div className="controls">
//       <textarea rows={10} cols={100} className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter your message" minLength={5} data-validation-minlength-message="Min 5 characters" maxLength={999} style={{ resize: 'none' }} defaultValue={""} />
//     </div>
//   </div>
//   <div id="success" />
//   <button size="small" variant="contained"
//     onClick={createEmail}
//   >Confirm</button>
  {/* <button type="submit" className="btn btn-primary pull-right">
                    Send</button><br /> */}
{/* </form> */}
              {/* </div > */}