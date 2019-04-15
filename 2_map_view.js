 /**
 * -----------------------------
 * Changer la projection
 * -----------------------------
 * 
 * il est possible de spécifier plusieurs options dans la vue comme la résolution de la carte, la rotation et la projection * * ol.proj  qui par défaut, est l'EPSG:3857 et l'EPSG:4326 est aussi chargée. Le code suivant introduit le centrage de la * * * carte avec une transformation de la projection des coordonnées géographiques ainsi qu'un zoom minimal et maximal.
 * 
 * https://openlayers.org/en/latest/apidoc/module-ol_proj.html
 */

// classes nécéssaire pour afficher la carte
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
// méthode utilitaire pour la projection
import {fromLonLat} from 'ol/proj'; 

// Sources de données et couche OpenStreetMap
let osm = new TileLayer({
    source: new OSM(),
});

let montaubanLonLat = [1.3529599,44.0221252];
let montaubanWebMercator = fromLonLat(montaubanLonLat);


// Déclaration de la carte
let map = new Map({
    layers: [osm],
    target: 'map',
    view: new View({
        center:montaubanWebMercator,
        zoom: 10,
        minZoom: 8,
		maxZoom: 15
    })
})