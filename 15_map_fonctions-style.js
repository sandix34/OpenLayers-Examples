/* 
VI.3. LES FONCTIONS DE STYLE
Le pouvoir de la cartographie est de montrer des informations distinctement
pour une lecture efficace par les utilisateurs.
Ainsi, il est important de segmenter les entités géographiques selon
leur valeurs attributaires et la résolution spatiale.
Pour cela, on se sert de la fonction de style implémentée par OL.
De part la fonction de style, on peut obtenir l'objet géographique
du vecteur stylisé ainsi que la résolution de la vue de la carte.
Pour une fonction liée à une valeur attributaire, on a :
*/

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
// Définir le style de texte pour les entités vectorielles.
import Text from 'ol/style/Text';


/** 

let remplissageCouleur;
let contourCouleur;
const fonctionStyle = (entite) => {
	// On obtient les valeurs des entités géographiques
	let nomPays=entite.get('name');
	// Mise en place de classe selon le nom du Pays qui commence par la lettre S
	if(nomPays[0]==="S"){
		remplissageCouleur='#b5faba';
		contourCouleur='#227823';
	}else{
		remplissageCouleur='#bfb4fc';
		contourCouleur='#0c39ff';
	}
	let styleBasic = new Style({
		stroke : new Stroke({
		   color: contourCouleur,
		   width: 3
		}),
		fill : new Fill({
			color: remplissageCouleur
		})
	});
	// On retourne le style 	
	return [styleBasic];
}
// Source de données du vecteur en format GeoJSON
var sourceGeoJSON = new Vector({
	url: 'data/pays.geojson',
	format: new GeoJSON()
});
// Déclaration de la couche vectorielle	
var vecteurGeoJSON = new VectorLayer({
	source: sourceGeoJSON,
	style: fonctionStyle		
});
// Déclaration de la carte
var map = new Map({
	layers: [vecteurGeoJSON],
	target: 'map',
	view: new View({
		center: [0,0],
		zoom: 2
	}),
});

*/

// On ajoute un texte lorsque la carte atteint un certain seuil de résolution :

let remplissageCouleur;
let contourCouleur;
const fonctionStyle = (entite,resolution) => {
	// On obtient les valeurs des entités géographiques
	let nomPays=entite.get('name');
	// Mise en place de classe selon le nom du Pays qui commence par la lettre S
	if(nomPays[0]==="S"){
		remplissageCouleur='#b5faba';
		contourCouleur='#227823';
	}else{
		remplissageCouleur='#bfb4fc';
		contourCouleur='#0c39ff';
	}
	let styleBasic = new Style({
		stroke : new Stroke({
		   color: contourCouleur,
		   width: 3
		}),
		fill : new Fill({
			color: remplissageCouleur
		})
	});
	let styleTexte = new Style({
		stroke : new Stroke({
		   color: contourCouleur,
		   width: 3
		}),
		fill : new Fill({
			color: remplissageCouleur
		}),		
		text: new Text({
			text: nomPays,
			font: 'bold 16px Times New Roman',
			offsetY: -15,
			fill: new Fill({
				color: '#fff'
			}),
			stroke: new Stroke({
				color: contourCouleur, 
				width: 5
			})
		}), 
	});
	// On retourne les styles selon la résolution de la carte 
	if(resolution > 10000){
		return [styleBasic];
	}else{
		return [styleTexte];
	}
}
// Source de données du vecteur en format GeoJSON
const sourceGeoJSON = new VectorSource({
	url: 'data/pays.geojson',
	format: new GeoJSON()
});
// Déclaration de la couche vectorielle	
const vecteurGeoJSON = new VectorLayer({
	source: sourceGeoJSON,
	style: fonctionStyle		
});
// Déclaration de la carte
const map = new Map({
	layers: [vecteurGeoJSON],
	target: 'map',
	view: new View({
		center: [0,0],
		zoom: 4
	}),
});
