const User = require('../models/user')

User.create({
  nickname: 'nickname5',
  password: 'password5',
  username: 'username5'
}).then((user) => {
  console.log(user.toJSON())
})
