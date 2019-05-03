/**
 * --------------------------------
 * Création d'entités géographiques
 * --------------------------------
 */
/** 
Un vecteur est défini par les entités géographiques qui le composent.
Ces dernières ont une géométrie qui peut être différente les unes des autres 
dans un même vecteur et des valeurs relatives aux champs attributaires de la donnée.
Les géométries sont soit un point, une ligne, un polygone et lorsque plusieurs entités 
de géométries différentes composent un vecteur, on parle de collection d'objets.
OL décompose le vecteur en trois éléments :

 - une ou plusieurs entités ol.Feature avec leurs géométries et leurs attributs ;
 - une source de données ol.Source.Vector qui prend en charge les entités. 
   Elle est appelée via un fichier externe ou créée directement dans le script ;
 - la couche SIG ol.Layer.Vector  qui charge la source.

 Les classes des entités, des sources et des données vectorielles :

La classe ol.Feature représentant une entité géographique est caractérisée par plusieurs
setters et getters, ainsi il est possible d'obtenir ou d'intégrer plusieurs composantes comme
la géométrie setGeometry(geometry)/getGeometry(geometry), un identifiant unique setId()/getId(),
une valeur attributaire d'un champ key set(key)/get(key), un style ou une fonction de style setStyle()/getStyle().
En outre, il est possible d'obtenir l'ensemble des champs attributaires par la méthode getKeys() et l'objet 
de l'entité regroupant la geométrie, les champs et leurs valeurs attributaires : 
getProperties(). Par défaut, le nom du champs de la géométrie est geometry.

Création d'entités géographiques :

Commençons par la création de géométries indépendantes d'une source de données externes.
Les différentes types de géométrie sont définies par la classe ol.geom suivie du type de géométrie : 
Point, LineString, LinearRing, Polygon, MultiPoint, MultiLineString, MultiPolygon, GeometryCollection, Circle.
Chaque géométrie est composée par un ou des points définis par des coordonnées géographiques X (la longitude) 
et Y (la latitude). Le code ci-après montre la création d'un point, d'une ligne et d'un polygone.
 */

// classes nécéssaires pour afficher la carte
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import Feature from 'ol/Feature';
import LineString from 'ol/geom/LineString';
import Point from 'ol/geom/Point';
import Polygon from 'ol/geom/Polygon';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

// Sources de données et couche OpenStreetMap
let osm = new TileLayer({
    source: new OSM(),
});

// Création de la géométrie de type Point
let geomPoint = new Point([2.10,41.23]);
geomPoint.transform('EPSG:4326', 'EPSG:3857');
// Déclaration de l'objet/entité géographique
let entitePoint = new Feature({
    geometry: geomPoint,
    name: 'point'
});

// Création de la géométrie de type Ligne
let geomLigne = new LineString([[2.20,42.23],[2.80,39.23]]);
geomLigne.transform('EPSG:4326', 'EPSG:3857');
// Déclaration de l'objet/entité géographique
let entiteLigne = new Feature({
    geometry: geomLigne,
    name: 'ligne'
});

//Création de la géométrie de type Polygone
let geomPolygone = new Polygon([[[3.0,40.0],[2.90,41.0],[3.50,43.0],[4.0,45.0],[8.0,45.0],[3.0,40.0]]]);
geomPolygone.transform('EPSG:4326', 'EPSG:3857');
// Déclaration de l'objet/entité géographique
let entitePolygone = new Feature({
    geometry: geomPolygone,
    name: 'Polygone'
});

let source = new VectorSource({
    features: [entitePoint,entiteLigne,entitePolygone]
  });

// Déclaration du vecteur
let vecteur = new VectorLayer({
    source: source
});

// Déclaration de la carte
let map = new Map({
    layers: [osm,vecteur],
    target: 'map',
    view: new View({
        center: [0,0],
		zoom: 2
    }),
});