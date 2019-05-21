/*
VIII.3. LA MODIFICATION
De même que pour les interactions précédentes,
la modification de données vectorielles est réalisée en ajoutant
l'interaction ol.interaction.Modify à l'objet Map.
On indique la source du vecteur à modifier dans l'objet de l'interaction
et d'autres options sont possibles tels le style
et les conditions de modifications des sommets.
Le code suivant montre la mise en place d'une modification simple.
*/

// classes nécéssaires pour afficher la carte
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';

// classes pour les vecteurs
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';

// Source de données du vecteur en format GeoJSON
const sourceGeoJSON = new VectorSource({
	url: 'data/pays.geojson',
	format: new GeoJSON()
});
// Déclaration de la couche vectorielle	
const vecteurGeoJSON = new VectorLayer({
	source: sourceGeoJSON
});
// Déclaration de la carte
const map = new Map({
	layers: [vecteurGeoJSON],
	target: 'map',
	view: new View({
		center: [0,0],
		zoom: 1
	}),
});
// Déclaration de l'interaction
const interactionModif = new ol.interaction.Modify({
	source: sourceGeoJSON,
	//style: styleDessin
});
// Ajout de l'interaction
map.addInteraction(interactionModif);

