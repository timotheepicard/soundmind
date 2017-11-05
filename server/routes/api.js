const express = require('express');
const router = express.Router();
const passport = require('passport');
const authentication = require('../middleware/authentication');

/**
 * ALl routes redirections
 */

const login = require('../routes/login');
const signup = require ('../routes/signup');

/**
 * Routes definition
 */
router.get('/login', login.showLoginPage);
router.post('/login',passport.authenticate('local-login'), login.getToken);

router.get('/signup', signup.showSignup);
router.post('/signup', passport.authenticate('local-signup'), login.getToken);
router.get('/welcome', signup.welcome);

router.get('/token', login.getToken);
router.get('/tokenInfo', authentication.isAuthenticated, login.getToken);

module.exports = router;
