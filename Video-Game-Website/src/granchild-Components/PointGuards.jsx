import React, {useEffect, useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Home from '../Componenets/Home';
import Card from 'react-bootstrap/Card'
import { ListGroup } from 'react-bootstrap';



const PointGuards = () => {
    const [displayState, setDisplayState]=useState(0)
    const [rating, setRating]=useState('')
    const [name, setName]=useState('') 
    const [count, setCount]=useState(900)
    const [faces, setFaces]=useState([])
    const [cardDis, setCardDis]=useState(false)
    const [age, setAge]=useState('')
    const [height, setHeight]=useState('')
    const [weight, setWeight]=useState('')

  const increaseStats=()=>{
    if(count >0) {
      setCount(count - 1)
    }
  };
  const decreaseStats=()=>{
    if(count < 900) {
      setCount(count + 1)
    }
  };

  // const handleReset=()=>{

  // }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setDisplayState(1)
  }
  console.log(displayState)


  const nbaFaces= async()=>{
    let response =await fetch('https://randomuser.me/api/?gender=male');
    let data= await response.json();
    console.log(data);
    setFaces(data.results[0].picture.large);
  };

  useEffect(()=>{
    nbaFaces();
  },[]);
  const handleSubmit2=(e)=>{
    e.preventDefault()
    setCardDis(true)
    setDisplayState(2)
    nbaFaces()
  }


  if (displayState===0){

  return (
    <>
    <div>
      {/* <h1>{face}</h1> */}
    <div className='NavBar'>
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
    </div>
    <form onSubmit={handleSubmit}>
      <p>Create a Point Guard.</p>
      <input type='text' id='Name'value={name} placeholder='name' required onChange={(e)=>setName(e.target.value)}></input>
      <input type='number' placeholder='age' id='Age' value={age} min={19} max={35} required onChange={(e)=>setAge(e.target.value)}></input>
      <input type='number' placeholder='Height in inches'id='Height' min={69} max={87} value={height} required on onChange={(e)=>setHeight(e.target.value)}></input>
      <input type='number' placeholder='Weight in lbs'id='Weight' value={weight}min={125} max={359} required onChange={(e)=>setWeight(e.target.value)}></input><br></br>
      <button type='submit'>Submit</button>
    </form>
    {/* <button onSubmit={handleSubmit} type='submit'>Submit</button> */}

    </>
  )
} else if(displayState===1) {
  return(
    <>

    <form onSubmit={handleSubmit2}>
    <div id='statsContainer'>

        <div className='statsBtn'>
        <p>Pick your stats.</p>
        <p>You have {count} skill points left</p>
        </div>

        <div className='statsBtn'>
          <p>Close Shot</p>
        <input onClick={increaseStats} value={closeShot} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>

        </div>

        <div className='statsBtn'>
          <p>Driving Layup</p>
        <input onClick={increaseStats} id='Layup' value={layup} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>

        <div className='statsBtn'>
          <p>Driving Dunk</p>
        <input onClick={increaseStats} value={Dunk} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>

        <div className='statsBtn'>
          <p>Post Control</p>
        <input onClick={increaseStats} value={postControl} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>

        </div>

        <div className='statsBtn'>
          <p>Midrange</p>
        <input onClick={increaseStats} value={Midrange} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>

        </div>

        <div className='statsBtn'>
          <p>3pt</p>
        <input onClick={increaseStats} value={ThreePointer} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>

        <div className='statsBtn'>
          <p>Free Throw</p>
        <input onClick={increaseStats} value={freeThrow} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>

        <div className='statsBtn'>
          <p>Passing</p>
        <input onClick={increaseStats} value={passing} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>

        <div className='statsBtn'>
          <p>Ball Handle</p>
        <input onClick={increaseStats} value={ballHandle} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>

        <div className='statsBtn'>
          <p>Steal</p>
        <input onClick={increaseStats} value={Steal} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>

        <div className='statsBtn'>
          <p>Block</p>
        <input onClick={increaseStats} value={Block} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>

        <div className='statsBtn'>
          <p>Definsive Rebound</p>
        <input onClick={increaseStats} value={DefinsiveRebound} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>

        <div className='statsBtn'>
          <p>Offensive Rebound</p>
        <input onClick={increaseStats} value={OffensiveRebound} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>

        <div className='statsBtn'>
          <p>Interior D</p>
        <input onClick={increaseStats} value={InteriorD} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>

        <div className='statsBtn'>
          <p>Perimeter D</p>
        <input onClick={increaseStats} value={PerimeterD} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>

        <div className='statsBtn'>
          <p>Speed</p>
        <input onClick={increaseStats} value={Speed} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>

        <div className='statsBtn'>
          <p>Acceleration</p>
        <input onClick={increaseStats} value={Acceleration} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>

        <div className='statsBtn'>
          <p>Str</p>
        <input onClick={increaseStats} value={Str} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>

        <div className='statsBtn'>
          <p>Vertical</p>
        <input onClick={increaseStats} value={Vertical} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>

        <div className='statsBtn'>
          <p>Stamina</p>
        <input onClick={increaseStats} value={Stamina} onChange={(e)=>(e.target.value)}type='button' min={0} max={99} placeholder='3pt Shot'/>
        </div>
        <button type='submit'>Submit</button>
    </div>
    </form>
    </>

    )
  }else if(displayState===2){
    return(
      <>
      <div>
      <div id='card'>
{cardDis ? (<Card style={{ width: '18rem' }}>
  {/* The cardDis is making sure the card doesnt render to the screen until the handle submit is run by pressing the submit button. */}
      <Card.Img variant="top" src={faces} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        
        </Card.Text>
      </Card.Body>
      <ListGroup>
      <ListGroup.Item>Age:{age}</ListGroup.Item>
      <ListGroup.Item>Height:{height}</ListGroup.Item>
      <ListGroup.Item>Weight:{weight}</ListGroup.Item>
      <ListGroup.Item>Weight:{weight}</ListGroup.Item>
      <ListGroup.Item>Weight:{weight}</ListGroup.Item>
      </ListGroup>
    </Card>
          ) : (
            <>

            </>
        )}
      </div>

      </div>
      </>
    )
  }
}


export default PointGuards