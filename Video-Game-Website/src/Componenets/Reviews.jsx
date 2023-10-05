import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';

const Reviews = () => {

    const[gameInfo, setGameInfo]=useState('')


    const fetchGames=async()=>{
        let response =await fetch('http://www.giantbomb.com/api/game/3030-4725/?api_key=a6c2064c40e2fcf4931754c06e125d937dac7739')
        let data=await response.json();
        console.log(data);
        setGameInfo(data.image)
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '49fab16e04msh8dedfb082883769p1cef32jsn727cc137b6c0',
            'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
        }
    };

    useEffect(()=>{
        fetchGames();
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchFox()
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
              <NavDropdown.Item href="Ratings">Ratings</NavDropdown.Item>
              <NavDropdown.Item href="Reviews">
                Reviews
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Support Us</NavDropdown.Item>
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
        <div>
            <form onSubmit={handleSubmit}>
            <button type='submit'>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Reviews