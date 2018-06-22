const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passportJWT = require("passport-jwt");
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const auth = require("./auth");
const cookiesMiddleware = require('universal-cookie-express');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());
app.use(cookiesMiddleware());
app.use(passport.initialize());


var jwtOptions = {
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'zse45tgb'
};

auth(passport, passportJWT, jwtOptions);

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/vacation");


app.use('/', routes);

// To add for deployment
/*app.use('/',express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})
*/

const listener = app.listen(8081,()=>
    console.log("Server is listening on "+listener.address().port)
)