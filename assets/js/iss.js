function getValue(){
	var res;
	
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: 'http://api.open-notify.org/iss-now.json',
		async: false,
		crossDomain: true,
		
		complete: function (data) {
			if (data.readyState === 4 && data.status === 200) {
				Lat = data.responseJSON.iss_position.latitude;
				Long = data.responseJSON.iss_position.longitude;
				//LatLong(Lat,Long);
				}
			}
		});
	}

console.log(getValue());

	$.getJSON('http://api.open-notify.org/astros.json', function(astro) {
	  console.log(astro);
	});