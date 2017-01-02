const passport = require('./passport').init()

const authenticate = {
  authenticateUser (req, res, next) {
    return passport.authenticate('bearer', {session: false},
      function authenticate(err, user, info) {

        if (err) {
          return next(err)
        }

        console.log(user)

        if (user) {
          req.authInfo = info
          req.user = user

          return next(null, user, info)
        } else {
          return next(new Error('Auth Error'))
        }
      }
    )(req, res, next)
  }
}

module.exports = authenticate
