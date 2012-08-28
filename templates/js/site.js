var bg_images = [
	{ "src": "/img/bg1.jpg", "owner": "lrargerich", "original_source": "http://www.flickr.com/photos/lrargerich/3522236501/" },
	{ "src": "/img/bg2.jpg", "owner": "rseidel3", "original_source": "http://www.flickr.com/photos/56194068@N04/6782070894/" }
];

var random_bg_image = bg_images[allCookies.getItem("bg")];
$(".bg-image").css("background-image", "url('" + random_bg_image.src + "')");
$(".bg-img-attributes").text(random_bg_image.owner);
$(".bg-img-attributes").attr("href", random_bg_image.original_source);

$("button#fetch_tweets").click(function() {
	var username = $("#usernameField").val().replace(/^(@)/, "");
	window.location.href = window.location.href + username;
});
