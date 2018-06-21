const User = require('./models/user');

// User.find({}).remove().exec(); // For testing purposes

module.exports = function (passport, passportJWT, jwtOptions) {
    
    passport.use(new passportJWT.Strategy(jwtOptions, function(jwt_payload, next) {

      User.findOne({'_id':jwt_payload.id}, function(err,user){
        if(err) throw err;
        if (user) {
          next(null, user);
        } else {
          next(null, false);
        }
      });
    
    }));
        
};