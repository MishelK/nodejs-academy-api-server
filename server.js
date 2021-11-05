const allMovies = [
  {
    id: 1,
    title: 'Spiderman',
    img: '',
    synopsis: 'Spiderman is Spiderman.',
    rating: 4,
    year: 2002,
  },
  {
    id: 2,
    title: 'Superman',
    img: '',
    synopsis: 'Superman is not Spiderman.',
    rating: 3,
    year: 2015,
  },
]

const express = require('express')
const serverLog = require('./serverLog')
const app = express()
const port = 8080
const moviesRouter = require('./routers/movies-router')

app.use(serverLog)

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use('/movies', moviesRouter)

app.post('/', (req, res, next) => {
  console.log(req.body)
  const { data } = req.body
  res.status('200').json({
    received: data,
  })
})

app.get('/', (req, res, next) => {
  res.status('200').json({
    server: '1.0.0',
    name: 'nodejs-api-server',
  })
})

app.listen(port, () => console.log(`server started on port ${port}`))
