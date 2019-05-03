/**
 * ----------------------
 * Méthodes et évènements
 * ----------------------
 */

/**
De nombreuses méthodes sont liées à la classe Map et elles peuvent être déclenchées à partir d'actions appelées "Fires".
Les plus utilisées sont on(type, listener, opt_this), once(type, listener, opt_this) qui contiennent 
une fonction afin d'obtenir des informations de la classe "parent".
Ces méthodes sont aussi héritées pour d'autres classes comme celles prenant en charge les sources de données.

Dans la version actuelle d'OL, on peut classer les déclencheurs des méthodes selon cinq types :

ol.events.Event : un évènement quelconque par le fire change.
ol.Object.Event : Les évènements liés un objet de la classe Map.
ol.MapBrowserEvent : Les évènements liés au navigateur web (click, dblclick, pointerdrag, pointermove, singleclick).
ol.MapEvent : Les évènement liés à la carte (moveend, movestart, postrender).
ol.render.Event : Les évènements liés à un rendu du document (postcompose, precompose).

L'exemple ci-après montre comment obtenir le niveau de zoom dans la console à la fin du défilement de la carte.
*/

// classes nécéssaires pour afficher la carte
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

// Sources de données et couche OpenStreetMap
let osm = new TileLayer({
    source: new OSM(),
});

// Déclaration de la carte
let map = new Map({
    layers: [osm],
    target: 'map',
    view: new View({
        center:[0, 0],
        zoom: 2
    })
});

// Méthode "on" liée à l'objet map
map.on('moveend', function(evt){
    let zoom = map.getView().getZoom();
    console.log(zoom);
});