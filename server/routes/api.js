const express = require('express');
const router = express.Router();
/**
 * Variable routes
 */
var user = require('./user');

/**
 * Routes definition
 */
router.get('/user/all', user.getAllUsers);

module.exports = router;
