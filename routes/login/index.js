const main = require('express').Router();
const login = require('./login');

main.post('/', login);

module.exports = main;