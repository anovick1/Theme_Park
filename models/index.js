const mongoose = require('mongoose')
const reviewSchema = require('./review')
const parkSchema = require('./park')

const Review = mongoose.model('Review', reviewSchema)
const Park = mongoose.model('Park', parkSchema)

module.exports = {
  Review,
  Park
}
