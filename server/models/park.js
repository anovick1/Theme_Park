const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Park = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    url: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('park', Park)
