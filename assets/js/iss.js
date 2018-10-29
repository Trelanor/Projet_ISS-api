
//Define starting point on Leaflet map
var map = L.map('map', {
    center: ['10', '10'],
    zoom: 3 
});
    

function convertRad(input){
    return (Math.PI * input)/180;
};

//Layer MapBox
L.tileLayer('https://api.mapbox.com/styles/v1/trelanor/cjivfv7xf4txn2qs4t8kaj9nb/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidHJlbGFub3IiLCJhIjoiY2ppdmVkd3QwMWFraTNxbXZleWV0ejF6cyJ9.RrESCs90t5bLD25_aI-DWA', {
    attribution: '&copy; <a href="https://www.mapbox.com/copyright">Mapbox</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18,
    minZoom: 2,
}).addTo(map);

// map.locate({setView: true, maxZoom: 8});

var myMarker = null;

// Function Once who allow an other function to be used only one time (Without refresh)
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

//Pass time of ISS in function of client location, used with ONCE Function to avoid spam
var CanUseOnlyOneTime = once(function Risetime(coords) {

        var requestURL = 'api.php?lat='+ coords.latitude +'&lon='+ coords.longitude ;
        var request = new XMLHttpRequest();
        
        request.open('GET', requestURL, true);
        request.responseType = 'json';
        request.send();
        
        request.onload = function() { 
            $("#risetime").append('<h2>When ISS pass above you :</h2>');   
            $.each(request.response.response, function(key, element) {
                var date = new Date(element['risetime']*1000);
                
                $("#risetime").append('<li>'+ date.toString() +'</li>');
            })
        }    
    }
);

//Distance between ISS and Client location, used with ONCE Function to avoid spam too
var CanUseOnlyOneTime_Second = once(function distance(coords){
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
});

//Calcul of the distance between ISS and Client Location
function itineraire(latitude, longitude, lat_b_degre, lon_b_degre){
        
    R = 6378 //Rayon de la terre en km

    lat_a = convertRad(latitude);
    lon_a = convertRad(longitude);
    lat_b = convertRad(lat_b_degre);
    lon_b = convertRad(lon_b_degre);
    
    d = R * (Math.PI/2 - Math.asin( Math.sin(lat_b) * Math.sin(lat_a) + Math.cos(lon_b - lon_a) * Math.cos(lat_b) * Math.cos(lat_a)))
    $("#risetime").append('<p>'+'The distance between you and the ISS = ' + d.toFixed(2) + ' kms</p>');
}
//geoLocation of the client 
function geoLoc() {
    $('#myLocation').click(function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            function geoPos(position) {

                myMarker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
                myMarker.bindPopup("My position :<br> Latitude : " + position.coords.latitude + ',<br>Longitude ' + position.coords.longitude).openPopup();                
                
                CanUseOnlyOneTime(position.coords); // Launch function RiseTime with just 1 time.
                CanUseOnlyOneTime_Second(position.coords); //Same but for an other function

            }, 
            function(error) {
                console.log(error);
                }, 
            );
        } else {
            alert("La géolocalisation n'est pas supportée par ce navigateur.");
        }
    })
    
}
geoLoc();


                        //                  /\
                        //                  ||
                        //                 ====
                        //                 |  |
                        //                 |  |
                        //                 ====
                        //                 XXXX
                        //                 |\/|
                        //                 |/\|
                        //                 |\/|
                        //                 |/\|
                        //                 |\/|
                        //                 |/\|
                        //                /____\
                        //                |    |
                        //                |    |
                        //               /      \
                        //              /        \
                        //             /          \
                        //            /            \
                        //           /              \
                        //           ----------------
                        //           |--------------|
                        //           |              |
                        //           |              |
                        //           |     _____    |
                        //           |       |      |
                        //           |     __|__    |      
                        //           |     ____     |
                        //           |     |___     |
                        //           |     ____|    |
                        //           |     ____     |
                        //           |     |___     |
                        //           |     ____|    |
                        //           |              |
                        //           |              |
                        //           |              |
                        //           |              |
                        //           |              |
                        //           |              |
                        //           |              |
                        //           |              |
                        //           |              |
                        //           |              |
                        //           |              |
                        //           |              |
                        //           |              |
                        //           |              |
                        //           |              |
                        //           |              |
                        //           |              |
                        //           |              |
                        //           |      __      |
                        //          /|      ||      |\
                        //         / |      ||      | \
                        //        /  |      ||      |  \
                        //       /   |      ||      |   \
                        //  -----    |      HH      |    -----
                        //  |   |    |      HH      |    |   |
                        //  |   |    |      HH      |    |   |
                        //  |   |    |      HH      |    |   |
                        //  |   |    |______HH______|    |   |
                        //  --------/       HH       \--------



