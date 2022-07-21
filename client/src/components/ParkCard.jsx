import { useNavigate } from 'react-router-dom'

const ParkCard = (props) => {
  let navigate = useNavigate()

  const showPark = (park) => {
    // console.log(park)
    navigate(`${park._id}`)
  }

  return (
    <div className="park-list">
      {props.parks.map((park) => (
        <div key={park.name} onClick={() => showPark(park)}>
          <div className="park">
            <img src={park.image} alt="Theme-Park" />
            <h2>{park.name}</h2>
            <h3>{park.address}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ParkCard
