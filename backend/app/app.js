'use strict'

const express = require('express');
const cors = require('cors');
const App = express();

App.use(cors())
App.use(express.json());
App.use(express.urlencoded({ extended: false }));

module.exports = App;