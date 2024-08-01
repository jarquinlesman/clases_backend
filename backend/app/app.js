'use strict'

const express = require('express');
const cors = require('cors');
const App = express();
//const periodoController = require('./controllers/periodoController');

App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended: false }));

//Declaro las rutas
const clases = require('./routes/clasesRoute');
const detalle_periodo = require('./routes/detalle_periodoRoute');
const periodo = require('./routes/periodoRoute');

App.use('/api', clases);
App.use('/api', detalle_periodo);
App.use('/api', periodo);

module.exports = App;