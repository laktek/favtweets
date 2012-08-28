var util = require("util");
var http = require("http");

module.exports = {

	isSection: function(basepath) {
		if (basepath === "/") {
			return true
		}
		return false;
	},

	negotiateContent: function(basepath, file_extension, options, callback) {
		var self = this;

		// if index is requested,
		// serve a blank object
		if (basepath === "/index") {
			return callback(null, {}, null, {});
		}

		var username = basepath.substr(1);

		var options = {
			host: "api.twitter.com",
			path: util.format("/1/favorites.json?count=20&screen_name=%s", username),
			method: "GET"
		};

		var req = http.request(options, function(res) {
			var full_body = "";

			res.setEncoding('utf8');

			res.on('data', function (chunk) {
				full_body += chunk;
			});

			res.on('end', function(){
				var tweets_obj = JSON.parse(full_body);
				return callback(null, { "user": username, "tweets": tweets_obj }, {}, new Date().getTime());
			});
		});

		req.on('error', function(e) {
			console.log("Error occurred when connecting to Twitter API: " + e.message);
			return callback(util.format("[Error: %s]", e.message), null, null, {});
		});

		req.end();
	}
}
