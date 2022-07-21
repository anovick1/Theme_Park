import './styles/App.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import ParkDetails from './components/ParkDetails'
import axios from 'axios'

const App = () => {
  const [parks, setParks] = useState([])
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getParks = async () => {
      const response = await axios.get('http://localhost:3001/parks')
      setParks(response.data)
      // check back on this later
    }
    getParks()
  }, [])
  useEffect(() => {
    const getReviews = async () => {
      const response = await axios.get('http://localhost:3001/reviews')
      setReviews(response.data)
      // check back on this later
    }
    getReviews()
  }, [])

  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home parks={parks} />} />
          <Route
            path="/:id"
            element={
              <ParkDetails
                parks={parks}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
