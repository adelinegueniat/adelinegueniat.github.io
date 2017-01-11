function Loginservices() {
  var $ctrl = this;
  var $window = window;

  $ctrl.getUser = function () {
    return $ctrl.user;
  };

  $ctrl.userLogin = function (usr, pwd) {
    if (usr === 'Francis' && pwd === '1234' || usr === 'Adeline' && pwd === '1234') {
      $ctrl.user = usr;
      $ctrl.pass = pwd;

      $window.alert("Bonjour " + usr + " !");
    } else {
      $window.alert("Erreur ! L'utilisateur et le mot de passe ne correspondent pas !");
    }
  };

  $ctrl.userLogout = function () {
    if ($ctrl.userIsLogged()) {
      $window.alert("Vous êtes déjà déconnecté !");
    } else {
      $window.alert("Déconnection effectuée avec succès !");
    }
    // $window.location = '/accueil';
  };

  $ctrl.userIsLogged = function () {
    if ($ctrl.user === null && $ctrl.pass === null) {
      return false;
    }
  };
}



angular
  .module('app')
  .service('Loginservices', Loginservices);

