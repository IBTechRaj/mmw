import * as React from 'react';
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


import DatePicker from "react-datepicker";
import { Row, Col } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import TimeSlots from "./TimeSlots";
import axios from 'axios';

// export default function BookService() {


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'left',
  color: theme.palette.text.secondary,
  height: 200,
  lineHeight: '60px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Elevation(props) {

  console.log('ele props', props)

  const services = ['Car Wash', 'Car Polish', 'Bike Wash', 'Bike Polish']
  const [areas, setAreas] = useState([])

  const [service, setService] = useState('Choose Service')
  const [pincode, setPincode] = useState('Choose Pincode')
  const [areaId, setAreaId] = useState(0)
  const [showTime, setShowTime] = useState(false)
  const [apptDate, setApptDate] = useState()
  const [apptTime, setApptTime] = useState('0:00')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')

  let handleServiceChange = (e) => {
    setService(e.target.value)
  }


  let handlePincodeChange = (e) => {
    setPincode(e.target.value)
  }

  const areasUrl = 'http://localhost:3001/areas'
  useEffect(() => {
    axios.get(areasUrl,
    )
      .then(({ data }) => {
        console.log('areas', data)
        setAreas(data)
      })
  }, [])

  const setDateShowTime = () => {
    setShowTime(true)
    setApptDate(startDate)
  }

  const createAppointment = (e) => {
    e.preventDefault()
    const emailClientData = {
      "subject": 'Appointment Booking Success!',
      "name": props.clientName,
      "email": props.clientEmail,
      "message":
        "Dear " + props.clientName
        + ",\n\n"
        + "Thank you for booking your service with GroomWell Services partner. The following are the details of your appointment\n"
        + "\nAppointment Date :" + startDate
        + "\nAppointment Time : " + apptTime
        + "\nService Name: " + service
        + "\nSalon Name: " + props.salonName
        + "\nSalon Phone : " + props.salonLandline
        + "\nSalon Mobile : " + props.salonMobile
        + "\n\n"
        + "Kindly reach the salon at least 15 minutes before appoint time. For any queries please call Customer Care."
        + "\n\n"
        + "Team GroomWell"
    }
    const emailSpData = {
      "subject": 'You have new business!',
      "name": props.salonName,
      "email": props.salonEmail,
      "message":
        "Dear " + props.salonName
        + ",\n\n"
        + "We are glad to inform you that one client has booked his service through us at your salon. The following are the details of your appointment\n"
        + "\nAppointment Date :" + startDate
        + "\nAppointment Time : " + apptTime
        + "\nCustomer Name : " + props.clientName
        + "\nCustomer Mobile : " + props.clientMobile
        + "\nService booked : " + service
        + "\n\n"
        + "Kindly call the customer preferably a day before and confirm the appointment. For any queries please call Customer Care."
        + "\n\n"
        + "Team GroomWell"
    }
    const booking = {
      bkg_date: startDate,
      bkg_time: apptTime,
      service: service,
      address1: address1,
      address2: address2,
      pincode: pincode,
      user_id: props.clientId,
      area_id: 1,
    }
    console.log('bkg data', booking)
    const jwt = localStorage.getItem('token');
    const bkgUrl = 'http://localhost:3001/bookings';

    axios.post(bkgUrl, booking, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
      .then(response => {
        if (response.status === 201) {
          console.log('Booking Done')
        }
      })
    // .then(() => {
    //   const jwt = localStorage.getItem('token')
    //   const url = 'http://localhost:3001/contacts'

    //   try {
    //     const res = axios.post(url, emailClientData, { headers: { Authorization: `Bearer ${jwt}` } });
    //     console.log('res', res);
    //   }
    //   catch (error) {
    //     console.log('cl eml err', error);
    //   }

    // })
    //   .then(() => {
    //     const jwt = localStorage.getItem('token')
    //     const url = 'http://localhost:3001/contacts'

    //     try {
    //       const res = axios.post(url, emailSpData, { headers: { Authorization: `Bearer ${jwt}` } });
    //       console.log('res', res);
    //       props.setBookingVisible(false)
    //     }
    //     catch (error) {
    //       console.log('sp eml err', error);
    //     }

    //   })
  }

  const [startDate, setStartDate] = useState(new Date());
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} >
        <ThemeProvider theme={lightTheme}>
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'grid',
              gridTemplateColumns: { md: '1fr 1fr' },
              gap: 2,
              position: 'absolute',
              zIndex: 'modal'
            }}
          >
            <Item elevation={8}>
              <Card
                sx={{ minWidth: 275 }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 1.5 }}
                  >
                    Booking Details
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Address1 :
                    <TextField
                      required
                      fullWidth
                      id="address1"
                      label="Address1"
                      value={address1}
                      onChange={event => {
                        setAddress1(event.target.value)
                      }}
                    />
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Address2 :
                    <TextField
                      required
                      fullWidth
                      id="address2"
                      label="Address2"
                      value={address2}
                      onChange={event => {
                        setAddress2(event.target.value)
                      }}
                    />
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    PinCode :
                    <select onChange={handlePincodeChange}>
                      <option value="choose">
                      </option>
                      {areas.map((area) => <option key={area.id} value={area.pincode}>{area.pincode}</option>)}

                    </select>
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Service :
                    <select onChange={handleServiceChange}>
                      <option value="choose">
                      </option>
                      {services.map((service) => <option key={service.index} value={service}>{service}</option>)}
                    </select>
                  </Typography>
                  {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Client : {props.clientName}
                  </Typography> */}
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Booking Date :
                    {/* <div> */}
                    <Row >
                      <Col xs={6} style={{ marginLeft: 200, position: 'absolute' }}>

                        {showTime ? <TimeSlots setApptTime={setApptTime} setShowTime={setShowTime} startDate={startDate} pincode={pincode} /> : null}
                        {console.log('dt,tm', startDate.toLocaleDateString(), apptTime)}
                      </Col>
                      <Col xs={6} >
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          shouldCloseOnSelect={false}
                          onSelect={setDateShowTime}
                        />
                      </Col>

                    </Row>
                    {/* </div> */}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    Booking Time : {apptTime}
                  </Typography>

                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => props.setBookingVisible(false)}
                  >Cancel</Button>
                  <Button size="small" variant="contained"
                    onClick={createAppointment}
                  >Confirm</Button>
                </CardActions>
              </Card>
            </Item>
            {/* ))} */}
          </Box>
        </ThemeProvider>
      </Grid>
      )
      {/* )} */}
    </Grid>
  );
}
