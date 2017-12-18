const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

const tokenSecret = "SOUNDMIND_TOKEN_SECRET";

const port = process.env.PORT || '3000';
const app = express();

const configdb = require('./server/config/db');
mongoose.connect(configdb.url);

var corsOptions = {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'UPDATE'],
  credentials: true
};

app.set('views', __dirname + '/server/views');
app.set('view engine', 'ejs');
app.set('jwtTokenSecret', tokenSecret);

require('./server/middleware/passport')(passport, app);

app.use(flash());
app.use(cors(corsOptions));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'soundmind_session_secret',
  resave: true,
  saveUninitialized: true
}));

// passport
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Point static path to src
app.use(express.static(path.join(__dirname, 'src'))); // set the static files location

// All API routes
var api = require('./server/routes/api');

// API routes
app.use('/api', api);

// Catch all other routes and return the index file from dist folder
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname,'src/index.html'));
});


//const server = http.createServer(app);
app.set('port', port);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, function() {
  console.log('Soundmind app listening on port ' + port);
});
