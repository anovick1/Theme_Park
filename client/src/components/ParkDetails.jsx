import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ReviewForm from './ReviewForm'
import ReviewCard from './ReviewCard'

const ParkDetails = (props) => {
  const [park, setPark] = useState('')

  let { id } = useParams()

  useEffect(() => {
    let selectedPark = props.parks.find((park) => park._id === id)
    setPark(selectedPark)
  }, [props.parks, id])

  return park ? (
    <div className="detail">
      <div className="detail-header">
        <img src={park.image} alt={park.name} />
        <div
          style={{
            minWidth: '30em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1>{park.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Price: ${park.price}</h3>
          <h3>park ID: {park._id}</h3>
        </div>
        <p>{park.description}</p>
      </div>
      <div>
        <ReviewCard reviews={props.reviews} />
      </div>
      <div>
        <ReviewForm id={id} reviews={props.reviews} />
      </div>

      <Link to="/">Back</Link>
    </div>
  ) : null
}

export default ParkDetails
