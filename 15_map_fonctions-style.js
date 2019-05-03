/* 
VI.3. LES FONCTIONS DE STYLE
Le pouvoir de la cartographie est de montrer des informations distinctement pour une lecture efficace par les utilisateurs. Ainsi, il est important de segmenter les entités géographiques selon leur valeurs attributaires et la résolution spatiale. Pour cela, on se sert de la fonction de style implémentée par OL. De part la fonction de style, on peut obtenir l'objet géographique du vecteur stylisé ainsi que la résolution de la vue de la carte. Pour une fonction liée à une valeur attributaire, on a :
*/

var remplissageCouleur;
var contourCouleur;
var fonctionStyle = function(entite){
	// On obtient les valeurs des entités géographiques
	var nomPays=entite.get('name');
	// Mise en place de classe selon le nom du Pays qui commence par la lettre S
	if(nomPays[0]==="S"){
		remplissageCouleur='rgba(0, 255, 0, 0.3)';
		contourCouleur='rgba(34, 121, 34, 1.0)';
	}else{
		remplissageCouleur='rgba(0, 0, 255, 0.3)';
		contourCouleur='rgba(0, 0, 255, 1.0)';
	}
	var styleBasic = new ol.style.Style({
		stroke : new ol.style.Stroke({
		   color: contourCouleur,
		   width: 3
		}),
		fill : new ol.style.Fill({
			color: remplissageCouleur
		})
	});
	// On retourne le style 	
	return [styleBasic];
}
// Source de données du vecteur en format GeoJSON
var sourceGeoJSON = new ol.source.Vector({
	url: 'data/pays.geojson',
	format: new ol.format.GeoJSON()
});
// Déclaration de la couche vectorielle	
var vecteurGeoJSON = new ol.layer.Vector({
	source: sourceGeoJSON,
	style: fonctionStyle		
});
// Déclaration de la carte
var map = new ol.Map({
	layers: [vecteurGeoJSON],
	target: 'map',
	view: new ol.View({
		center: [0,0],
		zoom: 2
	}),
});

// On ajoute un texte lorsque la carte atteint un certain seuil de résolution :

var remplissageCouleur;
var contourCouleur;
var fonctionStyle = function(entite,resolution){
	// On obtient les valeurs des entités géographiques
	var nomPays=entite.get('name');
	// Mise en place de classe selon le nom du Pays qui commence par la lettre S
	if(nomPays[0]==="S"){
		remplissageCouleur='rgba(0, 255, 0, 0.3)';
		contourCouleur='rgba(34, 121, 34, 1.0)';
	}else{
		remplissageCouleur='rgba(0, 0, 255, 0.3)';
		contourCouleur='rgba(0, 0, 255, 1.0)';
	}
	var styleBasic = new ol.style.Style({
		stroke : new ol.style.Stroke({
		   color: contourCouleur,
		   width: 3
		}),
		fill : new ol.style.Fill({
			color: remplissageCouleur
		})
	});
	var styleTexte = new ol.style.Style({
		stroke : new ol.style.Stroke({
		   color: contourCouleur,
		   width: 3
		}),
		fill : new ol.style.Fill({
			color: remplissageCouleur
		}),		
		text: new ol.style.Text({
			text: nomPays,
			font: 'bold 16px Times New Roman',
			offsetY: -15,
			fill: new ol.style.Fill({
				color: '#fff'
			}),
			stroke: new ol.style.Stroke({
				color: contourCouleur, 
				width: 5
			})
		}), 
	});
	// On retourne les styles selon la résolution de la carte 
	if(resolution > 10000){
		return [styleBasic];
	}else{
		return [styleTexte];
	}
}
// Source de données du vecteur en format GeoJSON
var sourceGeoJSON = new ol.source.Vector({
	url: 'data/pays.geojson',
	format: new ol.format.GeoJSON()
});
// Déclaration de la couche vectorielle	
var vecteurGeoJSON = new ol.layer.Vector({
	source: sourceGeoJSON,
	style: fonctionStyle		
});
// Déclaration de la carte
var map = new ol.Map({
	layers: [vecteurGeoJSON],
	target: 'map',
	view: new ol.View({
		center: [0,0],
		zoom: 4
	}),
});

