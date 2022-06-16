import React, { useState } from 'react'
// import Button from '../Button';
import { Modal, Button, Alert } from 'react-bootstrap';
// import { Modal } from 'react-responsive-modal';

import BookingForm from './BookingForm'
// import './booking.css'




const Booking = () => {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);



  const [openBooking, setOpenBooking] = useState(false);
  const [name, setName] = useState('');
  const [pincode, setPincode] = useState(0);
  const onOpenBookingModal = () => {
    setOpenBooking(true);

  }
  const onCloseBookingModal = () => setOpenBooking(false);

  const handleSubmitBooking = () => {
    console.log('Booked')
    onCloseBookingModal()
  }

  return (
    <>
      <div className='text-center' style={{ backgroundColor: 'black' }}>
        {/* < Button style={{ backgroundColor: "#2C5777" }} onClick={handleShow}> Book Your Slot</Button >
        <i className="material-icons">&#xE147;</i>
         */}
        <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><span>Book Your Slot</span></Button>
      </div>
      <Modal open={openBooking} onClose={onCloseBookingModal} centre>
        <h2>Book Your Slot</h2>
        <form onSubmit={handleSubmitBooking}>
          <label className="justify-left w-100 px-5">
            <input
              className="form-control"
              placeholder="Name"
              type="text"
              name="name"
              value={name}
              onChange={event => {
                setName(event.target.value)
              }}
            />
            <br />
            <input
              className="form-control"
              placeholder="Pincode"
              type="integer"
              name="pincode"
              value={pincode}
              onChange={event => {
                setPincode(event.target.value)
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Book Your Slot
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookingForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Booking