var issHistory = [];


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

    var ISSicon = L.icon({
        iconUrl: 'assets/img/ISS-sm.png',
        iconSize:     [40, 40], // size of the icon
        popupAnchor:  [-3, -26] // point from which the popup should open relative to the iconAnchor
    });

    var lastPosition = L.icon({
        iconUrl: 'assets/img/passage-iss.png',
        iconSize:     [5, 5], // size of the icon
    });

    issHistory.push([jsonObj['latitude'],jsonObj['longitude']]); 

    var lastPositionISS = L.marker([jsonObj['latitude'],jsonObj['longitude']],{icon: lastPosition}).addTo(map);

    
    var LatISS = jsonObj['latitude'];
    var LngISS = jsonObj['longitude'];
    

    
    setTimeout(function(){ 
        map.removeLayer(positionISS);
    }, 5000);
    
    
    if (issHistory.length > 1) {
            var lastPos = issHistory[(issHistory.length - 2)];
            var lastLatISS = lastPos[0];
            var lastLngISS = lastPos[1];


            itineraireVitesse(lastLatISS, lastLngISS, LatISS, LngISS);
            
            var vitesse = d/5*3600;

            var positionISS = L.marker([jsonObj['latitude'],jsonObj['longitude']],{icon: ISSicon}, {draggable: true}).addTo(map);
            positionISS.bindPopup("ISS Position :<br> Latitude : " + jsonObj['latitude'] + ',<br>Longitude ' + jsonObj['longitude']+ '<br>Speed of ISS : '+ vitesse.toFixed(2)).openPopup();
        
        
    }  

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
            $("#astro").append('<b>'+ element.name +'</b>, ');
            //console.log(element);
        })
    }    
}

astro();

window.setInterval("astro()", (1000 * 60 * 10) );

    //data['people'].forEach(function functionAstro(jsonObj) {
    //        
    //    }  ) 



function itineraireVitesse(lastLatISS, lastLngISS, LatISS, LngISS){

    R = 6378 //Rayon de la terre en km

    lat_a = convertRad(lastLatISS);
    lon_a = convertRad(lastLngISS);
    lat_b = convertRad(LatISS);
    lon_b = convertRad(LngISS);
    
    d = R * (Math.PI/2 - Math.asin( Math.sin(lat_b) * Math.sin(lat_a) + Math.cos(lon_b - lon_a) * Math.cos(lat_b) * Math.cos(lat_a)))


    
    
    
}
