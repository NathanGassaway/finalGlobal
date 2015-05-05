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
					

				for (i = 0; i<=9; i++) {
					console.log(response.tracks[i]);
					// $("."+ specificCountry).append(response.tracks[i].track_name);
						$("."+ specificCountry).append("<span class="+specificSelector+">"+ "<p>||</p>"+ "<img src="+response.tracks[i].artwork_url+" class='hover'/>"+"</span>");
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
});



//maybe if a response is not playable, i make a big deal out of that fact with a boolean. and make that link take you somewhere.