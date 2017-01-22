function navbarController(n){var e=this;e.pageLogin=function(){return""===localStorage.user},e.getUser=function(){return n.getUser()},e.isLogged=function(){return localStorage.userIsLogged},e.userLogout=function(){n.userLogout()}}function missionsController(n){function e(){return l.liste=angular.fromJson(localStorage.getItem(t)),l.liste}function r(){localStorage.setItem(t,angular.toJson(l.missions))}var l=this;l.missions=[];var t="lmkey";l.listebenevoles=n.getAllBenevoles(),null===localStorage.getItem(t)&&r(),l.missions=e(),l.addToMissions=function(){var n=new Date(l.date),e=n.getDate()+"."+(n.getMonth()+1)+"."+n.getFullYear(),t=new Date(l.heure),s=t.getHours()+"h"+t.getMinutes(),o={date:e,heure:s,depart:l.depart,destination:l.destination,client:l.client,clientPhone:l.clientPhone,driver:{id:null,name:"",firstname:""},isDone:!1,isWaiting:!0};l.missions.push(o),r()},l.getMissionPosition=function(n){var e=l.missions.indexOf(n);return e},l.cancelMission=function(n){var e=l.getMissionPosition(n);l.missions.splice(e,1),localStorage.removeItem(e),r()},l.rollback=function(){l.missions.pop(),r()},l.putOnDuty=function(e,l){n.putBenevoleOnDuty(e,l),r()},l.toggle=function(n){n.isWaiting=!1,n.isDone=!1,r()},l.archive=function(e){e.isDone=!0,r(),n.putOffDuty(e.driver.id),l.listebenevoles=n.getAllBenevoles()},l.dataTest=function(){var n={date:"21 décembre 2016",heure:"21:20",depart:"Delémont",destination:"Neuchâtel",client:"Phil Collins",clientPhone:"032 123 45 67",driver:{drivern:"",driverfn:""},isDone:!1,isWaiting:!0};l.missions.push(n),r()},l.deleteData=function(){localStorage.removeItem(t),location.reload()}}function loginController(n,e){var r=this,l=window,t=console;localStorage.user="",e.showMessage=!1,e.showSubmitMessage=function(){t.log("calling"),e.showMessage=!0},r.userLogin=function(e,r){n.userLogin(e,r)&&(l.location="/projet-fheche_agueniat_2igpt/#!/accueil")}}function homeController(n){var e=this;e.getUser=function(){return n.getUser()}}function bottombarController(){this.text="My brand new component!"}function benevolesController(n){function e(){return l.liste=angular.fromJson(localStorage.getItem(t)),l.liste}function r(){localStorage.setItem(t,angular.toJson(l.benevoles))}var l=this;l.titre="Bénévoles",l.benevoles=[],l.title="",l.name="",l.firstName="",l.address="",l.phone="";var t="lbkey";l.listemissions=n.sharedMissions,null===localStorage.getItem(t)&&r(),l.benevoles=e(),l.addToBenevoles=function(){var n={id:null,titre:l.title,name:l.name,firstName:l.firstName,address:l.address,phone:l.phone,isWorking:!1,onDuty:!1},e=l.benevoles[l.benevoles.length-1]||{id:0};n.id=e.id+1,l.benevoles.push(n),r()},l.getBenevolePosition=function(n){var e=l.benevoles.indexOf(n);return e},l.getBenevole=function(){var e=n.getBenevolePosition(),r=l.benevoles[e];return r},l.removeBenevole=function(n){var e=l.getBenevolePosition(n);l.benevoles.splice(e,1),localStorage.removeItem(e),r()},l.toggle=function(n){n.isWorking=!n.isWorking,r()},l.rollback=function(){l.benevoles.pop(),r()},l.dataTest=function(){var n={id:1,titre:"Monsieur",name:"Alpha",firstName:"Bertrand",address:"Rue de la Gare 7, 2000 Neuchâtel",phone:"032 123 45 67",isWorking:!1,onDuty:!1},e={id:2,titre:"Monsieur",name:"Bravo",firstName:"Tom",address:"Rue du lac 22, 2502 Bienne",phone:"032 987 65 43",isWorking:!0,onDuty:!1},t={id:3,titre:"Monsieur",name:"Charlie",firstName:"Jake",address:"Rue des Prés 9, 3000 Berne",phone:"032 341 60 66",isWorking:!1,onDuty:!0},s={id:4,titre:"Madame",name:"Delta",firstName:"Irene",address:"Rue de l'Hôpital 41, 2800 Delémont",phone:"032 000 11 22",isWorking:!1,onDuty:!1},o={id:5,titre:"Madame",name:"Echo",firstName:"Aline",address:"Rue de l'Hôpital 45, 2800 Delémont",phone:"076 000 11 85",isWorking:!0,onDuty:!1},a={id:6,titre:"Monsieur",name:"Foxtrot",firstName:"Mark",address:"Rue des voitures 3, 6000 Chur",phone:"078 456 28 96",isWorking:!1,onDuty:!1};l.benevoles.push(n,e,t,s,o,a),r()},l.deleteData=function(){localStorage.removeItem(t),location.reload()}}function SharingData(){var n=this;n.sharedBenevoles=angular.fromJson(localStorage.getItem("lbkey")),n.sharedMissions=angular.fromJson(localStorage.getItem("lmkey")),n.getAllBenevoles=function(){return n.sharedBenevoles=angular.fromJson(localStorage.getItem("lbkey")),n.sharedBenevoles},n.getBenevolePosition=function(e){var r=n.sharedBenevoles.indexOf(e);return r},n.putBenevoleOnDuty=function(e,r){e.onDuty=!e.onDuty,r.isWaiting=!1,r.driver={id:e.id,name:e.name,firstname:e.firstName},localStorage.setItem("lbkey",angular.toJson(n.sharedBenevoles))},n.putOffDuty=function(e){for(var r=n.getAllBenevoles(),l=0;l<r.length;l++){var t=r[l];if(t.id===e){t.onDuty=!t.onDuty;break}}localStorage.setItem("lbkey",angular.toJson(r))},n.saveChangesBenevole=function(){localStorage.setItem("lbkey",angular.toJson(n.sharedBenevoles))}}function Loginservices(){var n=this,e=window;"/"===location.pathname&&(localStorage.user=""),n.getUser=function(){return""!==localStorage.user?localStorage.user:void("/"!==location.pathname&&n.userLogout())},n.userLogin=function(n,r){return"Francis"===n&&"1234"===r||"Adeline"===n&&"1234"===r?(localStorage.user=n,!0):(e.alert("Erreur ! L'utilisateur et le mot de passe ne correspondent pas !"),!1)},n.userLogout=function(){localStorage.user="",e.location="/projet-fheche_agueniat_2igpt/#!/"}}function routesConfig(n,e,r){r.html5Mode(!1).hashPrefix("!"),e.otherwise("/"),n.state("login",{url:"/",component:"login"}).state("home",{url:"/accueil",component:"home"}).state("benevoles",{url:"/benevoles",component:"benevoles"}).state("missions",{url:"/missions",component:"missions"}).state("inscriptions",{url:"/inscription",component:"inscriptions"})}routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],navbarController.$inject=["Loginservices"],missionsController.$inject=["SharingData"],loginController.$inject=["Loginservices","$scope"],homeController.$inject=["Loginservices"],benevolesController.$inject=["SharingData"],angular.module("app",["ui.router","gg.vmsgs"]),angular.module("app").component("navbar",{templateUrl:"app/components/navbar/navbar.html",controller:navbarController}),angular.module("app").component("missions",{templateUrl:"app/components/missions/missions.html",controller:missionsController}),angular.module("app").component("login",{templateUrl:"app/components/login/login.html",controller:loginController}),angular.module("app").component("home",{templateUrl:"app/components/home/home.html",controller:homeController}),angular.module("app").component("bottombar",{templateUrl:"app/components/bottombar/bottombar.html",controller:bottombarController}),angular.module("app").component("benevoles",{templateUrl:"app/components/benevoles/benevoles.html",controller:benevolesController}),angular.module("app").service("SharingData",SharingData),angular.module("app").service("Loginservices",Loginservices),angular.module("app").run(["$templateCache",function(n){n.put("app/components/benevoles/benevoles.html",'<div class="component">\r\n  <div class="container">\r\n    <!-- Marketing Icons Section -->\r\n    <div class="row">\r\n      <div class="col-lg-12">\r\n        <h1 class="page-header">\r\n          {{$ctrl.titre}}\r\n\r\n          <button class="btn btn-success" ng-click="show = !show; confirm = false;" style="display: block; float: right; text-decoration: none">Ajouter un bénévole</button>\r\n          \r\n        </h1>\r\n</div>\r\n\r\n        <div class="col-lg-12">\r\n\r\n          <div class="panel panel-success" ng-show="show" id="ajout">\r\n            <div class="panel-heading">\r\n              <h4>Ajouter un bénévole</h4>\r\n            </div>\r\n            \r\n              <form name="form" ng-submit="$ctrl.addToBenevoles()" role="form" class="form-group">\r\n                <div class="form-group" ng-class="{ \'has-error\': form.titre.$touched && form.titre.$error.required }" style="display: block; margin-left: auto; margin-right: auto; width:90%">\r\n                  <input type="text" class="form-control" name="titre" id="titre" placeholder="Titre" ng-model="$ctrl.title" required>\r\n                </div>\r\n                <div class="form-group" ng-class="{ \'has-error\': form.name.$touched && form.name.$error.required }" style="display: block; margin-left: auto; margin-right: auto; width:90%">\r\n                  <input type="text" class="form-control" name="name" id="name" placeholder="Nom" ng-model="$ctrl.name" required>\r\n                </div>\r\n                <div class="form-group" ng-class="{ \'has-error\': form.firstName.$touched && form.firstName.$error.required }" style="display: block; margin-left: auto; margin-right: auto; width:90%">\r\n                  <input type="text" class="form-control" name="firstName" id="firstName" placeholder="Prénom" ng-model="$ctrl.firstName" required>\r\n                </div>\r\n                <div class="form-group" ng-class="{ \'has-error\': form.address.$touched && form.address.$error.required }" style="display: block; margin-left: auto; margin-right: auto; width:90%">\r\n                  <input type="text" class="form-control" name="address" id="address" placeholder="Adresse" ng-model="$ctrl.address" required>\r\n                </div>\r\n                <div class="form-group" ng-class="{ \'has-error\': form.phone.$touched && form.phone.$error.required }" style="display: block; margin-left: auto; margin-right: auto; width:90%">\r\n                  <input type="text" class="form-control" name="phone" id="phone" placeholder="Numéro de téléphone" ng-model="$ctrl.phone" required>\r\n                </div>\r\n                <span ng-show="form.titre.$touched && form.titre.$error.required" class="alert-form">Titre requis.</span>\r\n                <span ng-show="form.name.$touched && form.name.$error.required" class="alert-form">Nom requis.</span>\r\n                <span ng-show="form.firstName.$touched && form.firstName.$error.required" class="alert-form">Prénom requis.</span>\r\n                <span ng-show="form.address.$touched && form.address.$error.required" class="alert-form">Adresse requise.</span>\r\n                <span ng-show="form.phone.$touched && form.phone.$error.required" class="alert-form">Numéro de téléphone requis</span>\r\n                <div class="form-actions form-group">\r\n                  <button type="submit" ng-disabled="form.$invalid" ng-click="show = !show; confirm = true" class="btn btn-success btn-sm btn-block">Ajouter</button>\r\n                </div>\r\n              </form>\r\n            \r\n          </div>\r\n        \r\n\r\n        <div class="panel panel-success" ng-show="confirm">\r\n          <div class="panel-heading">\r\n            <h4>Le bénévole {{$ctrl.firstName}} {{$ctrl.name}} a été ajouté à la liste. \r\n            <button class="btn btn-danger" ng-click="$ctrl.rollback(); confirm = false; rollback = true;">Annuler</button>\r\n          </h4></div>\r\n        </div>\r\n\r\n        <div class="panel panel-danger" ng-show="rollback">\r\n           <div class="panel-heading">\r\n          <h4>Opération annulée.</h4>\r\n           </div>\r\n        </div>\r\n</div>\r\n\r\n        <div class="col-md-12" id="actifs">\r\n          <div class="panel panel-default">\r\n            <div class="panel-heading">\r\n              <h4><i class="fa fa-fw fa-check"></i> Bénévoles en service</h4>\r\n            </div> \r\n            <div class="panel-body">\r\n              <table class="table">\r\n                <tr>\r\n                  <th class="hidden-xs col-md-1 col-lg-1 display-cell">Titre</th>\r\n                  <th class="col-xs-2 col-md-2 col-lg-2 display-cell">Nom</th>\r\n                  <th class="col-xs-2 col-md-2 col-lg-2 display-cell">Prénom</th>\r\n                  <th class="hidden-xs col-md-2 col-lg-3 display-cell">Adresse</th>\r\n                  <th class="col-xs-2 col-md-2 col-lg-2 display-cell">Téléphone</th>\r\n                  <th class="col-xs-1 col-md-1 col-lg-1 display-cell centered">Statut</th> \r\n                  <th class="col-xs-1 col-md-2 col-lg-1 display-cell centered">Mettre en congé</th>\r\n                </tr>\r\n\r\n\r\n                <tr ng-repeat="benevole in $ctrl.benevoles" ng-if="benevole.isWorking">\r\n                  <td class="hidden-xs">{{ benevole.titre }}</td>\r\n                  <td>{{ benevole.name }}</td>\r\n                  <td>{{ benevole.firstName }}</td>\r\n                  <td class="hidden-xs">{{ benevole.address }}</td>\r\n                  <td>{{ benevole.phone }}</td>\r\n                  <td class="centered" ng-if="benevole.onDuty">En mission \r\n\r\n</td>\r\n                  <td class="centered" ng-if="!benevole.onDuty">En attente </td>\r\n\r\n                  <td class="centered"><button class="btn btn-secondary glyphicon glyphicon-remove" ng-click="$ctrl.toggle(benevole)" ng-disabled="benevole.onDuty"></button></td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="col-md-12" id="inactifs">\r\n          <div class="panel panel-default">\r\n            <div class="panel-heading">\r\n              <h4><i class="fa fa-fw fa-check"></i> Bénévoles inactifs</h4>\r\n            </div>\r\n            <div class="panel-body">\r\n              <table class="table">\r\n                <tr>\r\n                  <th class="hidden-xs col-md-2 col-lg-1 display-cell">Titre</th>\r\n                  <th class="col-xs-2 col-md-2 col-lg-2 display-cell">Nom</th>\r\n                  <th class="col-xs-2 col-md-2 col-lg-2 display-cell">Prénom</th>\r\n                  <th class="hidden-xs col-md-2 col-lg-3 display-cell">Adresse</th>\r\n                  <th class="col-xs-3 col-md-2 col-lg-2 display-cell">Téléphone</th>\r\n                  <th class="col-xs-1 col-md-1 col-lg-1 display-cell centered">Mettre en activité</th>\r\n                  <th class="col-xs-1 col-md-1 col-lg-1 display-cell centered">Supprimer</th>\r\n\r\n                </tr>\r\n\r\n                <tr ng-repeat="benevole in $ctrl.benevoles | orderBy:\'name\'" ng-if="!benevole.isWorking">\r\n                  <td class="hidden-xs">{{ benevole.titre }}</td>\r\n                  <td>{{ benevole.name }}</td>\r\n                  <td>{{ benevole.firstName }}</td>\r\n                  <td class="hidden-xs">{{ benevole.address }}</td>\r\n                  <td>{{ benevole.phone }}</td>\r\n                  <td class="centered"><button class="btn btn-success glyphicon glyphicon-ok" ng-click="$ctrl.toggle(benevole)"></button></td>\r\n                  <td class="centered"><button class="btn btn-danger glyphicon glyphicon-remove-circle" ng-click="$ctrl.removeBenevole(benevole)"></button>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <center><button class="btn btn-danger btn-sm" ng-click="$ctrl.dataTest()"> Données test</button> <button class="btn btn-warning btn-sm" ng-click="$ctrl.deleteData()">Supprimer les données en cache</button></center>\r\n\r\n      </div>\r\n    </div></div>'),n.put("app/components/bottombar/bottombar.html",'<div class="component">\r\n  <div class="container">\r\n    <!-- Footer -->\r\n    <div class="navbar navbar-static-bottom">\r\n      <div class="row">\r\n        <div class="col-lg-12">\r\n          <p style="text-align: center">Copyright &copy; 2017 - Adeline Gueniat et Francis Hêche</p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>'),n.put("app/components/home/home.html",'<div class="component">\r\n\r\n<!-- Page Content -->\r\n    <div class="container">\r\n\r\n        <!-- Marketing Icons Section -->\r\n        <div class="row">\r\n            <div class="col-lg-12">\r\n                <h1 class="page-header">\r\n                    Bienvenue {{ $ctrl.getPage() }}\r\n                </h1>\r\n            </div>\r\n            \r\n            <div class="col-md-4" style="text-align: center">\r\n                <div class="panel panel-default">\r\n                    <div class="panel-heading">\r\n                        <h4><i class="fa fa-fw fa-check"></i> Missions en cours</h4>\r\n                    </div>\r\n                    <div class="panel-body">\r\n                        <p><a href="/projet-fheche_agueniat_2igpt/#!/missions#ongoing" class="glyphicon glyphicon-th-list" style="font-size: 50px; color:black; text-decoration:none"></a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="col-md-4" style="text-align: center">\r\n                <div class="panel panel-default">\r\n                    <div class="panel-heading">\r\n                        <h4><i class="fa fa-fw fa-check"></i> Missions en attente</h4>\r\n                    </div>\r\n                    <div class="panel-body">\r\n                        <p><a href="/projet-fheche_agueniat_2igpt/#!/missions#waitlist" class="glyphicon glyphicon-list-alt" style="font-size: 50px;color:black; text-decoration:none"></a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="col-md-4" style="text-align: center">\r\n                <div class="panel panel-default">\r\n                    <div class="panel-heading">\r\n                        <h4><i class="fa fa-fw fa-check"></i> Ajouter une mission</h4>\r\n                    </div>\r\n                    <div class="panel-body">\r\n                        <p><a href="/projet-fheche_agueniat_2igpt/#!/missions#ajout" class="glyphicon glyphicon-plus-sign" style="font-size: 50px; color:black; text-decoration:none"></a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            \r\n\r\n            <div class="col-md-4" style="text-align: center">\r\n                <div class="panel panel-default">\r\n                    <div class="panel-heading">\r\n                        <h4><i class="fa fa-fw fa-check"></i> Bénévoles disponibles</h4>\r\n                    </div>\r\n                    <div class="panel-body">\r\n                        <p><a href="/projet-fheche_agueniat_2igpt/#!/benevoles#actifs" class="glyphicon glyphicon-ok" style="font-size: 50px;color:black; text-decoration:none"></a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="col-md-4" style="text-align: center">\r\n                <div class="panel panel-default">\r\n                    <div class="panel-heading">\r\n                        <h4><i class="fa fa-fw fa-check"></i> Bénévoles inactifs</h4>\r\n                    </div>\r\n                    <div class="panel-body">\r\n                        <p><a href="/projet-fheche_agueniat_2igpt/#!/benevoles#inactifs" class="glyphicon glyphicon-remove" style="font-size: 50px;color:black; text-decoration:none"></a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="col-md-4" style="text-align: center">\r\n                <div class="panel panel-default">\r\n                    <div class="panel-heading">\r\n                        <h4><i class="fa fa-fw fa-check"></i> Ajouter un bénévole</h4>\r\n                    </div>\r\n                    <div class="panel-body">\r\n                        <p><a href="/projet-fheche_agueniat_2igpt/#!/benevoles#ajout" class="glyphicon glyphicon-plus-sign" style="font-size: 50px; color:black; text-decoration:none"></a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n\r\n        \r\n\r\n\r\n        \r\n\r\n    </div>\r\n    <!-- /.container -->\r\n\r\n    </div></div>'),n.put("app/components/login/login.html",'<div class="component">\r\n\r\n  <!-- Page Content -->\r\n  <div class="container">\r\n\r\n    <!-- Marketing Icons Section -->\r\n    <div class="row">\r\n            <div class="col-md-12" style="text-align: center; padding-top:40px">\r\n              <div style="display: block; margin-left: auto; margin-right: auto; width:100%; max-width: 500px">\r\n        <img src="./img/opnezrouge.jpg" width="90%" style="padding-bottom: 20px">\r\n        </div>\r\n\r\n<div class="panel panel-default" style="display: block; margin-left: auto; margin-right: auto; width:90%; max-width: 400px">\r\n  <div class="panel-heading">\r\n    <h4><i class="fa fa-fw fa-check"></i> Connexion</h4>\r\n  </div>\r\n  <div class="panel-body">\r\n    <!--<form name="form" role="form">-->\r\n      <form vmsg-form ng-submit="showSubmitMessage()">\r\n    <div class="form-group" style="display: block; margin-left: auto; margin-right: auto; width:90%">\r\n      <input ng-model="usrLog" class="form-control" type="text" placeholder="Nom d\'utilisateur" vmsg="{hideTrigger: \'keydown\'}" required ng-minlength="3">\r\n    </div>\r\n    <div class="form-group" style="display: block; margin-left: auto; margin-right: auto; width:90%">  \r\n      <!-- <input type="password" class="form-control" id="pwd" placeholder="Mot de passe" ng-model="pwdLog" required> -->\r\n      <input ng-model="pwdLog" class="form-control" type="password" placeholder="Mot de passe" vmsg="{hideTrigger: \'keydown\'}" required ng-minlength="4">\r\n    </div>\r\n    \r\n<div class="form-group" style="display: block; margin-left: auto; margin-right: auto; width:90%">\r\n<!--<button class="btn btn-danger" style="width: 100%;" ng-click="$ctrl.loggedAsAdmin()">Connexion</button>-->\r\n<input type="submit" value="Connexion" class="btn btn-danger" style="width: 100%" ng-click="$ctrl.userLogin(usrLog, pwdLog)" ng-disabled="form.$invalid">\r\n</div>\r\n</form>\r\n\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>'),n.put("app/components/missions/missions.html",'<div class="component">\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!-- Page Content -->\r\n  <div class="container">\r\n\r\n    <!-- Marketing Icons Section -->\r\n    <div class="row">\r\n      <div class="col-lg-12">\r\n        <h1 class="page-header">\r\n          Missions\r\n          <button class="btn btn-success" ng-click="show = !show; confirm = false;" style="display: block; float: right; text-decoration: none">Ajouter une mission</button>\r\n          \r\n        </h1>\r\n\r\n      </div>\r\n      <div class="col-lg-12">\r\n\r\n        <div class="panel panel-success" ng-show="show" id="ajout">\r\n          <div class="panel-heading">\r\n              <h4>Ajouter une mission</h4>\r\n          </div>\r\n          <div align="center">\r\n            <form name="form" ng-submit="$ctrl.addToMissions()" role="form" class="form-group" style="padding-top:20px">\r\n              <div class="form-inline" ng-class="{ \'has-error\': form.date.$touched && form.date.$error.required }">\r\n                <input type="date" class="smallinput" name="date" id="date" placeholder="Date" class="form-control" ng-model="$ctrl.date" required>\r\n              </div>\r\n              <div class="form-inline" ng-class="{ \'has-error\': form.heure.$touched && form.heure.$error.required }">\r\n                <input type="time" class="smallinput" name="heure" id="heure" placeholder="Heure" class="form-control" ng-model="$ctrl.heure" required>\r\n              </div>\r\n              <div class="form-inline" ng-class="{ \'has-error\': form.depart.$touched && form.depart.$error.required }">\r\n                <input type="text" class="smallinput" name="depart" id="depart" placeholder="Départ" class="form-control" ng-model="$ctrl.depart" required>\r\n              </div>\r\n              <div class="form-inline" ng-class="{ \'has-error\': form.destination.$touched && form.destination.$error.required }">\r\n                <input type="text" class="smallinput" name="destination" id="destination" placeholder="Destination" class="form-control" ng-model="$ctrl.destination" required>\r\n              </div>\r\n              <div class="form-inline" ng-class="{ \'has-error\': form.client.$touched && form.client.$error.required }">\r\n                <input type="text" class="smallinput" name="client" id="client" placeholder="Nom du client" class="form-control" ng-model="$ctrl.client" required>\r\n              </div>\r\n              <div class="form-inline" ng-class="{ \'has-error\': form.clientPhone.$touched && form.clientPhone.$error.required }">\r\n                <input type="text" class="smallinput" name="clientPhone" id="clientPhone" placeholder="Numéro de téléphone du client" class="form-control" ng-model="$ctrl.clientPhone" required>\r\n              </div>\r\n              <span ng-show="form.date.$touched && form.date.$error.required" class="alert-form">Date requise.</span>\r\n              <span ng-show="form.heure.$touched && form.heure.$error.required" class="alert-form">Heure requise.</span>\r\n              <span ng-show="form.depart.$touched && form.depart.$error.required" class="alert-form">Départ requis.</span>\r\n              <span ng-show="form.destination.$touched && form.destination.$error.required" class="alert-form">Destination requise.</span>\r\n              <span ng-show="form.client.$touched && form.client.$error.required" class="alert-form">Nom du client. requis</span>\r\n              <span ng-show="form.clientPhone.$touched && form.clientPhone.$error.required" class="alert-form">Numéro de téléphone du client requis.</span>\r\n              <div class="form-actions form-inline smallinput" align="center">\r\n                <button type="submit" ng-disabled="form.$invalid" ng-click="show = !show; confirm = true" class="btn btn-success btn-sm btn-block">Ajouter</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n\r\n      <div class="panel panel-success" ng-show="confirm">\r\n        <div class="panel-heading">\r\n          <h4>Le trajet reliant {{$ctrl.depart}} à {{$ctrl.destination}}, demandé par {{ $ctrl.client }}, a été ajouté à la liste d\'attente.</h4>\r\n          <button class="btn btn-danger" ng-click="$ctrl.rollback(); confirm = false; rollback = true;">Annuler</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="panel panel-danger" ng-show="rollback">\r\n           <div class="panel-heading">\r\n          <h4>Opération annulée.</h4>\r\n           </div>\r\n        </div>\r\n        </div>\r\n\r\n      <div class="col-md-12" id="waitlist">\r\n        <div class="panel panel-default">\r\n          <div class="panel-heading">\r\n            <h4><i class="fa fa-fw fa-check"></i>En attente</h4>\r\n          </div>\r\n          <div class="panel-body">\r\n            <table class="table">\r\n              <tr>\r\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Date / Heure</th>\r\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Départ</th>\r\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Destination</th>\r\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Client</th>\r\n                <th class="col-xs-2 col-md-2 col-lg-2 display-cell">Tél. client</th>\r\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Attribuer un chauffeur</th>\r\n              </tr>\r\n\r\n\r\n              <tr ng-repeat="mission in $ctrl.missions" ng-if="mission.isWaiting">\r\n                <td class="col-xs-1">{{ mission.date }} / {{ mission.heure }}</td>\r\n                <td>{{ mission.depart }}</td>\r\n                <td>{{ mission.destination }}</td>\r\n                <td class="col-xs-1">{{ mission.client }}</td>\r\n                <td>{{ mission.clientPhone }}</td>\r\n                <td class="centered">\r\n                  <select name="selectBenevole" id="selectBenevole" ng-model="benevole">\r\n                     <option ng-repeat="benevole in $ctrl.listebenevoles" ng-value="benevole" ng-if="benevole.isWorking && !benevole.onDuty">\r\n                       {{benevole.firstName}} {{benevole.name}}\r\n                      </option>\r\n                  </select>\r\n                  <button class="btn btn-success" ng-click="$ctrl.putOnDuty(benevole, mission);" style="display: block; float: right; text-decoration: none"> </button>\r\n\r\n                </td>\r\n              </tr>\r\n\r\n\r\n\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="col-md-12" id="ongoing">\r\n        <div class="panel panel-default">\r\n          <div class="panel-heading">\r\n            <h4><i class="fa fa-fw fa-check"></i>En cours</h4>\r\n          </div>\r\n          <div class="panel-body">\r\n            <table class="table">\r\n              <tr>\r\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Date / Heure</th>\r\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Départ</th>\r\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Destination</th>\r\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Client</th>\r\n                <th class="col-xs-2 col-md-2 col-lg-2 display-cell">Tél. client</th>\r\n                <th class="col-xs-2 col-md-2 col-lg-2 display-cell">Chauffeur</th>\r\n\r\n                <th class="col-xs-1 col-md-2 col-lg-1 display-cell centered">Validation</th>\r\n              </tr>\r\n\r\n\r\n              <tr ng-repeat="mission in $ctrl.missions" ng-if="(mission.isWaiting === false && mission.isDone === false)">\r\n                <td class="col-xs-1">{{ mission.date }} / {{ mission.heure }}</td>\r\n                <td>{{ mission.depart }}</td>\r\n                <td>{{ mission.destination }}</td>\r\n                <td class="col-xs-1">{{ mission.client }}</td>\r\n                <td>{{ mission.clientPhone }}</td>\r\n                <td>{{ mission.driver.firstname }} {{ mission.driver.name}} </td>\r\n                  <td class="centered"><button class="btn btn-secondary glyphicon glyphicon-ok" ng-click="$ctrl.archive(mission)"></button></td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class="col-md-12">\r\n        <div class="panel panel-default">\r\n          <div class="panel-heading">\r\n            <h4><i class="fa fa-fw fa-check"></i> Historique</h4>\r\n          </div>\r\n          <div class="panel-body">\r\n            <table class="table">\r\n              <tr>\r\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Date / Heure</th>\r\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Départ</th>\r\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Destination</th>\r\n                <th class="col-xs-1 col-md-2 col-lg-3 display-cell">Client</th>\r\n                <th class="col-xs-1 col-md-2 col-lg-3 display-cell">Chauffeur</th>\r\n              </tr>\r\n              <tr ng-repeat="mission in $ctrl.missions" ng-if="mission.isDone">\r\n                <td>{{ mission.date }} / {{ mission.heure }}</td>\r\n                <td>{{ mission.depart }}</td>\r\n                <td>{{ mission.destination }}</td>\r\n                <td>{{ mission.client }}</td>\r\n                <td>{{ mission.driver.firstname }} {{ mission.driver.name }}</td>\r\n\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- /.container -->\r\n    <center><button class="btn btn-danger btn-sm" ng-click="$ctrl.dataTest()"> Données test</button> <button class="btn btn-warning btn-sm" ng-click="$ctrl.deleteData()">Supprimer les données en cache</button></center>\r\n\r\n  </div>\r\n</div>'),n.put("app/components/navbar/navbar.html",'<div class="component">\r\n  <!-- Static navbar -->\r\n  <nav class="navbar navbar-inverse navbar-fixed-top" ng-hide="$ctrl.pageLogin()">\r\n    <div class="container">\r\n      <div class="navbar-header">\r\n        <button type="button" class="navbar-toggle" ng-init="isCollapsed = true" ng-click="isCollapsed = !isCollapsed">\r\n\r\n            <span class="sr-only">Toggle navigation</span>\r\n            <span class="icon-bar"></span>\r\n            <span class="icon-bar"></span>\r\n            <span class="icon-bar"></span>\r\n          </button>\r\n        <span class="navbar-brand" style="color:#d9534f"> Opération Nez Rouge</span>\r\n      </div>\r\n      <div id="navbar" class="navbar-collapse" ng-class="{collapse: isCollapsed}">\r\n        <ul class="nav navbar-nav">\r\n          <li><a ng-href="/projet-fheche_agueniat_2igpt/#!/accueil" ng-click="isCollapsed = true">Accueil</a></li>\r\n          <li><a ng-href="/projet-fheche_agueniat_2igpt/#!/missions" ng-click="isCollapsed = true">Missions</a></li>\r\n          <li><a ng-href="/projet-fheche_agueniat_2igpt/#!/benevoles" ng-click="isCollapsed = true">Bénévoles</a></li>\r\n        </ul>\r\n        <ul class="nav navbar-nav navbar-right">\r\n          <li><a><span class="glyphicon glyphicon-user"></span> {{$ctrl.getUser()}}</a></li>\r\n          \r\n          <li><a href="" ng-click="$ctrl.userLogout()"><span class="glyphicon glyphicon-log-out"></span> Déconnexion</a></li>\r\n        </ul>\r\n      </div>\r\n      <!--/.nav-collapse -->\r\n    </div>\r\n  </nav>\r\n</div>');
}]),angular.module("app").config(routesConfig);
//# sourceMappingURL=../maps/scripts/app-8de257ccb0.js.map
