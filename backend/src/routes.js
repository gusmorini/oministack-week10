const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

// Metodos HTTP: GET, POST, PUT, DELETE;
// tipos parametros;
// Query Params: req.query (filtros, ordenação, paginação, ...)
// Route Params:  req.params (identificação alteração ou remoção)
// Body: req.body (Dados para criação ou alteração de registro)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs', DevController.update);
routes.delete('/devs/:github_username', DevController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;