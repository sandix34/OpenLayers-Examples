/**
 * --------------
 * Les contrôles
 * --------------
 * 
 * Les contrôles ol.control  sont d'autres composantes de la classe Map.
 * Chaque méthode possède ses propres options.
 * Il est possible de modifier le style CSS ou d'ajouter certaines fonctions javascript
 * OpenLayers montre par exemple comment modifier le style CSS (couleur, place des éléments, etc) du ZoomSlider
 * https://openlayers.org/en/latest/examples/zoomslider.html
 */

// classes nécéssaires pour afficher la carte
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
// méthode utilitaire pour la projection
import {fromLonLat} from 'ol/proj'; 

import { defaults, OverviewMap, MousePosition, FullScreen, Rotate, ZoomSlider, ZoomToExtent, ScaleLine } from 'ol/control.js';

// Sources de données et couche OpenStreetMap
let osm = new TileLayer({
    source: new OSM(),
});

// Déclaration de la carte
let map = new Map({
    layers: [osm],
    target: 'map',
    view: new View({
        center:fromLonLat([2.3439,48.8579]),
        zoom: 5,
    }),
    controls: defaults({
		attribution : true,
		zoom : true,
	}).extend([
		new FullScreen(),
		new MousePosition(),
		new OverviewMap(),
		new Rotate(),
		new ScaleLine(),
		new ZoomSlider(),
		new ZoomToExtent(),
	]),
});