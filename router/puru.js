var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	if (!req.query.id && !req.query.page && !req.query.type) {
		res.render('puru', {title: "Puru Clean v3"});
	} else {
		res.render('puru', {
			title: "Puru Clean v3",
			id: req.query.id,
			page: req.query.page,
			type: req.query.type
		});
	}
});

router.get('/:id([0-9]+)/:page([0-9]+)', function(req, res) {
	res.render('puru', {title: req.params.id});
});

module.exports = router;