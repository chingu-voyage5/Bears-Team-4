const main = require('express').Router();
const signup = require('./signup');

main.post('/', signup);

module.exports = main;