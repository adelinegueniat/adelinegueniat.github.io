# projet-fheche_agueniat_2igpt
----------------------------
## BECOME A HERO : NEZ ROUGE
#### Participants 
- Francis Hêche
- Adeline Gueniat

#### Outils de développement
- Visual Studio Code
- Git Shell, GitHub
- Yeoman (fountain-angular1)
- Angular JS
- bower : installations de dépendances web
- grunt / gulp : tâches automatisées

## 1. Setup du projet
##### 1.1. Création du dossier du projet
```mkdir mon-dossier```

##### 1.2. Création du squelette du projet
```cd mon-dossier```, ```yo fountain-angular1```

##### 1.3. Installation des outils bower, gulp, grunt
```npm install -g yo bower grunt-cli gulp-cli``` 

##### 1.4. Correction d'un bug d'une dépendance

Pour palier à un bug rencontré dans la récursivité d'une dépendance, il faut forcer la version 3.0.0 qui, elle, est fonctionnelle. 
 1) Créer un fichier ```npm-shrinkwrap.json``` à la racine du projet avec le contenu suivant :
> {
         "dependencies": {
             "glob-stream": {
                 "version": "5.3.5",
                 "dependencies": {
                     "glob-parent": {
                         "version": "3.0.0"
                     }
                 }
             }
         }
}

2) Faire ```npm install``` 
3) Nettoyer les fichiers temporaires grâce à ```gulp clean```

## 2. Setup GitHub
##### 2.1. Création d'un répertoire sur GitHub
Le répertoire ```projet-fheche_agueniat_2igpt``` a été créé sur ```https://github.com/heg-web```
##### 2.2. Choix de deux branches dans le répertoire
- master : branche pour le développement
- gh-pages : branche pour le déploiement

##### 2.3. Ajout du projet sur GitHub (master)
1) Se déplacer dans le répértoire du projet : ```cd mon-projet```
2) Initialiser le répertoire comme étant un répertoire Git : ```git init```
3) Ajouter tous les fichiers dans le nouveau répertoire local (staged) : ```git add . ```
4) Faire un commit sur les fichiers : ```git commit -m "Mon message de commit"``` 
5) Ajouter l'URL du répertoire GitHub (remote repository) au répertoire local : ```git remote add origin mon-URL```
6) Faire un push sur le répertoire GitHub : ```git push origin master```
##### 2.4. Déployer le projet sur gh-pages
1) Créer une version minifiée du projet par un ```gulp build```. Un dossier dist se crée dans le dossier du projet.
2) Déployer le dossier **dist** sur une branche gh-pages
2.1. Se déplacer dans le dossier dist : ```cd dist```
2.2. Initialiser le dossier comme étant un répéretoire git : ```git init```
2.3. Créer une branche gh-pages : ```git checkout -b gh-pages```. On se trouve désormais dans la branche gh-pages.
2.4 Ajouter les fichiers : ```git add .```
2.5 Faire un commit : ```git commit```
2.6 Faire un push : ```git push origin gh-pages```

Ces manipulations ne sont à faire qu'une fois ; après chaque modification, il suffira de faire un ```git add```, ```git commit``` et ```git push```.
##### 2.4b) Optionnel : simplifier le déploiement
Afin de simplifier le déploiement, il est possible d'installer un package via npm, qui nous permet de ne plus faire autant de manipulations.
1) Se placer dans le dossier principal et installer le package : ```npm install --save-dev gulp-deploy-git```
2) Ajouter au fichier *gulpfile.js* : 
```javascript
var deploy = require('gulp-deploy-git');
gulp.task('deploy', function() {
	return gulp.src('**/*', { read: false, cwd: 'dist' })
		.pipe(deploy({
			repository: 'mon-URL',
			remoteBranch: 'gh-pages'
	}))
 });
 ```
 3) Il est désormais possible de déployer le dossier ```dist``` sur gh-pages en seulement deux commandes : ```gulp build``` puis ```gulp deploy```.
