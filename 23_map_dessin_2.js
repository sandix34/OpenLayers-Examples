//Ici, la source du vecteur ne possède pas de données. Il est tout à fait possible d'ajouter des entités géographiques à un vecteur ayant déjà des données.

// Déclaration du style du vecteur
var styleVecteur = new ol.style.Style({
	fill: new ol.style.Fill({
		color: 'rgba(255, 255, 255, 0.2)'
	}),
	stroke: new ol.style.Stroke({
		color: 'rgba(20, 255, 50, 1.0)',
		width: 2
	})
});
// Source de données du vecteur en format GeoJSON
var sourceGeoJSON = new ol.source.Vector({
	url: 'data/pays.geojson',
	format: new ol.format.GeoJSON()
});
// Déclaration de la couche vectorielle	
var vecteurGeoJSON = new ol.layer.Vector({
	source: sourceGeoJSON,
	style: styleVecteur
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
// Déclaration du style de l'interaction
var styleDessin = new ol.style.Style({
	fill: new ol.style.Fill({
		color: 'rgba(255, 255, 255, 0.2)'
	}),
	stroke: new ol.style.Stroke({
		color: 'rgba(255, 0, 0, 1.0)',
		lineDash: [10, 10],
		width: 2
	}),
	image: new ol.style.Circle({
		radius: 5,
		stroke: new ol.style.Stroke({
			color: 'rgba(255, 0, 0, 0.85)'
		}),
		fill: new ol.style.Fill({
			color: 'rgba(255, 0, 0, 0.85)'
		})
	})
});
// Déclaration de l'interaction
var interactionDraw = new ol.interaction.Draw({
	type: 'Polygon',
	source: sourceGeoJSON,
	style: styleDessin
});
// Ajout de l'interaction
map.addInteraction(interactionDraw);

