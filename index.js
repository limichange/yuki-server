const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const restc = require('restc')
const logger = require('morgan')

const PORT = process.env.PORT || 3000

const server = express()
server.use(cors())
server.use(logger('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(restc.express());

const userJSON = {
  nickname: 'houyao',
  uuid: '23ij293j922un392838hklbkbkbs82',
  avatar: 'http://tva3.sinaimg.cn/crop.0.0.180.180.50/6ecbbfd0jw1e8qgp5bmzyj2050050aa8.jpg'
}

const feeds = [{
  title: 'jQuery 和 Backbone',
  content: '前年，产品架构还是 jQuery 和 Backbone。但随着产品的业务复杂度不断增加，数据层的逻辑基本上还是链路很短的数据请求，而 View 层的交互逻辑却变得越来越复杂，难以维护。',
  author: userJSON,
  uuid: '9aa23i9283fasdfh293u',
  type: 'text',
  date: '2016-03-10'
}, {
  title: '为了解决业务上的痛点',
  content: '当初选择 React 的理由很简单，只是为了解决业务上的痛点。前年，产品架构还是 jQuery 和 Backbone。但随着产品的业务复杂度不断增加，数据层的逻辑基本上还是链路很短的数据请求，而 View 层的交互逻辑却变得越来越复杂，难以维护。',
  author: userJSON,
  uuid: '9aa23i9283f923h293u',
  type: 'text',
  date: '2016-03-11'
}, {
  title: '开发者更熟悉的模板与特性',
  content: 'Vue 使用的是 web 开发者更熟悉的模板与特性，React 的特色在于函数式编程的理念和丰富的技术选型。Vue 比起 React 更容易被前端工程师接受，这是一个直观的感受；React 则更容易吸引在 FP 上持续走下去的开发者。我想更多还是口味的不同。',
  author: userJSON,
  uuid: '23293jhhuuuauuewewe',
  type: 'text',
  date: '2016-03-12'
}];

server.get('/feed', (req, res) => {
  return res.json(feeds)
})

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
