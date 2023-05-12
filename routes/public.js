const express = require('express');

const publicRoutes = require('../controllers/public')

const router = express.Router();

router.get('/', publicRoutes.getTodos);

module.exports = router;