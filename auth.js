const _ = require("lodash");
const passportJWT = require("passport-jwt");
const jwt = require("jsonwebtoken");
const passport = require("passport");

module.exports = function (app) {
    app.use(passport.initialize());
    var users = [
        {
          id: 1,
          name: 'test',
          password: 'test'
        }
      ];
    
    var jwtOptions = {}
    jwtOptions.jwtFromRequest = passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
    jwtOptions.secretOrKey = 'zse45tgb';
    
    passport.use(new passportJWT.Strategy(jwtOptions, function(jwt_payload, next) {
    
      var user = users[_.findIndex(users, {id: jwt_payload.id})];
      if (user) {
        next(null, user);
      } else {
        next(null, false);
      }
    }));

    app.post("/login", function(req, res) {
        if(req.body.name && req.body.password){
          var name = req.body.name;
          var password = req.body.password;
        }
      
        var user = users[_.findIndex(users, {name: name})];
        if( ! user ){
          res.status(401).json({message:"User not found"});
          return;
        }
        
        if(user.password === req.body.password) {
          var payload = {id: user.id};
          var token = jwt.sign(payload, jwtOptions.secretOrKey);
          res.json({message: "Authenticated", token: token});
        } else {
          res.status(401).json({message:"Incorrect password"});
        }
      });
      
      app.get("/access", passport.authenticate('jwt', { session: false }), function(req, res){
          res.json("Success");
        });
        
};