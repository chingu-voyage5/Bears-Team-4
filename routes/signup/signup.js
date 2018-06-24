const jwt = require('jsonwebtoken');
const User = require('../../models/user.js');

module.exports = (req, res) => {
  if(req.body.name && req.body.password && req.body.email){
    var name = req.body.name;
    var password = req.body.password;
    var email = req.body.email;
  }

  User.findOne({'username':name}, function(err,user){
    if(err) throw err;
    
    if( ! user ){
      var newUser = new User();
      newUser.username = name;
      newUser.password = password;
      newUser.schedules = [];
      newUser.email = email;
      newUser.save(function(err){
        if(err) throw err;
        var payload = {id: newUser.id};
        var token = jwt.sign(payload, 'zse45tgb');
        res.cookie('jwt',token);
        res.json({message: "Authenticated", token: token, user:newUser.username});
      });
    }
    else{
      res.status(401).json({message:"Username already taken"});
    }

  });

  };