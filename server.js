const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
var passport = require('passport');
var bcrypt = require('bcryptjs');
var session = require('express-session');
var flash = require('connect-flash');

const port = process.env.PORT || '3000';
const app = express();

const configdb = require('./server/config/db');
mongoose.connect(configdb.url);

var corsOptions = {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'UPDATE'],
  credentials: true
};

app.use(cors(corsOptions));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// passport
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// All API routes
var api = require('./server/routes/api');

// API routes
app.use('/api', api);

// Catch all other routes and return the index file from dist folder
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname,'dist/index.html'));
});


//const server = http.createServer(app);
app.set('port', port);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, function() {
  console.log('Soundmind app listening on port ' + port);
});
