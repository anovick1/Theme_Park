import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

const ReviewForm = (props) => {
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    park: props.id,
    text: '',
    date: '7/21/2022',
    rating: ''
  })

  const addReview = (e) => {
    e.preventDefault()
    const currentReviews = props.reviews
    const createdReview = {
      ...newReview,
      id: parseInt(props.reviews.length + 1),
      price: parseInt(newReview.price)
    }
    currentReviews.push(createdReview)
    props.setReviews(currentReviews)
    setNewReview({ id: '', name: '', img: '', description: '', price: '' })
  }

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    addReview(e)
    console.lot(props.reviews)
  }

  return (
    <div className="form">
      <h1>Add A New Review Listing</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newReview.name}
          onChange={handleChange}
          name={'name'}
          placeholder={'name'}
        />
        <input
          type="text"
          value={newReview.location}
          onChange={handleChange}
          name={'location'}
          placeholder={'hometown'}
        />
        <input
          type="text-area"
          value={newReview.text}
          onChange={handleChange}
          name={'text'}
          placeholder={'write review here'}
        />
        <input
          type="text"
          value={newReview.date}
          onChange={handleChange}
          name={'date'}
          placeholder={'date visited'}
        />
        <input
          type="text"
          value={newReview.rating}
          onChange={handleChange}
          name={'rating'}
          placeholder={'rating out of 5'}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ReviewForm
