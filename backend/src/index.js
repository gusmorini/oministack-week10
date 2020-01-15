const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// conexão com o banco
mongoose.connect('mongodb+srv://gusmorini:<opsopsadmin>@cluster0-pfmdr.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// habilita o json dentro do express
app.use(express.json());

app.use(routes);

app.listen(3333);