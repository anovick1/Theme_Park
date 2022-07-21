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
    <div>
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
          value={newReview.img}
          onChange={handleChange}
          name={'img'}
          placeholder={'image'}
        />
        <input
          type="text-area"
          value={newReview.description}
          onChange={handleChange}
          name={'description'}
          placeholder={'description'}
        />
        <input
          type="text"
          value={newReview.price}
          onChange={handleChange}
          name={'price'}
          placeholder={'price'}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ReviewForm
