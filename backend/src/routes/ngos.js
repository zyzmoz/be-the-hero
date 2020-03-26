const route = require('express').Router();
const NgoController = require('../controllers/NgoController');

route.get('/', NgoController.index);
route.get('/details/:id', NgoController.index);
route.post('/', NgoController.create);
route.post('/:id', NgoController.update);
route.delete('/:id', NgoController.delete);

module.exports = route;