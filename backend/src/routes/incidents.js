const route = require('express').Router();
const IncidentsController = require('../controllers/IncidentsController');

/**
 * List Incidents
 * @route GET /api/incidents
 * @group Incidents  
 * @param {string} id.query.optional
 * @param {string} ngo_id.query.optional
 * @returns {object} 200 - An array of incidents 
 */
route.get('/', IncidentsController.index);

/**
 * Create Incident
 * @route POST /api/incidents
 * @group Incidents  
 * @param {string} title.body.required
 * @param {string} descripion.body.required 
 * @param {decimal} value.body.required
 * @param {string} ngo_id.body.required
 * @returns {object} 200 - Returns incident id 
 */
route.post('/', IncidentsController.create);
/**
 * Update Incident
 * @route POST /api/incidents/:id
 * @group Incidents  
 * @param {number} id.param.required
 * @param {string} title.body.optional
 * @param {string} descripion.body.optional 
 * @param {number} value.body.optional
 * @param {string} ngo_id.body.optional
 * @returns {object} 200 - Returns incident id 
 */
route.post('/:id', IncidentsController.update);

/**
 * Delete Incident
 * @route DELETE /api/incidents
 * @group Incidents  
 * @param {string} title.param.required 
 * @returns {object} 204 
 */
route.delete('/:id', IncidentsController.delete);



module.exports = route;