/*
VI.2. LES ICONS ET LES LABELS
Il est possible d'associer des icons et des labels aux vecteurs.
Pour afficher un icon, la classe ol.style.Icon  est caractérisée par de
nombreuses options liées notamment à la source, l'ancrage et au style de l'image.
*/


// classes nécéssaires pour afficher la carte
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

// méthode utilitaire pour la projection
import {fromLonLat} from 'ol/proj'; 

// classes pour les vecteurs
import GPX from 'ol/format/GPX';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

// Conteneur pour les styles de rendu d'entités vectorielles
import Style from 'ol/style/Style';

//Définir le style d'icône pour les entités vectorielles.
import Icon from 'ol/style/Icon';


// Sources de données et couche OpenStreetMap
const osm = new TileLayer({
    source: new OSM(),
});

// Style du point avec un icône
const iconStyle = new Style({
	image: new Icon(/** @type {olx.style.IconOptions} */ ({
		anchor: [0.5, 0.5],
		anchorXUnits: 'fraction',
		anchorYUnits: 'pixels',
		anchorOrigin : 'bottom-left',
		src: '../images/icon.png',
		scale: 0.3
	}))
});
// Source de données du vecteur en format GPX
const sourceGPX = new VectorSource({
	url: 'data/capitales.gpx',
	format: new GPX()
});
// Déclaration de la couche vectorielle	
const vecteurGPX2 = new VectorLayer({
	source: sourceGPX,
	style: iconStyle,
});
// Déclaration de la carte
const map = new Map({
	layers: [osm,vecteurGPX2],
	target: 'map',
	view: new View({
		center: fromLonLat([2.3439,48.8579]),
		zoom: 10
	}),
});	

