const express = require('express');
const routes = express.Router();
const Product = require('./controllers/controler1')



routes.get("/products", Product.index);
routes.get("/products/:id", Product.show);
routes.post('/products', Product.store); //post é uma rota para criar algo no servidor.
routes.put('/products/:id',  Product.update);
routes.delete('/products/:id',  Product.destroy);
module.exports = routes;