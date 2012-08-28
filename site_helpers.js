var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {

	get: function(basepath, content_type, request_options, callback) {
		var self = this;
		var response_options = { "header": {} };

		if (basepath === "/index") {
			response_options.header["Set-Cookie"] = "bg=" + getRandomInt(0, 1);
			return callback(null, { "index": true }, {}, response_options); 
		} else {
			return callback(null, { "index": false }, {}, response_options); 
		}
	}

}
