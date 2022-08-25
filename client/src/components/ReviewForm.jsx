import React, { useState } from 'react'
import axios from 'axios'

const ReviewForm = (props) => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const [rating, setRating] = useState('')

  const addReview = async (e) => {
    await axios.post('/reviews/' + props.id, {
      name: name,
      location: location,
      park: props.id,
      text: text,
      date: date,
      rating: rating,
      pfp: 'https://cdn.create.vista.com/api/media/small/483971320/stock-vector-profile-icon-users-vector-illustration'
    })

    setName('')
  }

  const changeName = (event) => {
    let n = event.target.value
    setName(n)
  }
  const changeLocation = (event) => {
    let n = event.target.value
    setLocation(n)
  }
  const changeText = (event) => {
    let n = event.target.value
    setText(n)
  }
  const changeDate = (event) => {
    let n = event.target.value
    setDate(n)
  }
  const changeRating = (event) => {
    let n = event.target.value
    setRating(n)
  }

  const handleSubmit = (e) => {
    addReview(e)
    console.lot(props.reviews)
  }

  return (
    <div className="form">
      <h1>Add A New Review Listing</h1>
      <div className="input-div">
        <form onSubmit={handleSubmit}>
          <div className="name-town-date">
            <input
              type="text"
              value={name}
              onChange={changeName}
              name={'name'}
              placeholder={'name'}
            />
            <input
              type="text"
              value={location}
              onChange={changeLocation}
              name={'location'}
              placeholder={'hometown'}
            />
            <input
              type="text"
              value={date}
              onChange={changeDate}
              name={'date'}
              placeholder={'date visited'}
            />
          </div>
          <textarea
            type="text-area"
            value={text}
            onChange={changeText}
            name={'text'}
            placeholder={'write review here'}
            className="write"
          />
          <div className="rating-submit">
            <input
              type="number"
              value={rating}
              onChange={changeRating}
              name={'rating'}
              placeholder={'rating out of 5'}
              id="rating"
            />
            <button id="form-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReviewForm
