const main = require('express').Router();
const access = require('./access');
const passport = require('passport');

main.get('/', passport.authenticate('jwt', { session: false }), access);

module.exports = main;