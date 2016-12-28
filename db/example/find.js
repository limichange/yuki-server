const User = require('../models/user')

function logUserToJSON (user) {
  if (user) {
    console.log(user.toJSON())
  }
  return user
}

User
  .findAll()
  .then((result) => {
    result.forEach(logUserToJSON)
  })

User
  .findOne({
    where: {
      id: 3
    }
  })
  .then(logUserToJSON)

User
  .findById(4)
  .then(logUserToJSON)
