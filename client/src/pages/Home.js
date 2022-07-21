import ParkCard from '../components/ParkCard'

const Home = (props) => {
  return (
    <div>
      <h1>Theme Park Reviews</h1>
      <ParkCard parks={props.parks} />
    </div>
  )
}

export default Home
