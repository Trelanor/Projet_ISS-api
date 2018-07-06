             
            //                          _______________________
            //                          //   __..--~~~~--..__    \\
            //                         ||___/  |  |   |  |   \ __/ |
            //                         ||  /   ___________    \    |
            //                         ||_/   /.......... \    |   |
            //                         | |   /..........   \   |   |
            //    _____________________| |  /...........    \  |   |________________
            //     ;   . . .   .       |_| |...........      | |   | .''."...  ... .
            //    ___   ..~.         _.' | |..........       | |   |         . ~
            //     .      '     .   / \_.| |..........       | |   |\ ~.   ._..---._
            //                     |. /| \ \............     / /   |/ .    /\      /\
            //       '""" ... ~~~  | \|| _\ \............   / /-.__|      // ~-._./ -\
            //     ..~             |  |_.~\\ \_____________/ /// '.|     /__       __.\
            //     ___   ..~.      |_.~    \\_______________//   _ ~-.  ~~~~..  ~~~~~.
            //                    .~ -.     \__.---.________/   ______\.
            //    .''."...  ... ./\        _|      |---|  = |__ \__\===\   '""" ... ~~~
            //                  /  '.  .  |_|=     |---|    | _| \======\ ___   ..~.      
            //      ..~        / .   \      |=     |___|    ||       __. \
            //                /           _ |_______________|   _.        \
            //    .''."...  ./                /   \___    ~~  \            \  '" ..   ~~ 
            //              /          '' /   \      /         \           /\
            //    ___   .  /     -- .   /'   __\____/       ____\___.'   --  \ ___   ..~.
            //            /            /    / \\ --  _____//          ~ - .   \
            //     ..--  /_..-       ./.   /  _/   _|___  \\       .     -   _/)
            //          /   ___     ./|__  / _/   (_____ / \\  .          \ ~ /   .
            //      .  /___////_   /  |   / _/    (_____ \  \\       _./ ..__/
            //        /___/__/_ \ /  _|  /__/ _-- (_____  \: \\_____________/      ._
            //    _  /         \ /_.' | /  /       (_________/ ~~-|
            //      /           //   _|/  /-              .    __ |..~. _____ -.. '  "
            //    ..\==========/'   \_/ _/  __      ___..     /  \|
            //        / _____  \'.______/___....------......__\__/|
            //    '  |          \     |\__________________|__|___/|  ~~~~~..   - ~  '
            //     ~ |        _  \   /~      \     \ --  /         \
            //       | | | | | \_|  |   \     \ ~      //           |
            //    _. |_| | | | .    |-----..   \       /  /-      __|..~. _____ -.. '  "
            //         |_|_|_|   _. |       \_  \\ _ ./          ___|
            //     ~~~  ..   - ~  ' |         \__\___/__...------   |  ~~~~~..   - ~  '
            //                      |  .-         | | .       __    |
            //                      |     __..    | |    ______     |      .     ~
            //   ..~. _  __ -.. '   \           __| |   |      |    | _        .
            //                      /             | | ~ |__.___|.   |
            //                      |    __       | |   |      |    |              .. '
            //     ~~~~~..   - ~  ' | ''          / \   |      |    |___     __.
            //     ....   -         |  _____...   | |   \______/    |  ~~~~~..   - ~  '
            //                      | /        '--| |      ~~       |
            //        ~..   - ~  '  |/            | |    __----  .. |   .      .     _
            //                      ||____......._| |               |
            //                      |----         | |               |  ~~~~~..   - ~  '
            //      '""" ... ~~~    |       -.    | |       _..     |
            //                      | ..         // |               | _~"".    .
            //                      |          -  \ | __----.   ..  \
            //     ~~~..   - ~  '   |_____________| |_______________/
            //                      \_____________| |______________/   '    ...  __  ~
            //                       /     ----- \   /----------- \
            //      __~~..   - ~  ' /___      ----\ /--...___      \
            //                     /    ..--      | | __..     ___./  .     .   ~
            //         - ~  '..    \  __________./  |_____________/  .   - ~  ' ~~~~
            //     ..._____~~~~~~   \___________/    \___________/  -_______...._____
            //   ..            ___ . ~~~~~~~~~~~. __\ ~~~~~~~~~~~~~...      _  ~
            //   __    ....         ''        ...""       ....'''      -_~~~     ~~~...
  

                //      ______ _                         
                //     (_____ (_)                        
                //      _____) )  ____  ____ ____ ____   
                //     |  ____/ |/ _  )/ ___) ___) _  )  
                //     | |    | ( (/ /| |  | |  ( (/ /   
                //     |_|    |_|\____)_|  |_|   \____)  

        //      _____                      _                 
        //     (_____)                _   | |                
        //        _  ___  ____   ____| |_ | | _   ____ ____  
        //       | |/ _ \|  _ \ / _  |  _)| || \ / _  |  _ \ 
        //    ___| | |_| | | | ( ( | | |__| | | ( ( | | | | |
        //   (____/ \___/|_| |_|\_||_|\___)_| |_|\_||_|_| |_|

                            //    ___   
                            //   / _ \  
                            //  ( (_) ) 
                            //   ) _ (  
                            //  ( (/  \ 
                            //   \__/\_)

        //    ______ _                 _                     
        //   / _____) |               | |      _   _         
        //  | /     | | _   ____  ____| | ___ | |_| |_  ____ 
        //  | |     | || \ / _  |/ ___) |/ _ \|  _)  _)/ _  )
        //  | \_____| | | ( ( | | |   | | |_| | |_| |_( (/ / 
        //   \______)_| |_|\_||_|_|   |_|\___/ \___)___)____)
                                                          
                 
                                                          
                                              
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
            iconSize:     [40, 40], // size of the icon
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
        map.fitBounds(markerBounds,{maxZoom: 5});

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

    setInterval(function(){
        getValue();
    },5000);

    setInterval(function(){
        astro();
    },(1000 * 60 * 10));
});
