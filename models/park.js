const mongoose = require('mongoose')
const Schema = mongoose.Schema

const parkSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    url: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = parkSchema
