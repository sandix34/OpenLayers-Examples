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
import 'ol/ol.css';
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

/**
 * --------------------------------------
 * Manipulation des données vectorielles
 * --------------------------------------
 * 
 * Comment obtenir les entités géographiques (géométries et valeurs attributaires)
 * d'une source de données vectorielles?
 * 
 * Comme présentée dans la classe ol.Feature, il est possible d'obtenir de nombreuses
 * informations liées à une entité géographique. 
 * La source de données offre logiquement plus de possibilités quant aux traitements des entités géographiques.
 * En effet, en plus de pouvoir considérer l'ensemble des données du vecteur,
 * certaines méthodes prennent en compte l'intersection des géométries des entités avec une étendue spatiale
 * ou des coordonnées géographiques.
 * 
 * Comme pour la classe ol.Map, les méthodes on et once des classes
 * ol.Feature, ol.Source.Vector et ol.layer.Vector peuvent être déclenchées à partir de fires.
 * 
 * Les codes ci-après permet de mieux assimiler le fonctionnement des méthodes liées aux sources de données vectorielles. Considérons le fichier GeoJSON représentant les pays.
 */

 // Dès que la source du vecteur est chargée
sourceGeoJSON.on( 'change', function() {	
	// entités du Vecteur
	let entites = sourceGeoJSON.getFeatures();
	// Nombre d'entités
	let nb_entites = entites.length;
	// On lit chaque entité du vecteur retourné en objet
	sourceGeoJSON.forEachFeature(function(entite) {
		//console.log('objet de l\'entité: ', entite);
		  // Géométrie de chaque entité
		  entite.getGeometry();
		  // Si on connaît le nom du champ que l\'on désire, on obtient la valeur attributaire par la méthode get :
		  entite.get('name');
	});


	// En considérant tous les champs hors geométrie, on peut écrire : 
	sourceGeoJSON.forEachFeature(function(entite) {
		let champs = entite.getKeys();
		let nb_champs = entite.getKeys().length;		
		//On commence la boucle à j=1 car le premier champ correspond à la géométrie de chaque entité
		for(let j=1; j<nb_champs; j++){
			console.log(' champ '+champs[j]+': ', entite.get(champs[j]));
		}
	});
});