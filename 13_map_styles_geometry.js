/*
 VI. LES STYLES
 Dans la section précédente, on a vu comment ajouter des couches SIG à la carte,
 il nous faut maintenant les styliser.
 Dans OL, les styles sont associés à l'entité géographique ol.Feature ou au vecteur directement ol.layer.Vector.
 On peut définir un style, basé sur la classe ol.style.Style  selon la géométrie des entités géographiques et
 superposer des icons et des labels.
 Enfin, il est très utile de faire appel aux fonctions de style pour discriminer des entités géographiques.
 
 VI.1. LES STYLES POUR LES DIFFÉRENTES GÉOMÉTRIES

Si on considère les géométries basiques d'une entité géographique,
c'est-à-dire un point, une ligne, un polygone ou un cercle,
de quoi a-t-on besoin à minima pour les observer?
un contour ol.style.Stroke  pour lequel on associe une couleur, un type de ligne et une épaisseur ;
un remplissage ol.style.Fill  pour lequel on associe une couleur ;
et pour le cercle ol.style.Circle , une dimension de rayon radius.
On note que la classe ol.style.Circle ainsi que les classes ol.style.Icon et ol.style.
RegularShape sont des sous-classes de ol.style.Image .
La couleur ol.color  est définie par des codes hexadécimaux ou le rgba.
Ainsi, par défaut, OL affecte le style suivant au données vectorielles :
 */ 

// classes nécéssaires pour afficher la carte
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

// classes pour les vecteurs
import GPX from 'ol/format/GPX';
import GeoJSON from 'ol/format/GeoJSON';
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

/** 

//Définir le style de remplissage pour les entités vectorielles.
const fill = new Fill({
    color: 'rgba(255,255,255,0.4)'
});

//Définir le style de trait pour les entités vectorielles
const stroke = new Stroke({
    color:'#3399CC',
    width: 1.25 
});

// Conteneur pour les styles de rendu d'entités vectorielles + Définir le style de cercle pour les entités vectorielles.
const styles = [
    new Style({
        image: new CircleStyle({
            fill: fill,
            stroke: stroke,
            radius: 5
        }),
        fill: fill,
        stroke: stroke
    })
];

*/





// Sources de données et couche OpenStreetMap
let osm = new TileLayer({
    source: new OSM(),
});

// Déclaration du style du cercle
const styleCercle = new Style({
    image: new CircleStyle({
        fill: new Fill({
            color: '#e8818d'
        }),
        stroke: new Stroke({
            color: '#f53a40',
            width: 1
        }),
        radius: 10
    }),
});

// Déclaration du style du Polygone
const stylePolygone = new Style({
    stroke: new Stroke({
        color: '#0c39ff',
        width: 5
    }),
    fill: new Fill({
        color: '#d9d7eb'
    })
});

 // Source de données du vecteur en format GeoJSON
let sourceGeoJSON = new VectorSource({
    url: '../data/pays.geojson',
	format: new GeoJSON()
});

// Déclaration de la couche vectorielle	
let vecteurGeoJSON = new VectorLayer({
    source: sourceGeoJSON,
    style: stylePolygone,
});

// Source de données du vecteur en format GPX
let sourceGPX = new VectorSource({ 
	url: '../data/capitales.gpx',
	format: new GPX()
});
// Déclaration de la couche vectorielle	
let vecteurGPX = new VectorLayer({
    source: sourceGPX,
    style: styleCercle,
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
