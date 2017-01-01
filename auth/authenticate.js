const passport = require('passport')

const authenticate = {
  authenticateUser (req, res, next) {
    return passport.authenticate('bearer', {session: false, failWithError: false},
      function authenticate(err, user, info) {
        if (err) {
            return next(err); // will generate a 500 error
        }

        if (user) {
            req.authInfo = info;
            req.user = user;

            events.emit('user.authenticated', user);
            return next(null, user, info);
        } else if (isBearerAutorizationHeader(req)) {
            return next(new errors.UnauthorizedError({
                message: i18n.t('errors.middleware.auth.accessDenied')
            }));
        } else if (req.client) {
            req.user = {id: 0};
            return next();
        }

        return next(new errors.UnauthorizedError({
            message: i18n.t('errors.middleware.auth.accessDenied')
        }));
      }
    )(req, res, next);
  }
}

module.exports = authenticate
