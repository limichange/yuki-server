const auth = require('./auth')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const restc = require('restc')
const logger = require('morgan')
const apiRouter = require('./api')

const PORT = process.env.PORT || 3000

const server = express()
server.use(cors())
server.use(logger('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(restc.express());
server.use(apiRouter)

server.listen(PORT, '0.0.0.0', () => {
  console.log(`The API is listening on port ${PORT}`)
})
