import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import BookService from './BookService'

const Booking = (props) => {
  const [bookingVisible, setBookingVisible] = useState(false)
  const [openBooking, setOpenBooking] = useState(false);
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
        <Button onClick={() => setBookingVisible(true)} className="btn btn-success" data-toggle="modal"><span>Book Your Slot</span></Button>
      </div>

      {bookingVisible &&
        <BookService
          clientEmail={props.clientEmail}
          clientName={props.clientName}
          clientId={props.clientId}
          setBookingVisible={setBookingVisible}
        />}
    </>
  )
}

export default Booking