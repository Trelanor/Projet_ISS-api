function getValue(){
var requestURL = 'http://api.open-notify.org/iss-now.json';
var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var ISS_Position = request.response.iss_position;
            ISS_position(ISS_Position);
    }

    function ISS_position(jsonObj) {
        console.log(jsonObj['latitude']);
        console.log(jsonObj['longitude']); 

    var test = L.marker([jsonObj['latitude'],jsonObj['longitude']], {draggable: true}).addTo(map);
    test.bindPopup("ISS Position :<br> Latitude : " + jsonObj['latitude'] + ',<br>Longitude ' + jsonObj['longitude']).openPopup();

    setTimeout(function(){ 
        map.removeLayer(test);
    }, 5000);
    
    }
};
    window.setInterval("getValue()", "5000", );

	$.getJSON('http://api.open-notify.org/astros.json', function(astro) {
	    console.log(astro);
	});
