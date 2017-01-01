var Strategy = require('passport-http-bearer').Strategy;
var passport = require('passport');

passport.use(new Strategy(
  function(token, cb) {
    // db.users.findByToken(token, function(err, user) {
    //   if (err) { return cb(err); }
    //   if (!user) { return cb(null, false); }
      return cb(null, user);
    // });
  }));
