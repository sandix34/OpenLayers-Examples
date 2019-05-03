/*
VIII. LES INTERACTIONS
Les intéractions permettent à l'utilisateur d'intrevenir sur le contenu de la carte. La classe ol.Map possède différentes interactions par défaut comme les contrôles mais dans ce chapitre, on se focalise sur les interactions de sélection ol.interaction.Select , de dessin ol.interaction.Draw , de modification ol.interaction.Modify  et de translation ol.interaction.Translate  disponibles pour les données vectorielles.
VIII.1. LA SÉLECTION
La classe ol.interaction.Select, comme son nom l'indique, permet de sélectionner des entités géographiques du vecteur. Elle est fournie avec de nombreuses options comme les conditions de sélection (au clic par exemple), les filtres de sélection des couches et la récupération des objets et le style des entités selectionnées. De manière basique, on instancie la classe puis on l'ajoute à l'objet Map. Par défaut, la sélection s'applique au clic sur une entité du vecteur avec un style générique. On note que les entités sélectionnées sont ajoutées à une couche interne à l'API non déclarée dans le script.
*/


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
// Déclaration de l'interaction
var interactionSelect = new ol.interaction.Select();
// Ajout de l'interaction à l'objet Map
map.addInteraction(interactionSelect);

