/*
VIII. LES INTERACTIONS

Les intéractions permettent à l'utilisateur d'intrevenir sur le contenu de la carte.
La classe ol.Map possède différentes interactions par défaut comme les contrôles
mais dans ce chapitre, on se focalise sur les interactions
de sélection ol.interaction.Select,
de dessin ol.interaction.Draw ,
de modification ol.interaction.Modify 
et de translation ol.interaction.Translate 
disponibles pour les données vectorielles.

VIII.1. LA SÉLECTION

La classe ol.interaction.Select, comme son nom l'indique,
permet de sélectionner des entités géographiques du vecteur.
Elle est fournie avec de nombreuses options comme
les conditions de sélection (au clic par exemple),
les filtres de sélection des couches
et la récupération des objets et le style des entités selectionnées.
De manière basique, on instancie la classe puis on l'ajoute à l'objet Map.
Par défaut, la sélection s'applique au clic sur une entité du vecteur avec un style générique.
On note que les entités sélectionnées sont ajoutées à une couche interne à l'API non déclarée dans le script.
*/

// classes nécéssaires pour afficher la carte
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';

// classes pour les vecteurs
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

// Interaction pour la sélection d'entités vectorielles.
import Select from 'ol/interaction/Select';

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
		zoom: 2
	}),
});
// Déclaration de l'interaction
let interactionSelect = new Select();
// Ajout de l'interaction à l'objet Map
map.addInteraction(interactionSelect);

