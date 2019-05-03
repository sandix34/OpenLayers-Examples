//Les overlays sont largement utilisés afin de montrer les attributs d'une entité géographique dans une popup.

<html>
<head>
<title>Overlays Popup</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link rel="stylesheet" href="../css/ol.css" type="text/css">
<style>
.ol-popup {
	position: absolute;
	background-color: white;
	-webkit-filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
	filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
	padding: 15px;
	border-radius: 10px;
	border: 1px solid #cccccc;
	bottom: 12px;
	left: -50px;
	min-width: 280px;
}
.ol-popup:after, .ol-popup:before {
	top: 100%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}
.ol-popup:after {
	border-top-color: white;
	border-width: 10px;
	left: 48px;
	margin-left: -10px;
}
.ol-popup:before {
	border-top-color: #cccccc;
	border-width: 11px;
	left: 48px;
	margin-left: -11px;
}
.ol-popup-closer {
	text-decoration: none;
	position: absolute;
	top: 2px;
	right: 8px;
}
.ol-popup-closer:after {
	content: "✖";
}
</style>
</head>
<body>
<div style="display:none;">
	<!-- Popup -->
    <div id="popup" class="ol-popup">
      <a href="#" id="popup-closer" class="ol-popup-closer"></a>
      <div id="popup-content"></div>
    </div>
</div>
<div id="map"></div>
</body>
<script src="../js/ol.js"></script>
<script>
// Source de données du vecteur en format GeoJSON
var sourceGeoJSON = new ol.source.Vector({
	url: 'data/pays.geojson',
	format: new ol.format.GeoJSON()
});
// Déclaration de la couche vectorielle	
var vecteurGeoJSON=new ol.layer.Vector({
	source: sourceGeoJSON,
	title: 'GeoJSON'
});
// Déclaration de la carte
var map = new ol.Map({
	layers: [vecteurGeoJSON],
	target: 'map',
	view: new ol.View({
		center: [0,0],
		zoom: 1
	}),
});

// Popup 
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');
// Création de l'Overlay Popup 
var overlay = new ol.Overlay({
	element: container,
	autoPan: true,
	autoPanAnimation: {
		duration: 250
	}
});	
// Fermeture du popup au clic sur popup-closer 
closer.onclick = function() {
	overlay.setPosition(undefined);
	closer.blur();
	return false;
};	
map.on('click', function(evt) {
	// On récupère les coordonnées 
	var coordinate = evt.coordinate;
	var featureSelect = map.forEachFeatureAtPixel(evt.pixel, function(feature){
		return feature;
	});
	// Si on obtient l'objet
	if(featureSelect){
		// On déclare son identifiant unique
		var nomPays = featureSelect.get('name');
		content.innerHTML = 'Nom du Pays : <b>' +nomPays+'</b>';
		map.addOverlay(overlay);
		overlay.setPosition(coordinate);
	}else{
		map.removeOverlay(overlay);
	}
});
</script>
</html>
