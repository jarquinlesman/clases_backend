const express = require('express');
const router = express.Router();
const bloqueController = require('../controllers/bloquesController');

router.get('/bloques', bloqueController.getBloques);

module.exports = router;