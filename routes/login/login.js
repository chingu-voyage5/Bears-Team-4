const jwt = require('jsonwebtoken');
const User = require('../../models/user.js');

module.exports = (req, res) => {
    if(req.body.name && req.body.password){
        var name = req.body.name;
        var password = req.body.password;
      }

      User.findOne({'username':name}, function(err,user){
        if(err) throw err;

        if( ! user ){
          res.status(401).json({message:"User not found"});
          return;
        }
  
        if(user.password === req.body.password) {
          var date = new Date();
          var payload = {id: user.id,iat:date.getTime(),};
          var token = jwt.sign(payload, 'zse45tgb',{expiresIn: '1d'});
          res.cookie('jwt',token);
          res.json({message: "Authenticated", user:user.username});
        } else {
          res.status(401).json({message:"Incorrect password"});
        }
      });
    
  };