const mongoose = require('mongoose')
const reviewSchema = require('./Review')
const parkSchema = require('./Park')

const Review = mongoose.model('Review', reviewSchema)
const Park = mongoose.model('Park', parkSchema)

module.exports = {
  Review,
  Park
}
