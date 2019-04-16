/**
 * 
 * Chargement de fichiers externes
 * 
 * Il est courant d'utiliser des sources de données externes tels les fichiers
 * de données ou les protocoles HTTP. Concernant les fichiers, il existe de nombreux formats ol.format
 * de données vectorielles pris en charge par OL.
 * Ici, on considère les formats les plus utilisés en SIG : 
 * GeoJSON, GPX, KML, GML mais on peut citer également les formats TopoJSON, MVT et WKT.
 * Pour afficher ces données géographiques, il suffit d'indiquer le chemin du fichier par l'URL et
 * et le format de données dans la source du vecteur.
 * 
 * L'exemple ci-après met en évidence la lecture d'un vecteur de format
 * GeoJSON et un de format GPX représentant respectivement les pays du monde et les capitales.
 */

// classes nécéssaires pour afficher la carte
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';


import GPX from 'ol/format/GPX';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

// Sources de données et couche OpenStreetMap
let osm = new TileLayer({
    source: new OSM(),
});

 // Source de données du vecteur en format GeoJSON
let sourceGeoJSON = new VectorSource({
    url: '../data/pays.geojson',
	format: new GeoJSON()
});

// Déclaration de la couche vectorielle	
let vecteurGeoJSON = new VectorLayer({
	source: sourceGeoJSON,
});

// Source de données du vecteur en format GPX
let sourceGPX = new VectorSource({ 
	url: '../data/capitales.gpx',
	format: new GPX()
});
// Déclaration de la couche vectorielle	
let vecteurGPX = new VectorLayer({
	source: sourceGPX,
});

// Déclaration de la carte
let map = new Map({
	layers: [osm,vecteurGeoJSON,vecteurGPX],
	target: 'map',
	view: new View({
		center: [0,0],
		zoom: 2
	}),
});