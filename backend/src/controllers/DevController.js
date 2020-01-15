const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {

    async store (req, res) {
    
        const {github_username, techs, latitude, longitude} = req.body;
    
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
        const {name = login, avatar_url, bio} = apiResponse.data;
        //{name = login} se o nome não existir ele utiliza o login
    
        //trim() remove os espaços antes e depois do array
        const techsArray = techs.split(',').map(tech => tech.trim());
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }
    
        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        })
    
        return res.json(dev);
        }

};