var issHistory = [];
var positionISS = null;

// function who retrieve information of ISS and make Markers !

function getValue(){
    var requestURL = 'http://api.open-notify.org/iss-now.json';
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {        
        functionPosition(request.response.iss_position);
    }

    function functionPosition(jsonObj) {
        // map.removeLayer(positionISS);
        var ISSicon = L.icon({
            iconUrl: 'assets/img/ISS-sm.png',
            iconSize:     [60, 60], // size of the icon
            popupAnchor:  [-3, -26] // point from which the popup should open relative to the iconAnchor
        });
    
        var lastPosition = L.icon({
            iconUrl: 'assets/img/passage-iss.png',
            iconSize:     [5, 5], // size of the icon
        });
    
        issHistory.push([jsonObj['latitude'],jsonObj['longitude']]); 
    
        if (positionISS !== null) {
            map.removeLayer(positionISS);
        }
    
        var lastPositionISS = L.marker([jsonObj['latitude'],jsonObj['longitude']],{icon: lastPosition}).addTo(map);
    
        
        var LatISS = jsonObj['latitude'];
        var LngISS = jsonObj['longitude'];
        
    
        if (issHistory.length > 1) {
                var lastPos = issHistory[(issHistory.length - 2)];
                var lastLatISS = lastPos[0];
                var lastLngISS = lastPos[1];
                
    
                itineraireVitesse(lastLatISS, lastLngISS, LatISS, LngISS);
                
                var vitesse = d/5*3600;
    
                positionISS = L.marker([jsonObj['latitude'],jsonObj['longitude']],{icon: ISSicon}, {draggable: true}).addTo(map);
                positionISS.bindPopup("ISS Position :<br> Latitude : " + jsonObj['latitude'] + ',<br>Longitude ' + jsonObj['longitude']+ '<br>Speed of ISS : '+ vitesse.toFixed(2)).openPopup();
            
            
        }  else {
            positionISS = L.marker([jsonObj['latitude'],jsonObj['longitude']],{icon: ISSicon}, {draggable: true}).addTo(map);
            positionISS.bindPopup("ISS Position :<br> Latitude : " + jsonObj['latitude'] + ',<br>Longitude ' + jsonObj['longitude']).openPopup();
        }

            //map center ISS
        var markerBounds = L.latLngBounds([ positionISS.getLatLng()]);
        map.fitBounds(markerBounds,{maxZoom: 3});

    }
}





//Astronaut in the ISS at this moment.
function astro() {
    var requestURL = 'http://api.open-notify.org/astros.json';
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {    
        //var ISS_Astro = request.response.people.name;
        $("#astro").empty();
        $.each(request.response.people, function(key, element) {
            $("#astro").append('<b>'+ element.name +'</b>, ');
            //console.log(element);
        })
    }    
}


    //data['people'].forEach(function functionAstro(jsonObj) {
    //        
    //    }  ) 


//Speed of ISS every 5 seconds
function itineraireVitesse(lastLatISS, lastLngISS, LatISS, LngISS){

    R = 6378 //Rayon de la terre en km

    lat_a = convertRad(lastLatISS);
    lon_a = convertRad(lastLngISS);
    lat_b = convertRad(LatISS);
    lon_b = convertRad(LngISS);
    
    d = R * (Math.PI/2 - Math.asin( Math.sin(lat_b) * Math.sin(lat_a) + Math.cos(lon_b - lon_a) * Math.cos(lat_b) * Math.cos(lat_a)))

}

jQuery(document).ready(function(){
    getValue();
    astro();
    geoLoc();

    setInterval(function(){
        getValue();
    },5000);

    setInterval(function(){
        astro();
    },(1000 * 60 * 10));
})
