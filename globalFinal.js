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
			$.getJSON("http://cooper-union-spotify-proxy.herokuapp.com/daily/"+specificCountry+"/latest", function(response) {
					

				for (i = 0; i<=5; i++) {
					console.log(response.tracks[i]);
					 $("."+ specificCountry).append("<a href='https://www.google.com/''>" + response.tracks[i].track_name + "</a>");
						$("."+ specificCountry).append("<span class="+specificSelector+">"+ "<img src="+response.tracks[i].artwork_url+" class='hover'/>"+"</span>");
						// $("#"+ specificSelector).append("<p>" + response.tracks[i].num_streams + "</p>");

				};
			})
		})(country, selector);
	}


};

display(countries);



		$("#finland").click(function() {
		$(".fi").addClass("ch");
		$(".fi").removeClass("fi");
		// $.getJSON("http://cooper-union-spotify-proxy.herokuapp.com/daily/ch/latest", function(response) {
		// });
		

			        		});

// $.getJSON("http://cooper-union-youtube-proxy.herokuapp.com/search/video/take+me+to+church", function(duck){
		
// 		for (i = 0; i<=2; i++) {

// 	var description = duck.items[i].snippet.description;
// 	console.log(duck)

// $(".list").append("<p>" + description + "</p>");
		
// 		}
// 	});

});



//maybe if a response is not playable, i make a big deal out of that fact with a boolean. and make that link take you somewhere.