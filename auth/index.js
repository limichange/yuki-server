require('./auth-strategies')


exports.authToken = passport.authenticate('bearer', { session: false })
