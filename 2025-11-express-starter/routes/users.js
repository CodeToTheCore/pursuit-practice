const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersContrller');

router.get('/', usersController.listUsers);

module.exports = router;