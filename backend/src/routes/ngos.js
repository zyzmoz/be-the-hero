const route = require('express').Router();
const NgoController = require('../controllers/NgoController');

/**
 * List all NGOs
 * @route GET /api/ngos
 * @group NGOs   
 * @returns {object} 200 - Returns NGOs 
 */
route.get('/', NgoController.index);
/**
 * Get NGO details
 * @route GET /api/ngos/:id
 * @group NGOs  
 * @param {number} id.param.required 
 * @returns {object} 200 - Returns NGO  
 */
route.get('/details/:id', NgoController.index);
/**
 * Create a new NGO
 * @route POST /api/ngos
 * @group NGOs   
 * @param {string} name.body.required
 * @param {string} email.body.required 
 * @param {string} whatsapp.body.required
 * @param {string} city.body.required
 * @param {string} state.body.required
 * @returns {object} 200 - Returns NGO id 
 */
route.post('/', NgoController.create);
/**
 * Update NGO data
 * @route POST /api/ngos/:id
 * @group NGOs  
 * @param {number} id.param.optional
 * @param {string} name.body.optional
 * @param {string} email.body.optional 
 * @param {string} whatsapp.body.optional
 * @param {string} city.body.optional
 * @param {string} state.body.optional
 * @returns {object} 200 - Returns incident id 
 */
route.post('/:id', NgoController.update);
/**
 * Delete NGO
 * @route DELETE /api/ngos/:id
 * @group NGOs  
 * @param {number} id.param.required 
 * @returns {object} 204
 */
route.delete('/:id', NgoController.delete);

module.exports = route;