const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Review, Park } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/reviews', async (req, res) => {
  const reviews = await Review.find({})
  res.json(reviews)
})

app.get('/reviews/:id', async (req, res) => {
  try {
    const { id } = req.params
    const review = await Review.find({ park: id })
    if (!review) throw Error('Review not found')
    res.json(review)
  } catch (e) {
    console.log(e)
    res.send('Review not found!')
  }
})

app.get('/parks', async (req, res) => {
  const parks = await Park.find({})
  res.json(parks)
})

app.get('/parks/:id', async (req, res) => {
  try {
    const { id } = req.params
    const park = await Park.findById(id)
    if (!park) throw Error('Review not found')
    res.json(park)
  } catch (e) {
    console.log(e)
    res.send('Review not found!')
  }
})

app.post('/reviews/:id', async (req, res) => {
  try {
    const review = await new Review(req.body)
    await review.save()
    return res.status(201).json({
      review
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
