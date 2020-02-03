const express = require('express');
const routers = express.Router();
const uuid = require('uuid/v1');

const productsRoute = require('./products/productsRoutes');
const notFoundRoute = require('./notFound/404');
const usersRoute = require('./users/users');
const findProductById = require('./products/productById');
const products = require('./products/products');
const findUserById = require('./users/userById');
const ordersRoute = require('./orders/orders')

const createId = (req, res, next) => {
  req.body.id = uuid()
  next();
}

routers
.get('/products/:id', findProductById)
.get('/products/*', productsRoute)
.get('/products', products)
.post('/users', createId, usersRoute)
.get('/users/:id', findUserById)
.post('/orders', ordersRoute)
.get('*', notFoundRoute)

module.exports = routers;