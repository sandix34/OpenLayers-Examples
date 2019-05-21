/*
VIII.2. LE DESSIN

Créer de nouvelles entités géographiques avec OL est rendu possible
grâce à la classe ol.interaction.Draw.
Qui dit création d'une entité dit forcément réception de cette donnée
dans une source vectorielle. Ainsi, il est indispensable de préciser
la source de donnée à l'objet de l'interaction ainsi que la géométrie dessinée.
Le script suivant permet de créer des points et on ajoute un style spécifique à
l'interaction qui est différente de celui du vecteur.
*/

// classes nécéssaires pour afficher la carte
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

// classes pour les vecteurs
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

// Conteneur pour les styles de rendu d'entités vectorielles
import Style from 'ol/style/Style';
//Définir le style de trait pour les entités vectorielles
import Stroke from 'ol/style/Stroke';
//Définir le style de remplissage pour les entités vectorielles.
import Fill from 'ol/style/Fill';
//Définir le style de cercle pour les entités vectorielles.
import CircleStyle from 'ol/style/Circle';

// Source de données et couche OpenStreetMap
const osm = new TileLayer({
	source: new OSM(),
});
// Création d'une source de données vectorielles
const sourceVecteur = new VectorSource();
// Création du vecteur
const vecteur = new VectorLayer({
	source: sourceVecteur,
});
// Déclaration de la carte
var map = new Map({
	layers: [osm,vecteur],
	target: 'map',
	view: new View({
		center: [0,0],
		zoom: 1
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
const interactionDraw = new ol.interaction.Draw({
	type: 'Point',
	source: sourceVecteur,
	style: styleDessin
});
// Ajout de l'interaction
map.addInteraction(interactionDraw);

