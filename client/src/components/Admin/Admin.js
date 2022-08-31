import React, { useState } from 'react'

import { Container, Row } from 'react-bootstrap'

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ServiceDetails from './ServiceDetails'

export default function Admin() {

  const [showServices, setShowServices] = useState(false)

  const closeServices = () => {
    setShowServices(false)
  };

  return (
    <div>
      <Container className="container">
        <Row className="row">
          <div className="section-header">
            <h2 className="section-title text-center wow fadeInDown mt-3" style={{ color: 'black' }}>Admin Dashboard</h2>
          </div>
        </Row>

        <ButtonGroup variant="contained" size="large" aria-label="outlined primary button group">


          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, mr: 5, ml: 5 }}
            onClick={() => { setShowServices(true) }}
          >
            Manage Services
          </Button>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, mr: 5, ml: 5 }}
            disabled={true}
            onClick={() => { setShowServices(true) }}
          >
            Manage Staff
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, mr: 5, ml: 5 }}
            disabled={true}
            onClick={() => { setShowServices(true) }}
          >
            List Users
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, mr: 5, ml: 5 }}
            disabled={true}
            onClick={() => { setShowServices(true) }}
          >
            View Business
          </Button>

        </ButtonGroup>


        {showServices &&
          <ServiceDetails onClose={closeServices} />
        }

      </Container>
    </div >
  )
}
