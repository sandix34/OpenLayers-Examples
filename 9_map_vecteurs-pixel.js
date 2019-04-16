
/**
 * -------------------------------------------------------------------------
 * lire les données attributaires d'une source de données en un pixel donné
 * -------------------------------------------------------------------------
 * 
 * On peut lire les données attributaires d'une source de données en un pixel donné
 * en faisant appel à la fonction forEachFeatureAtPixel liée à l'objet de la classe Map.
 */
// classes nécéssaires pour afficher la carte
import Map from 'ol/Map';
import View from 'ol/View';
//import TileLayer from 'ol/layer/Tile';
//import OSM from 'ol/source/OSM';

import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';


 // Source de données du vecteur en format GeoJSON
let sourceGeoJSON = new VectorSource({
	url: '../data/pays.geojson',
	format: new GeoJSON()
});
// Déclaration de la couche vectorielle	
let vecteurGeoJSON = new VectorLayer({
	source: sourceGeoJSON,
});
// Déclaration de la carte
let map = new Map({
	layers: [vecteurGeoJSON],
	target: 'map',
	view: new View({
		center: [0,0],
		zoom: 2
	}),
});
// Fonction liée à l'objet Map
map.on('singleclick', function(evt) { 
	let donnees = map.forEachFeatureAtPixel(evt.pixel, function(feature, couche) {
		//ici on retourne l'objet géographique et la couche (facultatif pour la couche)
		let donnees = [feature, couche];
		return donnees;
	});
    //si l'objet géographique et la couche sont retournés
    if(donnees){
		let feature = donnees[0];
		let nom = feature.get("name");
		console.log('nom de l\'attribut du champs name: ', nom);
	}
});