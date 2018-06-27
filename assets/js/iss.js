function getValue(){
var requestURL = 'http://api.open-notify.org/iss-now.json';
var request = new XMLHttpRequest();
    request.open('GET', requestURL, true);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var ISS_Position = request.response.iss_position;
            functionPosition(ISS_Position);

        var ISS_Timestamp = request.response;
            functionTimestamp(ISS_Timestamp);
    }

    function functionPosition(jsonObj) {
        console.log(jsonObj['latitude']);
        console.log(jsonObj['longitude']); 

        var ISSicon = L.icon({
            iconUrl: 'assets/img/ISS-sm.png',
        
            iconSize:     [40, 40], // size of the icon
            popupAnchor:  [-3, -26] // point from which the popup should open relative to the iconAnchor
        });

        var lastPosition = L.icon({
            iconUrl: 'assets/img/passage-iss.png',
        
            iconSize:     [5, 5], // size of the icon
        });

    var lastPostionISS = L.marker([jsonObj['latitude'],jsonObj['longitude']],{icon: lastPosition}).addTo(map);

    var positionISS = L.marker([jsonObj['latitude'],jsonObj['longitude']],{icon: ISSicon}, {draggable: true}).addTo(map);
    positionISS.bindPopup("ISS Position :<br> Latitude : " + jsonObj['latitude'] + ',<br>Longitude ' + jsonObj['longitude']).openPopup();

    setTimeout(function(){ 
        map.removeLayer(positionISS);
    }, 5000);
    
    };

    function functionTimestamp(jsonObj){
        console.log(jsonObj['timestamp']);
    }

};
    window.setInterval("getValue()", "5000", );

	$.getJSON('http://api.open-notify.org/astros.json', function(astro) {
	    console.log(astro);
	});


    