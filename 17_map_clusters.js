/*
VII.2. LES CLUSTERS
Les clusters permettent de regrouper et de montrer le nombre d'entités géographiques d'un vecteur en focntion d'un niveau de zoom sur la carte.
*/

// Source de données du vecteur en format GPX
var sourceGPX = new ol.source.Vector({
	url: 'data/capitales.gpx',
	format: new ol.format.GPX()
});
// Source du Cluster
var clusterSource = new ol.source.Cluster({
	distance: 40,
	source: sourceGPX
});
var rayon;
var contourCouleur;
var remplissageCouleur;
// Déclaration de la couche des clusters
var clusters = new ol.layer.Vector({
	source: clusterSource,
	// Fonction de style
	style: function(feature) {
	  // Nombre d'Entités dans une classe
	  var nombreEntite = feature.get('features').length;
	  if(nombreEntite < 5){
		  rayon = 10;
		  contourCouleur = 'rgba(0,0,255,1)';
		  remplissageCouleur = 'rgba(0,0,255,0.2)';
	  }else if(nombreEntite >= 5 && nombreEntite < 10){
		  rayon = 14;
		  contourCouleur = 'rgba(50,255,100,1)';
		  remplissageCouleur = 'rgba(50,255,100,0.2)';
	  }else if(nombreEntite >= 10){
		  rayon = 16;
		  contourCouleur = 'rgba(255,0,0,1)';
		  remplissageCouleur = 'rgba(255,0,0,0.2)';
	  }
	  var style = new ol.style.Style({
		  image: new ol.style.Circle({
			radius: rayon,
			stroke: new ol.style.Stroke({
			  color: contourCouleur
			}),
			fill: new ol.style.Fill({
			  color: remplissageCouleur
			})
		  }),
		  text: new ol.style.Text({
			text: nombreEntite.toString(),
			font: 'bold 16px Times New Roman',
			fill: new ol.style.Fill({
			  color: contourCouleur
			})
		  })
	  });
	  return [style];
	}
});
// Déclaration de la carte
var map = new ol.Map({
	layers: [osm,clusters],
	target: 'map',
	view: new ol.View({
		center: [0,0],
		zoom: 1,
		minZoom: 1
	}),
});
