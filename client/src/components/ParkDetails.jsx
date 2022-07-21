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
        <a href={park.url}>
          <h1>{park.name}</h1>{' '}
        </a>
        <img src={park.image} alt={park.name} />

        <h3>Address: {park.address}</h3>
      </div>
      <div className="reviews">
        <h1>Reviews</h1>
        <div className="review-form">
          <ReviewForm id={id} reviews={props.reviews} />
        </div>
        <ReviewCard reviews={props.reviews} id={id} />
      </div>

      <div className="back">
        <Link to="/">Back</Link>
      </div>
    </div>
  ) : null
}

export default ParkDetails
