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

$("#first").on("click", function(){
		$(".us img").animate({opacity: '.2'});
		$(this).hide();
		$("#united_states").animate({margin: '0px'})
});
$("#second").on("click", function(){
		$(".gr img").animate({opacity: '.2'});
		$(this).hide();
		$("#germany").animate({margin: '0px'})
});
$("#third").on("click", function(){
		$(".ch img").animate({opacity: '.2'});
		$(this).hide();
		$("#chile").animate({margin: '0px'})
});
$("#fourth").on("click", function(){
		$(".fi img").animate({opacity: '.2'});
		$(this).hide();
		 $("#finland").animate({margin: '0px'})
});
		

$("#finland").on("swipe",function(){
  $(this).hide();
  	$("#fourth").hide();
});
$("#chile").on("swipe",function(){
  $(this).hide();
  $("#third").hide();
});
$("#germany").on("swipe",function(){
  $(this).hide();
  $("#second").hide();
});


// $.getJSON("http://cooper-union-youtube-proxy.herokuapp.com/search/video/", function(duck){
		
// 		for (i = 0; i<=2; i++) {

// 	var description = duck.items[i].snippet.description;
// 	console.log(duck)

});


