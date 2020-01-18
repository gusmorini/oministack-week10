const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// conexão com o banco
mongoose.connect("mongodb+srv://gusmorini:Admin2009@cluster0-pfmdr.mongodb.net/week10?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());

// habilita o json dentro do express
app.use(express.json());

app.use(routes);

app.listen(3333);