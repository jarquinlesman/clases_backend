'use strict'

const express = require('express');
const cors = require('cors');
const App = express();
const routes = require('./routes');

App.use(cors())
App.use(express.json());
App.use(express.urlencoded({ extended: false }));
App.use('/api', routes);

module.exports = App;