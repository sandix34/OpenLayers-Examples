/*
VII.3. LES OVERLAYS
Les overlays sont des éléments localisés géographiquement comme des images par exemple. De la même manière que les contrôles, ils ont ajoutés à l'objet de la classe Map mais ils ne sont pas statiques. Ainsi, la classe ol.Overlay , en plus de l'indication de son élément dans le conteneur et de sa position, possède des options liées au panoramique de la carte.
*/

// Déclaration de la carte
var map = new ol.Map({
	layers: [osm],
	target: 'map',
	view: new ol.View({
		center: [0,0],
		zoom: 1
	}),
});
// Déclaration du Marker
var marker = new ol.Overlay({
	position: ol.proj.fromLonLat([2.3439,48.8579]),
	positioning: 'center-center',
	element: document.getElementById('marker'),
	stopEvent: false
});
// Ajout à l'objet Map
map.addOverlay(marker);
