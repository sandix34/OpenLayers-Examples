//Ajoutons un nouveau style à l'entité sélectionnée au survol puis récupérons ses propriétés.

// classes nécéssaires pour afficher la carte
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';

// classes pour les vecteurs
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

// Conteneur pour les styles de rendu d'entités vectorielles
import Style from 'ol/style/Style';
//Définir le style de trait pour les entités vectorielles
import Stroke from 'ol/style/Stroke';
//Définir le style de remplissage pour les entités vectorielles.
import Fill from 'ol/style/Fill';

// Interaction pour la sélection d'entités vectorielles.
import Select from 'ol/interaction/Select';
import { pointerMove} from 'ol/events/condition';


// Source de données du vecteur en format GeoJSON
const sourceGeoJSON = new VectorSource({
	url: 'data/pays.geojson',
	format: new GeoJSON()
});
// Déclaration de la couche vectorielle	
const vecteurGeoJSON = new VectorLayer({
	source: sourceGeoJSON,
});
// Déclaration de la carte
let map = new Map({
	layers: [vecteurGeoJSON],
	target: 'map',
	view: new View({
		center: [0,0],
		zoom: 1
	}),
});
// Déclaration du style du Polygone Sélectionné
const styleSelect = new Style({
	stroke : new Stroke({
	   color: 'rgba(0,0,255,1)',
	   width: 5
	}),
	fill : new Fill({
		color: 'rgba(0,0,255,0.1)'
	})
});
// Déclaration de l'interaction avec des options
const interactionSelect = new Select({
	// Sélection au survol
	condition: pointerMove,
	// Style de la sélection
	style: styleSelect,
});
// Ajout de l'interaction à l'objet Map
map.addInteraction(interactionSelect);
// On charge les entités survolées (option : features) dans une variable
const entitesSelect = interactionSelect.getFeatures();
// Récupération des propriétés de l'entité sélectionnée lors de la sélection
entitesSelect.on('add', (e) => {
	// Objet de l'entité
	let entite = e.target.item(0);
	// Propriété
	let proprieteEntite = entite.getProperties();
	// Géométrie
	let geomEntite = entite.getGeometry();
	// Attribut
	let attributEntite = entite.get('name');
	console.log(attributEntite);
});
