import React, { useState } from 'react'
import { RatingContext } from '../App'
import { Link } from 'react-router-dom'
import Home from './Home'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import BigMan from '../granchild-Components/BigMan'




const Centers = () => {
  const rating=useState(RatingContext)
  
  return (
    <>
      <div className='NavBar'>
      <Navbar expand="lg" className="NavBar">
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
        <Link to='/BigMan'>Center</Link>
      </div>
    </>
  )
}

export default Centers