const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {

    async index (req, res) {

        //buscar todos os devs num raio de 10km
        //filtrar por tecnologias

        const {latitude, longitude, techs} = req.query;

        const techsArray = parseStringAsArray(techs);

        console.log(latitude, longitude, techsArray);

        return res.json({ devs: [] });

    }

}