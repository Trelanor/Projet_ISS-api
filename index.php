
<!DOCTYPE html>
	<html lang="fr">
		<head>
			<meta charset="utf-8">
			<meta name="robots" content="ISS, location, tracker"/>
			<meta name="Description" content="ISS current location">
			<meta http-equiv="X-UA-Compatible" content="ie=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css">
			<link rel="icon" href="assets/img/iss.gif" />
			
			
			<title>Projet ISS</title>
			
			<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css"
				integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ=="
				crossorigin=""/>
			<link rel="stylesheet" href="assets/css/style.css">
		</head>
		
		
		<body>
			<div class="row">
				<div class="boxMap col-lg-8 col-md-12">

					<div id="map"></div>
					
					<div class="risetimeBox">
						<div id="risetime"></div>
					</div>

				</div>
				<div class="col-lg-4 col-md-12">
					<div id="stream">
						<iframe src="https://www.youtube.com/embed/4993sBLAzGA?autoplay=1" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
					</div>
					
					<div class="présentation">
						<h1>Welcome to the ISS's universe</h1>
						<p>The ISS is a space station placed in low orbit (400km of height).<br> His speed is 28 000 km/h (17 400 mph)<br> and make one rotation around the world in 1.5 hours.<br>
						The ISS is permanent occupied by minimum 3 astronauts. At this moment,</p>
						<div id="astro"></div>
						<p>live in the space station.</p>
					</div>					
				</div>

				<div>
					<button id="myLocation" class="mylocation">My position</button>
				</div>

			</div>

			<footer>
				<p class="made">made by <a target="_blank" href="https://github.com/cha07">Charlotte THOREMBEY</a>, <a target="_blank" href="https://github.com/Trelanor">Jonathan NICOLAS</a> and <a target="_blank" href="https://github.com/PierreHermey">Pierre HERMEY</a>
			</footer>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
			<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
			<script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js" integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw==" crossorigin=""></script>
			
			<script src="assets/js/iss.js"></script>
		</body>
	</html>
