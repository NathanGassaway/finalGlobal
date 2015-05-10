$(document).ready(function(){


var countries = [
	{
		"country":"us",
		"selector":"united_states"
	},
	{
		"country":"gr",
		"selector":"germany"
	},

	{
		"country":"ch",
		"selector":"chile"
	},

	{
		"country":"fi",
		"selector":"finland"
	},
];

var display = function(countries) {

	for(j in countries) {

		var selector = countries[j].selector;
		var country = countries[j].country;

		//anonyous functions in javascript
		(function(specificCountry, specificSelector){
			$.getJSON("http://cooper-union-spotify-proxy.herokuapp.com/daily/"+specificCountry+"/2015-03-09", function(response) {
					

				for (i = 0; i<=5; i++) {
					console.log(response.tracks[i]);
					 // $("."+ specificCountry).append("<a href='https://www.google.com/''>" + response.tracks[i].track_name + "</a>");
						$("."+ specificCountry).append("<a href="+response.tracks[i].track_url+">"+"'<span class="+specificSelector+">"+ "<img src="+response.tracks[i].artwork_url+" class='hover'/></span>"+"</a>");
						// $("#"+ specificSelector).append("<p>" + response.tracks[i].num_streams + "</p>");

		var countryUs = "<span class=us>"+ "<img src="+response.tracks[i].artwork_url+" class='hover'/></span>";
		var countryGr = "<span class=gr>"+ "<img src="+response.tracks[i].artwork_url+" class='hover'/></span>";
		var countryCh = "<span class=ch>"+ "<img src="+response.tracks[i].artwork_url+" class='hover'/></span>";
		var countryFi = "<span class=fi>"+ "<img src="+response.tracks[i].artwork_url+" class='hover'/></span>";

				};
			})
		})(country, selector);
	}


};

display(countries);

	// 	if (specificCountry == "us") {
	// 	$("#first").click(function() {
	// 	if (response.tracks[i].num_streams > 1000){
	// 		$(".us").after("<img src="+response.tracks[i].artwork_url+">"+response.tracks[i].num_streams);
	// 		$(".us").remove(".us");
	// 	}
	// 			 });
	// }
	// if (specificCountry == "gr") {
	// 	$("#second").click(function() {
	// 		if (response.tracks[i].num_streams > 1000){
	// 		$(".gr").after("<img src="+response.tracks[i].artwork_url+">"+response.tracks[i].num_streams);
	// 		$(".gr").remove(".gr");
	// 	}
	// 			 });
	// }
	// if (specificCountry == "ch") {
	// 	$("#third").click(function() {
	// 	if (response.tracks[i].num_streams > 1000){
	// 	$(".ch").after("<img src="+response.tracks[i].artwork_url+">"+response.tracks[i].num_streams);
	// 	$(".ch").remove(".ch");
	// }
	// 			 });
	// }
	// if (specificCountry == "fi") {
	// 	$("#fourth").click(function() {
	// 	if (response.tracks[i].num_streams > 1000){
	// 	$(".fi").after("<img src="+response.tracks[i].artwork_url+">"+response.tracks[i].num_streams);
	// 	$(".fi").remove(".fi");
	// }
	// 			 });
	// }
		


// $.getJSON("http://cooper-union-youtube-proxy.herokuapp.com/search/video/", function(duck){
		
// 		for (i = 0; i<=2; i++) {

// 	var description = duck.items[i].snippet.description;
// 	console.log(duck)

});



//maybe if a response is not playable, i make a big deal out of that fact with a boolean. and make that link take you somewhere.