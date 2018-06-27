

// definir point de depart ouverture page et choix de carte via leaflet
var map = L.map('map', {
    center: ['10', '10'],
    zoom: 2
});

L.tileLayer('https://api.mapbox.com/styles/v1/trelanor/cjivfv7xf4txn2qs4t8kaj9nb/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidHJlbGFub3IiLCJhIjoiY2ppdmVkd3QwMWFraTNxbXZleWV0ejF6cyJ9.RrESCs90t5bLD25_aI-DWA', {
   attribution: '&copy; <a href="https://www.mapbox.com/copyright">Mapbox</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
   maxZoom: 18,
   minZoom: 2,
}).addTo(map);

$(function() {
    $('#myLocation').click(function (e) {
        console.log(navigator.geolocation);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            function (position) {
                var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
                marker.bindPopup("Ma position :<br> Latitude : " + position.coords.latitude + ',<br>Longitude ' + position.coords.longitude).openPopup();
            }, 
            function(error) {
                console.log(error);
            }, {timeout:5000});
        } else {
            alert("La géolocalisation n'est pas supportée par ce navigateur.");
        }
    });
})


