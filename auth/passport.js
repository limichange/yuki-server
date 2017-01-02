const BearerStrategy = require('passport-http-bearer').Strategy
const passport = require('passport')
const authStrategies = require('./auth-strategies')

module.exports = {
  init () {
    passport.use(new BearerStrategy(authStrategies.bearerStrategy))
    return passport
  }
}
