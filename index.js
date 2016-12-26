const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const restc = require('restc')
const logger = require('morgan')
// const lusca = require('lusca')

const PORT = process.env.PORT || 3000

const server = express()
server.use(cors())
// server.use(lusca.xssProtection(true))
// server.use(lusca.csrf())
server.use(logger('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(restc.express());

const userJSON = {
  nickname: 'houyao',
  uuid: '23ij293j922un392838hklbkbkbs82',
  avatar: 'http://tva3.sinaimg.cn/crop.0.0.180.180.50/6ecbbfd0jw1e8qgp5bmzyj2050050aa8.jpg'
}

server.get('/me', (req, res) => {
  return res.json(userJSON)
})

server.post('/user/signIn', (req, res) => {
  console.log(req.body)
  return res.json(userJSON)
})

server.listen(PORT, '0.0.0.0', () => {
  console.log(`The API is listening on port ${PORT}`)
})
