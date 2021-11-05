const express = require('express')
const serverLog = require('./serverLog')
const moviesRouter = require('./routers/movies-router')

const app = express()
const port = 8080

const myErrHandler = function (err, req, res, next) {
  console.log('SOME ERROR ACCRUED')
  console.error(err)
  res.status(500).send('Something broke!')
}

app.use(serverLog)
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use('/movies', moviesRouter)

app.get('/', (req, res, next) => {
  res.status(200).json({
    server: '1.0.0',
    name: 'nodejs-api-server',
  })
})

app.use(myErrHandler)

const server = app.listen(8080, () => console.log(`server started on port ${port}`))
module.exports = { app, server }
