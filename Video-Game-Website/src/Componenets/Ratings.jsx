import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';


const Ratings = () => {
    const [rating, setRating]=useState('')
    const [count, setCount]=useState(0)

    const increaseHeight=()=>{
        if(count < 100) {
            setCount(count + 1)
        }else{
            console.log('No more Skill points')
        }  
    };
    const decreaseHeight=()=>{
        if(count < 100) {
            setCount(count - 1)
        }
    }


  return (
    <>
        <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="News">News</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="Guards">Guards</NavDropdown.Item>
              <NavDropdown.Item href="Forwards">
                Forwards
              </NavDropdown.Item>
              <NavDropdown.Item href="#Centers">Centers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    </>
  )
}

export default Ratings