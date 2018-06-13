const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passportJWT = require("passport-jwt");
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const auth = require("./auth");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());

app.use(passport.initialize());

var jwtOptions = {
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'zse45tgb'
  }

auth(passport, passportJWT, jwtOptions);

mongoose.Promise = global.Promise;

// mongoose.connect("mongodb://localhost:3000/vacation");

app.use('/', routes);

app.use('/',express.static('build'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(process.env.PORT || 3000,()=>
    console.log("Server is listening")
)