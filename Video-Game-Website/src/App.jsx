import { useState, createContext, useContext} from 'react'
import './App.css'
import Home from './Componenets/Home'
import Ratings from './Componenets/Ratings'
import Guards from './Componenets/Guards';
import Forwards from './Componenets/Forwards';
import Centers from './Componenets/Centers';
import { Routes, Route, Link } from 'react-router-dom'
import PointGuards from './granchild-Components/PointGuards';


export const RatingContext=createContext();

function App() {
  const[rating, setRating]=useState('E')
  useContext(RatingContext)
  return (
    <>
      <RatingContext.Provider value={rating}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Ratings' element={<Ratings />} />
          <Route path='/Guards/*' element={<Guards />} />
          <Route path='/Forwards' element={<Forwards />} />
          <Route path='/Centers' element={<Centers />} />
          <Route path='/PointGuards' element={<PointGuards />} />
        </Routes>
      </RatingContext.Provider>
    </>
  )
}

export default App
