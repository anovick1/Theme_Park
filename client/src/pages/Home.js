import ParkCard from '../components/ParkCard'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {
  const [parks, setParks] = useState([])

  useEffect(() => {
    const getParks = async () => {
      const response = await axios.get('http://localhost:3001/parks')
      setParks(response.parks)
      // check back on this later
    }
    getParks()
  }, [])

  return (
    <div>
      <h1>Park</h1>
      <ParkCard parks={parks} key={parks.id} />
    </div>
  )
}

export default Home
