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
    if (user) {
      user.destroy()
    }
    return user
  })
