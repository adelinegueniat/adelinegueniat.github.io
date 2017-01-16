# BECOME A HERO : NEZ ROUGE

# **Description**
_________
#### Participants 
- Francis Hêche
- Adeline Gueniat

#### Projet
Cette application s'adresse au logisticien de Nez Rouge, qui reçoit l'appel d'un client, introduit les informations de la mission dans le système et l'attribue à un chauffeur. Dans notre cas, c'est aussi le logisticien qui gère les bénévoles (ajout du bénévole dans le système, retrait, mise en activité, ...).


# **Technique**
_________
#### Outils de développement
- Visual Studio Code
- Git Shell, GitHub
- Yeoman (fountain-angular1)
- Angular JS
- npm
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
 ```javascript
 {
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
};
```

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

- Se déplacer dans le dossier dist : ```cd dist```

- Initialiser le dossier comme étant un répéretoire git : ```git init```

- Créer une branche gh-pages : ```git checkout -b gh-pages```. On se trouve désormais dans la branche gh-pages.

- Ajouter les fichiers : ```git add .```

- Faire un commit : ```git commit```

- Faire un push : ```git push origin gh-pages```

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
 
 ## 3. Components
 
 ##### 3.1. Création des components en ligne de commande :  
 
 ```yo angular-fountain1:component --name missions --dir components/missions``` 
 Faire de même pour login, benevoles, navbar, home.
 - **missions** : liste de missions, gestion dans le .js
 - **login** : page de login
 - **benevoles** : liste des bénévoles, gestion dans le .js 
 - **navbar** : gestion de la navbar dans un component plutôt que dans l'index.html directement, afin de pouvoir gérer son affichage plus facilement (via le controller)
 - **home** : page d'accueil
 ## 4. Services
 ```yo angular-fountain1:service --name loginservices --dir services``` 
Faire de même pour sharingData.
- **loginservices** :  gère les logins (connexion, déconnexion, stockage de l'user dans le localStorage, l'affichage de l'user, ...)
- **sharingData** : partage les datas de bénévoles et de missions, afin de synchroniser les actions (la fin d'une mission entraîne la libération du bénévole, ...)
Pour utiliser un service, il faut l'injecter dans le controller du composant.

 ## 4. Plugin
 ##### 4.1 Plugin angular-validation-messages
 
 Gère les messages de validation des formulaires (ex. un champ requis qui est ignoré lève un message d'erreur)
 **Installation** : 
 ```bower install angular-validation-messages --save``` 


# **Problèmes rencontrés**
_________

##### Temps
Il a fallu beaucoup se documenter et utiliser des approches que nous ne connaissions pas ; ceci couplé à la quantité de travail à accomplir pour la mise en place de ce projet, en parallèle aux travaux demandés dans nos autres cours, nous avons manqué de temps pour peaufiner notre application comme nous le souhaitions. 
##### AngularJS
L'utilisation d'AngularJS a été compliquée, car nous ne connaissions pas ce framework et la documentation, bien que complète, était compliquée à parcourir compte tenu du temps qui nous était alloué à la réalisation de ce projet.

##### Deploy
Nous avons rencontrés beaucoup de problèmes pour faire un deploy fonctionnel de notre projet, dû aux liens à modifier, la navbar qui ne s'affichait pas comme nous le souhaitions en local, ... 

##### Installation du plugin
Installer le plugin nous a posé quelques problèmes, dû à l'oubli de la commande --save et donc de l'absence des dépendences.

# **Retour d'expérience**
_________

Ce projet nous a permis de nous rendre compte de la quantité de travail à effectuer dans le cadre du développement d'une application WEB. 

