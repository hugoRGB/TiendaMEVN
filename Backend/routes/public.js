var express = require('express');
var publicController = require('../controllers/publicController');

var api = express.Router();

api.get('/obtener_nuevos_productos', publicController.obtener_nuevos_productos);
api.get('/obtener_productos_descuento', publicController.obtener_productos_descuento);
api.get('/obtener_productos_shop', publicController.obtener_productos_shop);
api.get('/listar_categorias_shop', publicController.listar_categorias_shop);

module.exports = api;