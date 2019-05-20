/*

VII. LES GROUPES DE COUCHES, LES CLUSTERS ET LES OVERLAYS
Ce chapitre met en évidence certaines fonctionnalités d'OL afin d'améliorer l'interface de WebMapping
et l'utilisation des données géographiques.
VII.1. LES GROUPES DE COUCHES
OL implémente un conteneur qui autorise le regroupement de couches SIG
par la classe ol.layer.Group .
L'objet ainsi créé présente l'avantage de pouvoir gérer
des actions simultanées sur les couches prises en compte.

VII.2. LES CLUSTERS
Les clusters permettent de regrouper et de montrer le nombre
d'entités géographiques d'un vecteur en focntion d'un niveau de zoom sur la carte.
*/

// classes nécéssaires pour afficher la carte
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

// classes pour les vecteurs
import GPX from 'ol/format/GPX';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

// Conteneur pour les styles de rendu d'entités vectorielles
import Style from 'ol/style/Style';
//Définir le style de trait pour les entités vectorielles
import Stroke from 'ol/style/Stroke';
//Définir le style de remplissage pour les entités vectorielles.
import Fill from 'ol/style/Fill';
// Définir le style de texte pour les entités vectorielles.
import Text from 'ol/style/Text';
//Définir le style de cercle pour les entités vectorielles.
import CircleStyle from 'ol/style/Circle';

//Couche source pour regrouper les données vectorielles.
import Cluster from 'ol/source/Cluster';

// Sources de données et couche OpenStreetMap
let osm = new TileLayer({
    source: new OSM(),
});

// Source de données du vecteur en format GPX
const sourceGPX = new VectorSource({
	url: 'data/capitales.gpx',
	format: new GPX()
});
// Source du Cluster
var clusterSource = new Cluster({
	distance: 40,
	source: sourceGPX
});
let rayon;
let contourCouleur;
let remplissageCouleur;
// Déclaration de la couche des clusters
var clusters = new VectorLayer({
	source: clusterSource,
	// Fonction de style
	style: (feature) => {
	  // Nombre d'Entités dans une classe
	  let nombreEntite = feature.get('features').length;
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
	  let style = new Style({
		  image: new CircleStyle({
			radius: rayon,
			stroke: new Stroke({
			  color: contourCouleur
			}),
			fill: new Fill({
			  color: remplissageCouleur
			})
		  }),
		  text: new Text({
			text: nombreEntite.toString(),
			font: 'bold 16px Times New Roman',
			fill: new Fill({
			  color: contourCouleur
			})
		  })
	  });
	  return [style];
	}
});
// Déclaration de la carte
var map = new Map({
	layers: [osm,clusters],
	target: 'map',
	view: new View({
		center: [0,0],
		zoom: 2,
		minZoom: 1
	}),
});
