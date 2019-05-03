/*
 VI. LES STYLES
Dans la section précédente, on a vu comment ajouter des couches SIG à la carte, il nous faut maintenant les styliser. Dans OL, les styles sont associés à l'entité géographique ol.Feature ou au vecteur directement ol.layer.Vector. On peut définir un style, basé sur la classe ol.style.Style  selon la géométrie des entités géographiques et superposer des icons et des labels. Enfin, il est très utile de faire appel aux fonctions de style pour discriminer des entités géographiques.
VI.1. LES STYLES POUR LES DIFFÉRENTES GÉOMÉTRIES
Si on considère les géométries basiques d'une entité géographique, c'est-à-dire un point, une ligne, un polygone ou un cercle, de quoi a-t-on besoin à minima pour les observer?
 un contour ol.style.Stroke  pour lequel on associe une couleur, un type de ligne et une épaisseur ;
 un remplissage ol.style.Fill  pour lequel on associe une couleur ;
 et pour le cercle ol.style.Circle , une dimension de rayon radius.
On note que la classe ol.style.Circle ainsi que les classes ol.style.Icon et ol.style.RegularShape sont des sous-classes de ol.style.Image . La couleur ol.color  est définie par des codes hexadécimaux ou le rgba.
Ainsi, par défaut, OL affecte le style suivant au données vectorielles :
 */


var fill = new ol.style.Fill({
  color: 'rgba(255,255,255,0.4)'
});
var stroke = new ol.style.Stroke({
  color: '#3399CC',
  width: 1.25
});
var styles = [
  new ol.style.Style({
    image: new ol.style.Circle({
      fill: fill,
      stroke: stroke,
      radius: 5
    }),
    fill: fill,
    stroke: stroke
  })
];	


//Le code suivant montre un exemple de styles pour les vecteurs déjà utilisés précédemment.

// Source de données et couche OpenStreetMap
var osm = new ol.layer.Tile({
	source: new ol.source.OSM(),
});

// Déclaration du style du cercle
var styleCercle = new ol.style.Style({
	image: new ol.style.Circle({
	   fill: new ol.style.Fill({
		   color: 'rgba(255,0,0,0.4)',
	   }),
	   stroke: new ol.style.Stroke({
			color: 'rgba(255,0,0,1)',
			width: 1
	   }),
	   radius: 10
	}),
});

// Déclaration du style du Polygone
var stylePolygone = new ol.style.Style({
	stroke : new ol.style.Stroke({
	   color: 'rgba(0,0,255,1)',
	   width: 5
	}),
	fill : new ol.style.Fill({
		color: 'rgba(0,0,255,0.1)'
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
	style : stylePolygone,
});

// Source de données du vecteur en format GPX
var sourceGPX = new ol.source.Vector({
	url: 'data/capitales.gpx',
	format: new ol.format.GPX()
});
// Déclaration de la couche vectorielle	
var vecteurGPX = new ol.layer.Vector({
	source: sourceGPX,
	style: styleCercle,
});

// Déclaration de la carte
var map = new ol.Map({
	layers: [osm,vecteurGeoJSON,vecteurGPX],
	target: 'map',
	view: new ol.View({
		center: [0,0],
		zoom: 1
	}),
});
