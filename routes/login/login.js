const _ = require('lodash');
const jwt = require('jsonwebtoken');

var users = [
  {
    id: 1,
    name: 'test',
    password: 'test'
  }
];

module.exports = (req, res) => {
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
        var token = jwt.sign(payload, 'zse45tgb');
        res.json({message: "Authenticated", token: token});
      } else {
        res.status(401).json({message:"Incorrect password"});
      }
  };