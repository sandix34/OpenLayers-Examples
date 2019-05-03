/**
 * ------------------------
 * Projections différentes
 * ------------------------
 * Pour utiliser des projections différentes, que ce soit dans l'option même de la vue ou
 *  pour les couches SIG, il est indispensable de charger la libraire Proj4js.
 * (http://proj4js.org/) 
 * 
 * Dans l'exemple ci-après, on utilise la projection Lambert 93 (EPSG:2154) 
 * que l'on déclare dans un premier temps puis on l'affecte à l'objet ol.View.
 */

// classes nécéssaires pour afficher la carte
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
// méthode utilitaire pour la projection
import {transform} from 'ol/proj';
import {get as getProjection} from 'ol/proj';

import proj4 from 'proj4';
import {register} from 'ol/proj/proj4';


// Sources de données et couche OpenStreetMap
let osm = new TileLayer({
    source: new OSM(),
});

//déclaration de la projection en EPSG:2154 (Lambert 93)
proj4.defs("EPSG:2154","+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
register(proj4);
let projection = getProjection('EPSG:2154');

// Déclaration de la carte
let map = new Map({
    layers: [osm],
    target: 'map',
    view: new View({
        projection: projection,
        center: transform( [2, 45], 'EPSG:4326', 'EPSG:2154' ),
		zoom: 3
    })
})