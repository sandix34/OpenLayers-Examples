/**
 * ---------------------
 * Les fonds de carte OL
 * ---------------------
 * 
 * On appelle communément fonds de carte,
 * un ensemble de données géographiques compilées
 * qui permettent de situer des vecteurs
 * et/ou des rasters spécifiques.
 * Les fonds de carte ont une résolution spatiale
 * et des informations plus ou moins détaillées.
 * 
 * OL implémente directement plusieurs d'entre eux dans son API,
 * ainsi on dispose des sources de données tuilées suivantes :
 * BingMaps (avec clé),
 * Stamen,
 * CartoDB (avec clé, non utilisé Ici)
 * et OpenStreetMap (OSM).
 */

 

// classes nécéssaires pour afficher la carte
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import BingMaps from 'ol/source/BingMaps';
import Stamen from 'ol/source/Stamen';

/** 
 // OSM default 			
var OSM = new TileLayer({
	title: 'OSM',
	preload: Infinity,
	source: new OSM(),
	visible: true
});					
// Fonds de carte mappemonde BingMaps 
// Bing Aerial 
var cleBingMaps='votre clé';
var BingAerial = new TileLayer({
	title: 'Bing Aerial',
	preload: Infinity,
	source: new BingMaps({
		key: cleBingMaps,
		imagerySet: 'Aerial'
	}),
	visible: true
});
// Bing Aerial With Labels
var BingAerialWithLabels = new TileLayer({
	title: 'Bing Aerial With Labels',
	preload: Infinity,
	source: new BingMaps({
		key: cleBingMaps,
		imagerySet: 'AerialWithLabels'
	}),
	visible: false
});
// Fonds de carte mappemonde Stamen 
// Stamen Toner 
var StamenToner = new TileLayer({
	title: 'Stamen Toner',
	preload: Infinity,
	source: new Stamen({
		layer: 'toner',
	}),
	visible: true
});
// Stamen Watercolor 
var StamenWatercolor = new TileLayer({
	title: 'Stamen Watercolor',
	preload: Infinity,
	source: new Stamen({
		layer: 'watercolor',
	}),
	visible: true
});
*/

// Stamen Terrain 
var StamenTerrain = new TileLayer({
	title: 'Stamen Terrain',
	preload: Infinity,
	source: new Stamen({
		layer: 'terrain',
	}),
	visible: true
});


// Déclaration de la carte
var map = new Map({
	layers: [StamenTerrain],
	target: 'map',
	view: new View({
		center: [0,0],
		zoom: 2
	}),
});