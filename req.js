var request = require('request');

var url = 'http://pururin.io';

request(url, function(error, response, body) {
	console.log(body);
});