const passport = require('./passport')
const authenticate = require('./authenticate')

exports.init = function (options) {
  return passport.init(options)
    .then(function (response) {
       return {
         auth: response.passport
       }
    });
};

exports.authenticate = authenticate
