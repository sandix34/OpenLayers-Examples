# Collection d'exemples OpenLayers

Série d'exemples de code permettant d'appréhender les différentes composantes de l' API d' OpenLayers.


## Installation

1. Exécuter dans le répertoire la commande `npm install`  qui va installer toutes les dépendances Node.js

2. Pour visualiser un exemple, copier le code d'un des fichers se trouvant dans le dossier `exemple` le coller dans  `app/js/app.js` et exécuter `npm run start` 


### Scripts disponibles
 
- `npm run start`: Démarre le serveur de développement en utilisant Browsersync
- `npm run build:dev`: Génère les ressources front sans compression en vue d'une utilisation dans un environnement de développement
- `npm run build:prod`: Génère les ressources front avec compréssion (minify, uglify) en vue d'une utilisation dans un environnement de production
- `npm run clean`: Supprime les fichiers générés par Webpack
- `npm run clean:all`: Supprime les fichiers générés par Webpack ainsi que le répertoire des dépendances installées avec NPM(`node_modules`)