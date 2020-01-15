const express = require('express');

const app = express();

// habilita o json dentro do express
app.use(express.json());

// Metodos HTTP: GET, POST, PUT, DELETE;
// tipos parametros;
// Query Params: req.query (filtros, ordenação, paginação, ...)
// Route Params:  req.params (identificação alteração ou remoção)
// Body: req.body (Dados para criação ou alteração de registro)

app.post('/users', (req, res) => {
    console.log(req.body);
    return res.json({message: ' Hello OminiStack'});
});

app.listen(3333);