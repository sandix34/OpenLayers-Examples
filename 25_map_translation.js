/*
VIII.4. LA TRANSLATION
La classe ol.interaction.Translate permet de déplacer des entités géographiques du vecteur. Comme les autres interactions, il est possible de spécifier des options comme les conditions de sélection (au clic par exemple), les filtres de sélection des couches et la récupération des objets et le style des entités selectionnées. Ici, on spécifie la couche prise en compte dans la translation.
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
var translation = new ol.interaction.Translate({
	layers: [vecteurGeoJSON]
});
map.addInteraction(translation);


/*
Les interactions d'ajout et de modification du vecteur sont souvent accompagnées par la fonctionnalité d'accrochage sur d'autres vecteurs. Cette dernière est implémentée dans OL par la classe ol.interaction.Snap . Dans les options, il est possible de préciser une collection d'entités géographiques ou une source de données comme référence d'accrochage.
 Il est important de noter que les quatre interactions présentées ici permettent d'ajouter, de modifier et de supprimer les entités géographiques des vecteurs "côté client" et non "côté serveur". En clair, la donnée brute n'est pas affectée. La formation 2 met en oeuvre les quatre procédés initiés par des contrôles qui permettront de sauvegarder les actions réalisées par l'utilisateur.
*/
