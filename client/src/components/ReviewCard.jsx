const ReviewCard = (props) => {
  let arr = []
  for (let i = 0; i < props.reviews.length; i++) {
    if (props.id === props.reviews[i].park) {
      arr.push(props.reviews[i])
    }
  }

  return (
    <div className="review-list">
      {arr.map((review) => (
        <div className="review-card" key={review.name}>
          <h2>{review.name}</h2>
          <h3>{review.location}</h3>
          <h3>{review.text}</h3>
          <h3>{review.date}</h3>
          <h3>{review.rating}</h3>
        </div>
      ))}
    </div>
  )
}

export default ReviewCard
