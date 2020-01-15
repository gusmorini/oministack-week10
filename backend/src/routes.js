const {Router} = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

// Metodos HTTP: GET, POST, PUT, DELETE;
// tipos parametros;
// Query Params: req.query (filtros, ordenação, paginação, ...)
// Route Params:  req.params (identificação alteração ou remoção)
// Body: req.body (Dados para criação ou alteração de registro)

routes.post('/devs', async (req, res) => {
    
    const {github_username, techs} = req.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const {name = login, avatar_url, bio} = apiResponse.data;
    //{name = login} se o nome não existir ele utiliza o login

    //trim() remove os espaços antes e depois do array
    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    })

    return res.json(dev);
});

module.exports = routes;