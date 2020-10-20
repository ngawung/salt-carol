var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');
var createError = require('http-errors');
var firebase = require('firebase-admin');
var verifyToken = require('./middleware/verifyToken.js');

var exec = require('child_process').exec;

var serviceAccount = require(__dirname + '/.data/serviceAccountKey.json');

firebase.initializeApp({
	credential: firebase.credential.cert(serviceAccount),
	databaseURL: "https://nevron-68ba3.firebaseio.com"
});

var app = express();
var upload = multer();

var indexRouter = require(__dirname + '/router/index.js');
var puruRouter = require(__dirname + '/router/puru.js');
var authRouter = require(__dirname + '/router/auth.js');

// view engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// Midleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload.array());
app.use(cookieParser());
app.use(express.static('public'));

// Router
app.use('/', indexRouter);
app.use('/puru', puruRouter);
app.use('/auth', authRouter);

// 404


// error handler


var listener = app.listen((process.env.PORT || 3000), function() {
	console.log('Your app is listening on port ' + listener.address().port);
});
