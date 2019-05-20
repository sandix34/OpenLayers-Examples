/*
VII.3. LES OVERLAYS
Les overlays sont des éléments localisés géographiquement comme des images par exemple.
De la même manière que les contrôles,
ils ont ajoutés à l'objet de la classe Map mais ils ne sont pas statiques.
Ainsi, la classe ol.Overlay , en plus de l'indication de son élément dans le conteneur
et de sa position, possède des options liées au panoramique de la carte.
*/

// classes nécéssaires pour afficher la carte
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

// méthode utilitaire pour la projection
import {fromLonLat} from 'ol/proj'; 

// Un élément à afficher sur la carte et associé à un emplacement de carte unique
import Overlay from 'ol/Overlay';

// Sources de données et couche OpenStreetMap
let osm = new TileLayer({
    source: new OSM(),
});

// Déclaration de la carte
const map = new Map({
	layers: [osm],
	target: 'map',
	view: new View({
		center: [0,0],
		zoom: 2
	}),
});


// Déclaration du Marker
let marker = new Overlay({
	position: fromLonLat([1.3529599, 44.0221252]),
	positioning: 'center-center',
    element: document.getElementById('marker'),
    stopEvent: false,

});
// Ajout à l'objet Map
map.addOverlay(marker);
