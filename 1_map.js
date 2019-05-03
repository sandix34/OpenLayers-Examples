/**
  * ----------------------
  * AFFICHER UNE CARTE
  * ----------------------
  * Concepts de base - Le composant principal d' OpenLayers
  * https://openlayers.org/en/latest/doc/tutorials/concepts.html
  * 
  * Conventions de module et de nommage
  * https://openlayers.org/en/latest/doc/tutorials/background.html
  * 
  * Mettre une carte sur une page
  * https://openlayers.org/en/latest/doc/quickstart.html
  */

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
 })