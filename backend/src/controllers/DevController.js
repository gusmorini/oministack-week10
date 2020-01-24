const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

// funcções do controller
// index, show, store, update, destroy

module.exports = {

    async index(req, res) {

        const devs = await Dev.find();

        return res.json(devs);

    },

    async store(req, res) {

        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = apiResponse.data;
            //{name = login} se o nome não existir ele utiliza o login

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });

            //filtrar as conexões que estão no maximo 10km
            // o novo dev tenha pelo menos 1 tecnologia pesquisada


            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsArray,
            );
            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }

        return res.json(dev);

    },

    async update(req, res) {

        // atualizar
        // techs, name, avatar_url, bio, location

        const { github_username, techs, latitude, longitude, name, avatar_url, bio } = req.body;

        const techsArray = parseStringAsArray(techs);

        const update = await Dev.findOneAndUpdate({ github_username }, {
            techs: techsArray,
            latitude,
            longitude,
            name,
            avatar_url,
            bio
        });

        return res.json(update);
    },

    async destroy(req, res) {
        const { github_username } = req.params;

        const del = await Dev.findOneAndDelete({ github_username });

        return res.json(del);
    },



};