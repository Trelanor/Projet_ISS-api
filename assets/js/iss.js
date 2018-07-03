var ISS_Position = null;

function getValue(){
    var requestURL = 'http://api.open-notify.org/iss-now.json';
    var request = new XMLHttpRequest();
   
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var ISS_Position = request.response.iss_position;
        functionPosition(ISS_Position);
    
        var ISS_Timestamp = request.response;
            functionTimestamp(ISS_Timestamp);
    }

    function functionPosition(jsonObj) {
        //console.log(jsonObj['latitude']);
        //console.log(jsonObj['longitude']);
    
        var ISSicon = L.icon({
            iconUrl: 'assets/img/ISS-sm.png',
            iconSize:     [40, 40], // size of the icon
            popupAnchor:  [-3, -26] // point from which the popup should open relative to the iconAnchor
        });
    
        var lastPosition = L.icon({
            iconUrl: 'assets/img/passage-iss.png',
            iconSize:     [5, 5], // size of the icon
        });
        
    
        var lastPositionISS = L.marker([jsonObj['latitude'],jsonObj['longitude']],{icon: lastPosition}).addTo(map);

        var positionISS = L.marker([jsonObj['latitude'],jsonObj['longitude']],{icon: ISSicon}, {draggable: true}).addTo(map);
        positionISS.bindPopup("ISS Position :<br> Latitude : " + jsonObj['latitude'] + ',<br>Longitude ' + jsonObj['longitude']).openPopup();
        
        setTimeout(function(){ 
            map.removeLayer(positionISS);
        }, 5000);
        
    }
    
    function functionTimestamp(jsonObj){
        console.log(jsonObj['timestamp']);
    }

}

window.setInterval("getValue()", "5000" );


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
            $("#astro").append('<li>'+ element.name +'</li>');
    
        })
    }    
}

astro();

window.setInterval("astro()", (1000 * 60 * 10) );
    //data['people'].forEach(function functionAstro(jsonObj) {
    //        
    //    }  ) 
    function speed(){
        
        R = 6378 //Rayon de la terre en km
    
        lat_a = convertRad(latitude);
        lon_a = convertRad(longitude);
        lat_b = convertRad(lat_b_degre);
        lon_b = convertRad(lon_b_degre);
        
        d = R * (Math.PI/2 - Math.asin( Math.sin(lat_b) * Math.sin(lat_a) + Math.cos(lon_b - lon_a) * Math.cos(lat_b) * Math.cos(lat_a)))
        // return d;
        // alert(d)
        $("#risetime").append('<p>'+'The distance between you and the ISS = ' + d + ' kms</p>');
    }
    // function getResults(d,h,m,s){
        
    //     return d/(h+m/60+s/3600);
    //   }

    //   function updateCockpit(time, lon, lat, alt, speed) {   // time in seconds since Jan. 01, 1970 UTC
    //     var gptField = document.getElementById("gpt");
    //     gptField.innerHTML = getCoordinatesString(lon, lat);
    //     var timeField = document.getElementById("time");
    //     timeField.innerHTML = getUTCTimeString(time);
    //     var altField = document.getElementById("alt");
    //     var speedField = document.getElementById("speed");
    //     if (isMetric) {
    //       altField.innerHTML = Math.round(alt) + " km";
    //       speedField.innerHTML = Math.round(speed * 1000.0) + " m/s<br />" + Math.round(speed * 3600.0) + " km/h";
    //     }
    //     else {
    //       altField.innerHTML = Math.round(alt / MILE_IN_KM) + " miles";
    //       speedField.innerHTML = formatDecimal(speed / MILE_IN_KM, 3) + " mps<br />" + Math.round(speed * 3600.0 / MILE_IN_KM) + " mph";
    //     }
    //   }