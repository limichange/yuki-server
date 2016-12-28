const User = require('../models/user')

function logUserToJSON (user) {
  if (user) {
    console.log(user.toJSON())
  }
  return user
}

User
  .findOne({
    where: {
      id: 3
    }
  })
  .then(logUserToJSON)
  .then((user) => {
    return user.update({
      nickname: 'nickname333'
    })
  })
  .then(logUserToJSON)
