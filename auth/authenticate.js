const passport = require('./passport').init()

const authenticate = {
  authenticateUser (req, res, next) {
    return passport.authenticate('bearer', {session: false},
      function authenticate(err, user, info) {

        if (err) {
          return next(err)
        }

        if (user) {
          req.authInfo = info
          req.user = user

          return next(null, user, info)
        } else {
          return next(new Error('Auth Error'))
        }
        // } else if (isBearerAutorizationHeader(req)) {
        //     return next(new errors.UnauthorizedError({
        //         message: i18n.t('errors.middleware.auth.accessDenied')
        //     }))
        // } else if (req.client) {
        //     req.user = {id: 0}
        //     return next()
        // }
        //
        // return next(new errors.UnauthorizedError({
        //     message: i18n.t('errors.middleware.auth.accessDenied')
        // }))
      }
    )(req, res, next)
  }
}

module.exports = authenticate
