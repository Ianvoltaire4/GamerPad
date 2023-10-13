import React, {useEffect, useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Home from '../Componenets/Home';
import Card from 'react-bootstrap/Card'
import { ListGroup } from 'react-bootstrap';
import { useContext } from 'react';
import { APICall } from './PointGuards';
import '../Componenets/styles.css'

const ShootingGuards = () => {
  const allData = useContext(APICall)
  console.log(allData)



  const [displayState, setDisplayState]=useState(0)
  const [rating, setRating]=useState('')
  const [name, setName]=useState('') 
  const [count, setCount]=useState(900)
  const [faces, setFaces]=useState([])
  const [cardDis, setCardDis]=useState(false)
  const [age, setAge]=useState('')
  const [height, setHeight]=useState('')
  const [weight, setWeight]=useState('')
  const [passing, setPassing]=useState(0)
  const [ThreePointer, setThreePointer]=useState(0)
  const [Midrange, setMidRange]=useState(0)
  const [Steal, setSteal]=useState(0)
  const [freeThrow, setFreeThrow]=useState(0)
  const [ballHandle, setBallHandle]=useState(0)
  const [InteriorD, setInteriorD]=useState(0)
  const [PerimeterD, setPerimeterD]=useState(0)
  const [Block, setBlock]=useState(0)
  const [DefinsiveRebound, setDefinsiveRebound]=useState(0)
  const [OffensiveRebound, setOffinsiveRebound]=useState(0)
  const [closeShot, setCloseShot]=useState(0)
  const [layup, setLayup]=useState(0)
  const [Dunk, setDunk]=useState(0)
  const [postControl, setPostContol]=useState(0)
  const [Speed, setSpeed]=useState(0)
  const [Acceleration, setAcceleration]=useState(0)
  const [Str, setStr]=useState(0)
  const [Vertical, setVertical]=useState(0)
  const [Stamina, setStamina]=useState(0)



const increaseStats=(stateName, setStateFunction)=>{
  setStateFunction(stateName + 1)
  if(count > 0){
    setCount(count - 1)
  }
}
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
      <div className='Navbar'>
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
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
      <div className='Forms'>
        <form onSubmit={handleSubmit}>
          <p>Create a Shooting Guard.</p>
          <input type='text' id='Name'value={name} placeholder='name' required onChange={(e)=>setName(e.target.value)}></input>
          <input type='number' placeholder='age' id='Age' value={age} min={19} max={35} required onChange={(e)=>setAge(e.target.value)}></input>
          <input type='number' placeholder='Height in inches'id='Height' min={69} max={87} value={height} required on onChange={(e)=>setHeight(e.target.value)}></input>
          <input type='number' placeholder='Weight in lbs'id='Weight' value={weight}min={125} max={359} required onChange={(e)=>setWeight(e.target.value)}></input><br></br>
          <button type='submit'>Submit</button>
        </form>
      </div>
      </>
    )

  }else if(displayState===1) {

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
          <input onClick={()=>increaseStats(closeShot, setCloseShot)} value={closeShot} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />

          </div>

          <div className='statsBtn'>
            <p>Driving Layup</p>
            <input onClick={()=>increaseStats(layup, setLayup)} value={layup} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
          </div>

          <div className='statsBtn'>
            <p>Driving Dunk</p>
            <input onClick={()=>increaseStats(Dunk, setDunk)} value={Dunk} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
          </div>

          <div className='statsBtn'>
            <p>Post Control</p>
            <input onClick={()=>increaseStats(postControl, setPostContol)} value={postControl} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />

          </div>

          <div className='statsBtn'>
            <p>Midrange</p>
            <input onClick={()=>increaseStats(Midrange, setMidRange)} value={Midrange} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />

          </div>

          <div className='statsBtn'>
            <p>3pt</p>
            <input onClick={()=>increaseStats(ThreePointer, setThreePointer)} value={ThreePointer} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
          </div>

          <div className='statsBtn'>
            <p>Free Throw</p>
            <input onClick={()=>increaseStats(freeThrow, setFreeThrow)} value={freeThrow} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
          </div>

          <div className='statsBtn'>
            <p>Passing</p>
            <input onClick={()=>increaseStats(passing, setPassing)} value={passing} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
          </div>

          <div className='statsBtn'>
            <p>Ball Handle</p>
            <input onClick={()=>increaseStats(ballHandle, setBallHandle)} value={ballHandle} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
          </div>

          <div className='statsBtn'>
            <p>Steal</p>
            <input onClick={()=>increaseStats(Steal, setSteal)} value={Steal} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
          </div>

          <div className='statsBtn'>
            <p>Block</p>
            <input onClick={()=>increaseStats(Block, setblock)} value={Block} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
          </div>

          <div className='statsBtn'>
            <p>Definsive Rebound</p>
            <input onClick={()=>increaseStats(DefinsiveRebound, setDefinsiveRebound)} value={DefinsiveRebound} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
          </div>

          <div className='statsBtn'>
            <p>Offensive Rebound</p>
            <input onClick={()=>increaseStats(OffensiveRebound, setOffinsiveRebound)} value={OffensiveRebound} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
          </div>

          <div className='statsBtn'>
            <p>Interior D</p>
            <input onClick={()=>increaseStats(InteriorD, setInteriorD)} value={InteriorD} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
          </div>

          <div className='statsBtn'>
            <p>Perimeter D</p>
            <input onClick={()=>increaseStats(PerimeterD, setPerimeterD)} value={PerimeterD} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
          </div>

          <div className='statsBtn'>
            <p>Speed</p>
            <input onClick={()=>increaseStats(Speed, setSpeed)} value={Speed} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
          </div>

          <div className='statsBtn'>
            <p>Acceleration</p>
            <input onClick={()=>increaseStats(Acceleration, setAcceleration)} value={Acceleration} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
          </div>

          <div className='statsBtn'>
            <p>Str</p>
            <input onClick={()=>increaseStats(Str, setStr)} value={Str} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
          </div>

          <div className='statsBtn'>
            <p>Vertical</p>
            <input onClick={()=>increaseStats(Vertical, setVertical)} value={Vertical} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
          </div>

          <div className='statsBtn'>
            <p>Stamina</p>
            <input onClick={()=>increaseStats(Stamina, setStamina)} value={Stamina} onChange={(e)=>(e.target.value)} type='button' min={0} max={99} />
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
      <ListGroup.Item>Age: {age}</ListGroup.Item>
      <ListGroup.Item>Height: {height} in</ListGroup.Item>
      <ListGroup.Item>Weight: {weight}</ListGroup.Item>
      <ListGroup.Item>Dunk: {Dunk}</ListGroup.Item>
      <ListGroup.Item>Layup: {layup}</ListGroup.Item>
      <ListGroup.Item>Close Shot: {closeShot}</ListGroup.Item>
      <ListGroup.Item>Midrange: {Midrange}</ListGroup.Item>
      <ListGroup.Item>Three Pointer: {ThreePointer}</ListGroup.Item>
      <ListGroup.Item>Passing: {passing}</ListGroup.Item>
      <ListGroup.Item>Ball Handle: {ballHandle}</ListGroup.Item>
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
export default ShootingGuards