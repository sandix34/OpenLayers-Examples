/**
 * --------------------
 * Les protocoles HTTP
 * --------------------
 * 
 * Par définition, le Web Map Service (WMS), le Web Map Tile Service (WMTS),
 * le Web Coverage Service (WCS), le Web Feature Service (WFS) et
 * le Web Feature Service Transactional (WFS-T) sont des protocoles HTTP (Hypertext Transfer Protocol en anglais)
 * fournissant des données géoréfencées par des URL (Uniform Resource Locator en anglais)
 * selon les normes internationales et standardisées de l’Open Geospatial Consortium (OGC).
 * On parle souvent de flux de données. Ces différents services sont mis à disposition par des serveurs cartographiques.
 */

 /**
  * -----------------
  * Le protocole WFS
  * ----------------
  * 
  * Le WFS est un protocole HTTP d’échange de données vecteurs qui permet “côté client”
  * de connaître les structures et les sources de la donnée spatiale.
  * En clair, le serveur cartographique fournit une URL avec plusieurs paramètres
  * pour appeler et lister les entités du vecteur dans un format spécifique (XML, JSON, etc).
  * 
  * Dans OL, il est alors possible de prendre en charge le protocole WFS 
  * comme une source de données vectorielles externe en précisant 
  * le format de l'application de l'URL (ici : JSON):
  * 
  */

  // classes nécéssaires pour afficher la carte
import 'ol/ol.css';  
import Map from 'ol/Map';
import View from 'ol/View';

 import VectorSource from 'ol/source/Vector';
 import GeoJSON from 'ol/format/GeoJSON';
 import VectorLayer from 'ol/layer/Vector';

  // Déclaration de la source de la couche en format WFS 
let sourceWFS = new VectorSource({
	// Chargement du lien WFS en format json
	url: 'https://map.geomatick.com/geoserver/wfs?service=WFS&' +
	'version=1.1.0&request=GetFeature&typename=tiger:tiger_roads&' +
	'outputFormat=application/json',
	format: new GeoJSON(),
	serverType: 'geoserver'
});

// Déclaration de la couche WFS 
let vecteurWFS = new VectorLayer({ 
	source: sourceWFS 
});

// Déclaration de la carte 
let map = Map({
	// Appel des couches de la carte 
	layers: [vecteurWFS],
	// Cible de la div map 
	target: 'map',
	// Caractéristiques de la vue de la carte 
	view: new View({
		center: [-8233510, 4980620],
		zoom: 13
	})
});