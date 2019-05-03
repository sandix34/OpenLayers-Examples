/*
VIII.2. LE DESSIN
Créer de nouvelles entités géographiques avec OL est rendu possible grâce à la classe ol.interaction.Draw. Qui dit création d'une entité dit forcément réception de cette donnée dans une source vectorielle. Ainsi, il est indispensable de préciser la source de donnée à l'objet de l'interaction ainsi que la géométrie dessinée. Le script suivant permet de créer des points et on ajoute un style spécifique à l'interaction qui est différente de celui du vecteur.
*/

// Source de données et couche OpenStreetMap
var osm = new ol.layer.Tile({
	source: new ol.source.OSM(),
});
// Création d'une source de données vectorielles
var sourceVecteur = new ol.source.Vector();
// Création du vecteur
var vecteur = new ol.layer.Vector({
	source: sourceVecteur,
});
// Déclaration de la carte
var map = new ol.Map({
	layers: [osm,vecteur],
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
	type: 'Point',
	source: sourceVecteur,
	style: styleDessin
});
// Ajout de l'interaction
map.addInteraction(interactionDraw);

