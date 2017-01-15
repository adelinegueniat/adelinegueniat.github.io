function Loginservices() {
  var $ctrl = this;
  var $window = window;

  if (location.pathname === '/') {
    localStorage.user = '';
  }

  $ctrl.getUser = function () {
    if (localStorage.user !== '') {
      return localStorage.user;
    }
    if (location.pathname !== '/') {
      $ctrl.userLogout();
    }
  };

  $ctrl.userLogin = function (usr, pwd) {
    if (usr === 'francis' && pwd === '1234' || usr === 'adeline' && pwd === '1234') {
      localStorage.user = usr;
      return true;
    }

    $window.alert("Erreur ! L'utilisateur et le mot de passe ne correspondent pas !");
    return false;
  };

  $ctrl.userLogout = function () {
    localStorage.user = '';
    $window.location = '/';
  };
}





angular
  .module('app')
  .service('Loginservices', Loginservices);
