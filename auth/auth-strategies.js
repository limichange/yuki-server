const dbModels = require('../db/models')

const strategies = {
  /**
   * BearerStrategy
   *
   * This strategy is used to authenticate users based on an access token (aka a
   * bearer token).  The user must have previously authorized a client
   * application, which is issued an access token to make requests on behalf of
   * the authorizing user.
   */
  bearerStrategy: function bearerStrategy(accessToken, done) {
    return dbModels.Accesstokens.findOne({
      token: accessToken
    })
    .then((model) => {
      if (model) {
        var token = model.toJSON();
        if (token.expires > Date.now()) {
            return dbModels.Users.findOne({
              id: token.user_id
            })
            .then(function then(model) {
              if (model) {
                return done(null, model.toJSON())
              } else {
                return done(null, false);
              }
            })
          } else {
            return done(null, false);
          }
      } else {
        return done(null, false);
      }
    })
  }
}

module.exports = strategies
