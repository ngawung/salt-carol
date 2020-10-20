var firebase = require('firebase-admin');

exports.verifyToken = async function(req, res, next) {
	var idToken = req.headers.authorization;
	try {
		var decodedToken = await firebase.auth().verifyIdToken(idToken);
		
		if (decodedToken) {
			req.body.uid = decodedToken.uid
			next();
		} else {
			res.status(401).send("no auth");
		}
	} catch(e) {
		res.status(401).send("no auth");
	}
}