
// definir point de depart ouverture page et choix de carte via leaflet

var map = L.map('map', {
    center: ['10', '10'],
    zoom: 3
});

function convertRad(input){
    return (Math.PI * input)/180;
};

L.tileLayer('https://api.mapbox.com/styles/v1/trelanor/cjivfv7xf4txn2qs4t8kaj9nb/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidHJlbGFub3IiLCJhIjoiY2ppdmVkd3QwMWFraTNxbXZleWV0ejF6cyJ9.RrESCs90t5bLD25_aI-DWA', {
    attribution: '&copy; <a href="https://www.mapbox.com/copyright">Mapbox</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18,
    minZoom: 2,
}).addTo(map);

var myMarker = null;



function once(fn, context) { 
	var result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
    };
}


var CanUseOnlyOneTime = once(function Risetime(coords) {

        var requestURL = 'api.php?lat='+ coords.latitude +'&lon='+ coords.longitude ;
        var request = new XMLHttpRequest();
        
        request.open('GET', requestURL, true);
        request.responseType = 'json';
        request.send();
        
        request.onload = function() {    
            $.each(request.response.response, function(key, element) {
                var date = new Date(element['risetime']*1000);
                
                $("#risetime").append('<li>'+ date.toString() +'</li>');
            })
        }    
    }
);

console.log('Fired!');

$(function() {
    $('#myLocation').click(function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            function (position) {

                myMarker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
                myMarker.bindPopup("Ma position :<br> Latitude : " + position.coords.latitude + ',<br>Longitude ' + position.coords.longitude).openPopup();                
                

                
                CanUseOnlyOneTime(position.coords); // Launch function RiseTime with just 1 time.
                distance(position.coords);

            }, 
            function(error) {
                console.log(error);
            }, {timeout:5000});
        } else {
            alert("La géolocalisation n'est pas supportée par ce navigateur.");
        }

    });
    
})

function distance(coords){
    var requestURL = 'http://api.open-notify.org/iss-now.json';
    var request = new XMLHttpRequest();
    
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var ISS_Position = request.response.iss_position;

        var lat_b_degre = ISS_Position['latitude'];
        var lon_b_degre = ISS_Position['longitude'];

        if (myMarker != null) {
            itineraire(myMarker._latlng.lat, myMarker._latlng.lng, lat_b_degre, lon_b_degre);
        }
        
    }
}

function itineraire(latitude, longitude, lat_b_degre, lon_b_degre){
        
    R = 6378 //Rayon de la terre en mètre

    lat_a = convertRad(latitude);
    lon_a = convertRad(longitude);
    lat_b = convertRad(lat_b_degre);
    lon_b = convertRad(lon_b_degre);
    
    d = R * (Math.PI/2 - Math.asin( Math.sin(lat_b) * Math.sin(lat_a) + Math.cos(lon_b - lon_a) * Math.cos(lat_b) * Math.cos(lat_a)))
    // return d;
    alert(d)
}