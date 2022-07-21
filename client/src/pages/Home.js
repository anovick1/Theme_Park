import ParkCard from '../components/ParkCard'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = (props) => {
  return (
    <div>
      <h1>Park</h1>
      <ParkCard parks={props.parks} />
    </div>
  )
}

export default Home
