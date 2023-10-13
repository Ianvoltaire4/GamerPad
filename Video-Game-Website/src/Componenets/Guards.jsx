import React, { useState } from 'react'
import PointGuards from '../granchild-Components/PointGuards'
import ShootingGuards from '../granchild-Components/ShootingGuards'
import { RatingContext } from '../App'
import { Link } from 'react-router-dom'
import Home from './Home'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';




const Guards = () => {
  const rating=useState(RatingContext)
  
  return (
    <>
      <div className='NavBar'>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="Guards">Guards</NavDropdown.Item>
              <NavDropdown.Item href="Forwards">
                Forwards
              </NavDropdown.Item>
              <NavDropdown.Item href="#Centers">Centers</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>

      <div>
        <p>Pick a postion:</p>
        <Link to='/PointGuards'>PointGuards</Link>
        <Link to='/ShootingGuards'>ShootingGuards</Link>
      </div>
    </>
  )
}

export default Guards