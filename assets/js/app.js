
// definir point de depart ouverture page et choix de carte via leaflet
var map = L.map('map', {
    center: ['10', '10'],
    zoom: 4
});

L.tileLayer('https://api.mapbox.com/styles/v1/trelanor/cjivfv7xf4txn2qs4t8kaj9nb/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidHJlbGFub3IiLCJhIjoiY2ppdmVkd3QwMWFraTNxbXZleWV0ejF6cyJ9.RrESCs90t5bLD25_aI-DWA', {
    attribution: '&copy; <a href="https://www.mapbox.com/copyright">Mapbox</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18,
    minZoom: 2,
}).addTo(map);

var myMarker = null;

function Risetime(coords) {

    var requestURL = 'api.php?lat='+ coords.latitude +'&lon='+ coords.longitude ;
    var request = new XMLHttpRequest();
    
    request.open('GET', requestURL, true);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {    
        $.each(request.response.response, function(key, element) {
            var date = new Date(element['risetime']*1000);
            console.warn(date.toString());
        })
    }    
}




$(function() {
    $('#myLocation').click(function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            function (position) {

                var myMarker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
                myMarker.bindPopup("Ma position :<br> Latitude : " + position.coords.latitude + ',<br>Longitude ' + position.coords.longitude).openPopup();                
                
                Risetime(position.coords);
                

            }, 
            function(error) {
                console.log(error);
            }, {timeout:5000});
        } else {
            alert("La géolocalisation n'est pas supportée par ce navigateur.");
        }
    });
})
