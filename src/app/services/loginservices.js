function Loginservices() {
  var $ctrl = this;
  var $window = window;

  $ctrl.getUser = function () {
    if (localStorage.userIsLogged) {
      // $window.alert(localStorage.user);
      return localStorage.user;
    }

    $ctrl.userLogout();
  };

  $ctrl.userLogin = function (usr, pwd) {
    if (usr === 'francis' && pwd === '1234' || usr === 'adeline' && pwd === '1234') {
      localStorage.user = usr;
      localStorage.userIsLogged = true;
      return true;
    }

    $window.alert("Erreur ! L'utilisateur et le mot de passe ne correspondent pas !");
    return false;
  };

  $ctrl.userLogout = function () {
    localStorage.user = '';
    localStorage.userIsLogged = false;
    $window.location = '/login';
  };
}





angular
  .module('app')
  .service('Loginservices', Loginservices);
