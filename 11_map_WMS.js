
/**
 * ----------------
 * Le protocole WMS
 * ----------------
 * Le WMS fournit une image géoréférencée pour laquelle plusieurs 
 * opérations sont disponibles
 * comme afficher une donnée avec la géométrie
 * et les valeurs attributaires correspondantes.
 * On note que la donnée spatiale transmise par le serveur 
 * cartographique peut être à l'origine un vecteur ou un raster.
 * 
 * Dans OL, il existe plusieurs manières de charger les protocoles WMS :
 * 
 * - En tant qu'image par la classe :
 * ol.source.ImageWMS  pour la source de données
 * la classe ol.layer.Image  pour afficher la couche SIG
 * 
 * - En tant que donnée tuilée depuis un serveur WMS par la classe :
 * ol.source.TileWMS  pour la source
 * ol.layer.Tile  pour la couche SIG
 * 
 * L'exemple ci-après montre comment utiliser des flux WMS en format Tuilé et Image : 
 */

// classes nécéssaires pour afficher la carte
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';

import TileWMS from 'ol/source/TileWMS';
import TileLayer from 'ol/layer/Tile';
import ImageWMS from 'ol/source/ImageWMS';
import ImageLayer from 'ol/layer/Image';

 // Déclaration de la source de la couche en format WMS Tuilé 
var sourceWMSTile = new TileWMS({
	// Chargement du lien WMS 
	url: 'https://map.geomatick.com/geoserver/wms',
	// Chargement de l'espace de travail : couche 
	params: {'LAYERS': 'topp:states', 'TILED': true},
	serverType: 'geoserver'
})
// Déclaration de la couche WMS Tuilé
var coucheWMTile = new TileLayer({ 
	source: sourceWMSTile,
	opacity: 0.5
});

// Déclaration de la source de la couche en format WMS Image
var sourceWMSImage = new ImageWMS({
	// Chargement du lien WMS 
	url: 'https://map.geomatick.com/geoserver/wms',
	// Chargement de l'espace de travail : couche 
	params: {'LAYERS': 'tiger:poly_landmarks'},
	serverType: 'geoserver'
})
// Déclaration de la couche WMS 
var coucheWMSImage = new ImageLayer({ source: sourceWMSImage });

// Déclaration de la carte 
var map = new Map({
	layers: [coucheWMTile,coucheWMSImage],
	target: 'map',
	view: new View({
		center: [-8233510, 4980620],
		zoom: 5
	})
});