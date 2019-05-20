//Les overlays sont largement utilisés afin de montrer
//les attributs d'une entité géographique dans une popup.


// classes nécéssaires pour afficher la carte
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

// Un élément à afficher sur la carte et associé à un emplacement de carte unique
import Overlay from 'ol/Overlay';

// classes pour les vecteurs
import GPX from 'ol/format/GPX';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

// Sources de données et couche OpenStreetMap
let osm = new TileLayer({
    source: new OSM(),
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
const map = new Map({
	layers: [osm, vecteurGPX],
	target: 'map',
	view: new View({
		center: [0,0],
		zoom: 2
	}),
});

// Popup 
let container = document.getElementById('popup');
let content = document.getElementById('popup-content');
let closer = document.getElementById('popup-closer');
// Création de l'Overlay Popup 
let overlay = new Overlay({
	element: container,
	autoPan: true,
	autoPanAnimation: {
		duration: 250
	}
});	
// Fermeture du popup au clic sur popup-closer 
closer.onclick = () => {
	overlay.setPosition(undefined);
	closer.blur();
	return false;
};	
map.on('click', (evt) => {
	// On récupère les coordonnées 
	let coordinate = evt.coordinate;
	let featureSelect = map.forEachFeatureAtPixel(evt.pixel, (feature) => {
		return feature;
	});
	// Si on obtient l'objet
	if(featureSelect){
		// On déclare son identifiant unique
		let nomCapitale = featureSelect.get('name');
		content.innerHTML = 'Nom du Pays : <b>' +nomCapitale+'</b>';
		map.addOverlay(overlay);
		overlay.setPosition(coordinate);
	}else{
		map.removeOverlay(overlay);
	}
});     