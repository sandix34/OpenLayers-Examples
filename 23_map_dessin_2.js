/** 
Ici, la source du vecteur ne possède pas de données.
Il est tout à fait possible d'ajouter des entités géographiques
à un vecteur ayant déjà des données.
*/

// classes nécéssaires pour afficher la carte
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';

// classes pour les vecteurs
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';

// Conteneur pour les styles de rendu d'entités vectorielles
import Style from 'ol/style/Style';
//Définir le style de trait pour les entités vectorielles
import Stroke from 'ol/style/Stroke';
//Définir le style de remplissage pour les entités vectorielles.
import Fill from 'ol/style/Fill';
//Définir le style de cercle pour les entités vectorielles.
import CircleStyle from 'ol/style/Circle';

// Interaction pour dessiner les géométries des entités.
import Draw from 'ol/interaction/Draw';

// Déclaration du style du vecteur
const styleVecteur = new Style({
	fill: new Fill({
		color: 'rgba(255, 255, 255, 0.2)'
	}),
	stroke: new Stroke({
		color: 'rgba(20, 255, 50, 1.0)',
		width: 2
	})
});
// Source de données du vecteur en format GeoJSON
const sourceGeoJSON = new VectorSource({
	url: 'data/pays.geojson',
	format: new GeoJSON()
});
// Déclaration de la couche vectorielle	
const vecteurGeoJSON = new VectorLayer({
	source: sourceGeoJSON,
	style: styleVecteur
});

// Déclaration de la carte
const map = new Map({
	layers: [vecteurGeoJSON],
	target: 'map',
	view: new View({
		center: [0,0],
		zoom: 2
	}),
});
// Déclaration du style de l'interaction
const styleDessin = new Style({
	fill: new Fill({
		color: 'rgba(255, 255, 255, 0.2)'
	}),
	stroke: new Stroke({
		color: 'rgba(255, 0, 0, 1.0)',
		lineDash: [10, 10],
		width: 2
	}),
	image: new CircleStyle({
		radius: 5,
		stroke: new Stroke({
			color: 'rgba(255, 0, 0, 0.85)'
		}),
		fill: new Fill({
			color: 'rgba(255, 0, 0, 0.85)'
		})
	})
});
// Déclaration de l'interaction
const interactionDraw = new Draw({
	type: 'Polygon',
	source: sourceGeoJSON,
	style: styleDessin
});
// Ajout de l'interaction
map.addInteraction(interactionDraw);