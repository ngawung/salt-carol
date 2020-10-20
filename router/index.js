var express = require('express');
var firebase = require('firebase-admin');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('auth', {title: "Firebase Auth test"});
});

router.post('/register', function(req, res) {
	
});

router.post('/login', function(req, res) {
            
	firebase.auth().verifyIdToken(req.body.token).then(function(decodedToken) {
        var uid = decodedToken.uid;
        res.send(uid);
    }).catch(function(error) {
        res.send('error' + error);
    });
});

module.exports = router;var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('index', {title: "Nevron Homepage"});
});

module.exports = router;