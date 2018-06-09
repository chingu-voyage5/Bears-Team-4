const _ = require("lodash");

var users = [
  {
    id: 1,
    name: 'test',
    password: 'test'
  }
];

module.exports = function (passport, passportJWT, jwtOptions) {
    
    passport.use(new passportJWT.Strategy(jwtOptions, function(jwt_payload, next) {
    
      var user = users[_.findIndex(users, {id: jwt_payload.id})];
      if (user) {
        next(null, user);
      } else {
        next(null, false);
      }
    }));
        
};