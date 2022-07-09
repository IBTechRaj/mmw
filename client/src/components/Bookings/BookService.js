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
  height: 190,
  lineHeight: '60px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Elevation(props) {

  const services = ['Car Wash', 'Car Painting', 'Car Polishing', 'Car Repair', 'Music System', 'Scratch Removal', 'Car Checkup', 'Car Interior', 'Denting', 'Tyre Change', 'Car Exterior', 'Car Salon']
  const [areas, setAreas] = useState([])

  const [service, setService] = useState('Choose Service')
  const [pincode, setPincode] = useState('Choose Pincode')
  // const [areaId, setAreaId] = useState(0)
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

  const areasUrl = 'https://mymotorwash.herokuapp.com/areas'
  useEffect(() => {
    axios.get(areasUrl,
    )
      .then(({ data }) => {
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
      "subject": 'Booking Success!',
      "name": props.clientName,
      "email": props.clientEmail,
      "message":
        "Dear " + props.clientName
        + ",\n\n"
        + "Thank you for booking your motor wash with MyMotorWash Services. The following are the details of your booking\n"
        + "\nAppointment Date :" + startDate
        + "\nAppointment Time : " + apptTime
        + "\nService Name: " + service
        + "\n\n"
        + "Kindly be available to show your vehicle when our service person arrives. For any queries please call Customer Care."
        + "\n\n"
        + "Team MyMotorWash"
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

    const jwt = localStorage.getItem('token');
    const bkgUrl = 'https://mymotorwash.herokuapp.com/bookings';

    axios.post(bkgUrl, booking, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
      .then(response => {
        if (response.status === 201) {
          props.setBookingVisible(false)
          alert('Your booking successful')
        }
      })
      .then(() => {
        const jwt = localStorage.getItem('token')
        const url = 'https://mymotorwash.herokuapp.com/contacts'

        try {
          const res = axios.post(url, emailClientData, { headers: { Authorization: `Bearer ${jwt}` } });
        }
        catch (error) {
          console.log('cl eml err', error);
        }

      })
  }

  const [startDate, setStartDate] = useState(new Date());
  return (
    <Grid container spacing={2}
      justifyContent="center"
    >
      <Grid item  >
        <ThemeProvider theme={lightTheme}>
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'grid',
              // gridTemplateColumns: { md: '1fr 1fr' },
              // gap: 2,
              position: 'absolute',
              zIndex: 'modal',

            }}
          >
            {/* <Item elevation={8}> */}
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

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Booking Date :

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
            {/* </Item> */}
            {/* ))} */}
          </Box>
        </ThemeProvider>
      </Grid>
      )
      {/* )} */}
    </Grid>
    // </div>
  );
}
