const {Router} = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

// Metodos HTTP: GET, POST, PUT, DELETE;
// tipos parametros;
// Query Params: req.query (filtros, ordenação, paginação, ...)
// Route Params:  req.params (identificação alteração ou remoção)
// Body: req.body (Dados para criação ou alteração de registro)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

module.exports = routes;