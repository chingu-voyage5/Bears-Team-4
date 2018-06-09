const routes = require('express').Router();
const login = require('./login');
const access = require('./access');

routes.use('/login', login);
routes.use('/access', access);

module.exports = routes;