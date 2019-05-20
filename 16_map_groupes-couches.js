/*
VII. LES GROUPES DE COUCHES, LES CLUSTERS ET LES OVERLAYS
Ce chapitre met en évidence certaines fonctionnalités d'OL afin d'améliorer l'interface de WebMapping
et l'utilisation des données géographiques.
VII.1. LES GROUPES DE COUCHES
OL implémente un conteneur qui autorise le regroupement de couches SIG
par la classe ol.layer.Group .
L'objet ainsi créé présente l'avantage de pouvoir gérer
des actions simultanées sur les couches prises en compte.
*/

// Source de données et couche OpenStreetMap
var osm = new ol.layer.Tile({
	source: new ol.source.OSM(),
});
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

// Source de données du vecteur en format GPX
var sourceGPX = new ol.source.Vector({
	url: 'data/capitales.gpx',
	format: new ol.format.GPX()
});
// Déclaration de la couche vectorielle	
var vecteurGPX = new ol.layer.Vector({
	source: sourceGPX,
	title: 'GPX',
});
// Déclaration du Groupe de Couches SIG
var groupeCouches = new ol.layer.Group({
	layers: [vecteurGeoJSON,vecteurGPX],
});
// Déclaration de la carte
var map = new ol.Map({
	layers: [osm,groupeCouches],
	target: 'map',
	view: new ol.View({
		center: [0,0],
		zoom: 1
	}),
});
// Boucle sur les couches du Groupe de Couches
groupeCouches.getLayers().forEach(function(couches){
	// On récupère le titre de chaque couche du groupe
	var titreCouche = couches.get('title');
	if(titreCouche === 'GeoJSON'){
		// On fixe l'opacité de la couche
		couches.setOpacity(0.1);
	}
 });

