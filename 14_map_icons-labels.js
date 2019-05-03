/*
VI.2. LES ICONS ET LES LABELS
Il est possible d'associer des icons et des labels aux vecteurs. Pour afficher un icon, la classe ol.style.Icon  est caractérisée par de nombreuses options liées notamment à la source, l'ancrage et au style de l'image.
*/


// Style du point avec un icône
var iconStyle = new ol.style.Style({
	image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
		anchor: [0.5, 0.5],
		anchorXUnits: 'fraction',
		anchorYUnits: 'pixels',
		anchorOrigin : 'bottom-left',
		src: '../geomatickFormation/web/img/icon.png',
		scale: 0.3
	}))
});
// Source de données du vecteur en format GPX
var sourceGPX = new ol.source.Vector({
	url: 'data/capitales.gpx',
	format: new ol.format.GPX()
});
// Déclaration de la couche vectorielle	
var vecteurGPX2 = new ol.layer.Vector({
	source: sourceGPX,
	style: iconStyle,
});
// Déclaration de la carte
var map = new ol.Map({
	layers: [osm,vecteurGPX],
	target: 'map',
	view: new ol.View({
		center: ol.proj.fromLonLat([2.3439,48.8579]),
		zoom: 10
	}),
});	

