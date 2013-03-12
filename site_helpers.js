var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {

	get: function(basepath, content_type, request_options, callback) {
		var self = this;
		var response_options = { "header": {} };

		if (basepath === "/index") {
			response_options.header["Set-Cookie"] = "bg=" + getRandomInt(0, 1);
			return callback(null, { "tag": { "index": true } }, response_options, new Date());
		} else {
			return callback(null, { "tag": {  "index": false } }, {}, response_options, new Date());
		}
	}

}
