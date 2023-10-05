import { useState, createContext, useContext} from 'react'
import './App.css'
import Home from './Componenets/Home'
import News from './Componenets/News'
import Ratings from './Componenets/Ratings'
import Reviews from './Componenets/Reviews'
import { Routes, Route, Link } from 'react-router-dom'


export const RatingContext=createContext();

function App() {
  const[rating, setRating]=useState('E')
  useContext(RatingContext)
  return (
    <>
      <RatingContext.Provider value={rating}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/News' element={<News />} />
          <Route path='/Ratings' element={<Ratings />} />
          <Route path='/Reviews' element={<Reviews />} />
        </Routes>
      </RatingContext.Provider>
    </>
  )
}

export default App
