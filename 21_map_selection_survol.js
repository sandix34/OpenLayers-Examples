//Ajoutons un nouveau style à l'entité sélectionnée au survol puis récupérons ses propriétés.


// Source de données du vecteur en format GeoJSON
var sourceGeoJSON = new ol.source.Vector({
	url: 'data/pays.geojson',
	format: new ol.format.GeoJSON()
});
// Déclaration de la couche vectorielle	
var vecteurGeoJSON = new ol.layer.Vector({
	source: sourceGeoJSON,
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
// Déclaration du style du Polygone Sélectionné
var styleSelect = new ol.style.Style({
	stroke : new ol.style.Stroke({
	   color: 'rgba(0,0,255,1)',
	   width: 5
	}),
	fill : new ol.style.Fill({
		color: 'rgba(0,0,255,0.1)'
	})
});
// Déclaration de l'interaction avec des options
var interactionSelect = new ol.interaction.Select({
	// Sélection au survol
	condition: ol.events.condition.pointerMove,
	// Style de la sélection
	style: styleSelect,
});
// Ajout de l'interaction à l'objet Map
map.addInteraction(interactionSelect);
// On charge les entités survolées (option : features) dans une variable
var entitesSelect = interactionSelect.getFeatures();
// Récupération des propriétés de l'entité sélectionnée lors de la sélection
entitesSelect.on('add', function(e) {
	// Objet de l'entité
	var entite = e.target.item(0);
	// Propriété
	var proprieteEntite = entite.getProperties();
	// Géométrie
	var geomEntite = entite.getGeometry();
	// Attribut
	var attributEntite = entite.get('name');
	console.log(attributEntite);
});

