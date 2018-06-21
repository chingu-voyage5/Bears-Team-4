const routes = require('express').Router();
const login = require('./login');
const access = require('./access');
const signup = require('./signup');

routes.use('/login', login);
routes.use('/access', access);
routes.use('/signup', signup);

module.exports = routes;