/*
VIII.4. LA TRANSLATION

La classe ol.interaction.Translate permet de déplacer des entités géographiques du vecteur.
Comme les autres interactions, il est possible de spécifier des options
comme les conditions de sélection (au clic par exemple),
les filtres de sélection des couches
et la récupération des objets et le style des entités selectionnées.
Ici, on spécifie la couche prise en compte dans la translation.
*/

// classes nécéssaires pour afficher la carte
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';

// classes pour les vecteurs
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';

// Interaction pour la traduction (déplacement) des fonctionnalités.
import Translate from 'ol/interaction/Translate';

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
const map = new Map({
	layers: [vecteurGeoJSON],
	target: 'map',
	view: new View({
		center: [0,0],
		zoom: 2
	}),
});
// Déclaration de l'interaction
const translation = new Translate({
	layers: [vecteurGeoJSON]
});
map.addInteraction(translation);


/*
Les interactions d'ajout et de modification du vecteur sont souvent accompagnées par la fonctionnalité
d'accrochage sur d'autres vecteurs.
Cette dernière est implémentée dans OL par la classe ol.interaction.Snap .
Dans les options, il est possible de préciser une collection d'entités géographiques
ou une source de données comme référence d'accrochage.
Il est important de noter que les quatre interactions présentées ici permettent
d'ajouter, de modifier et de supprimer les entités géographiques des vecteurs "côté client"
et non "côté serveur".
En clair, la donnée brute n'est pas affectée.
*/
