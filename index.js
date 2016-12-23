const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 3000

const server = express()
server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

server.get('/me', (req, res) => {
  return res.json({
    nickname: 'houyao',
    avatar: 'http://tva3.sinaimg.cn/crop.0.0.180.180.50/6ecbbfd0jw1e8qgp5bmzyj2050050aa8.jpg'
  })
})

server.listen(PORT, () => {
  console.log(`The API is listening on port ${PORT}`)
})
