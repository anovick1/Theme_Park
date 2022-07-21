const ReviewCard = (props) => {
  let arr = []
  let stars = ''
  for (let i = 0; i < props.reviews.length; i++) {
    if (props.id === props.reviews[i].park) {
      arr.push(props.reviews[i])
    }
  }

  const drawStars = (rating) => {
    if (parseInt(rating) === 1) {
      stars = '★☆☆☆☆'
    }
    if (parseInt(rating) === 2) {
      stars = '★★☆☆☆'
    }
    if (parseInt(rating) === 3) {
      stars = '★★★☆☆'
    }
    if (parseInt(rating) === 4) {
      stars = '★★★★☆'
    }
    if (parseInt(rating) === 5) {
      stars = '★★★★★'
    }
  }

  return (
    <div className="review-list">
      {arr.map((review) => (
        <div className="review-card" key={review.name}>
          <div className="border">
            <h2>{review.name}</h2>
            <p id="location">{review.location}</p>
          </div>
          <p>{review.text}</p>
          <div className="border">
            {drawStars(review.rating)}
            <h3>{stars}</h3>
            <p id="date">{review.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReviewCard
