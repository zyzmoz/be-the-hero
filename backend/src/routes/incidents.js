const route = require('express').Router();
const IncidentsController = require('../controllers/IncidentsController');

route.get('/', IncidentsController.index);
route.post('/', IncidentsController.create);
route.post('/:id', IncidentsController.update);
route.delete('/:id', IncidentsController.delete);

module.exports = route;