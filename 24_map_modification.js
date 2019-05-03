/*
VIII.3. LA MODIFICATION
De même que pour les interactions précédentes, la modification de données vectorielles est réalisée en ajoutant l'interaction ol.interaction.Modify à l'objet Map. On indique la source du vecteur à modifier dans l'objet de l'interaction et d'autres options sont possibles tels le style et les conditions de modifications des sommets. Le code suivant montre la mise en place d'une modification simple.
*/

// Source de données du vecteur en format GeoJSON
var sourceGeoJSON = new ol.source.Vector({
	url: 'data/pays.geojson',
	format: new ol.format.GeoJSON()
});
// Déclaration de la couche vectorielle	
var vecteurGeoJSON = new ol.layer.Vector({
	source: sourceGeoJSON
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
var interactionModif = new ol.interaction.Modify({
	source: sourceGeoJSON,
	//style: styleDessin
});
// Ajout de l'interaction
map.addInteraction(interactionModif);

