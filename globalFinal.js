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
					

				for (i = 0; i<=19; i++) {
					console.log(response.tracks[i]);
					 // $("."+ specificCountry).append("<a href='https://www.google.com/''>" + response.tracks[i].track_name + "</a>");
						 $("."+ specificCountry).append("<a href="+response.tracks[i].track_url+"><span id="+specificCountry+i+" class="+specificSelector+"><img src="+response.tracks[i].artwork_url+" class='hover'/></span></a>");

						$("#"+specificCountry+i).append("<div class=overlay><h1 id=numStream>"+response.tracks[i].num_streams+" <p>Streams</p></h1></div>")

				};
			})
		})(country, selector);
	}


};

display(countries);


		


// $.getJSON("http://cooper-union-youtube-proxy.herokuapp.com/search/video/", function(duck){
		
// 		for (i = 0; i<=2; i++) {

// 	var description = duck.items[i].snippet.description;
// 	console.log(duck)

});



//maybe if a response is not playable, i make a big deal out of that fact with a boolean. and make that link take you somewhere.