function navbarController(Loginservices) {
  var $ctrl = this;

  $ctrl.pageLogin = function () {
    return location.pathname === '/projet-fheche_agueniat_2igpt/#!/';
  };

  $ctrl.getUser = function () {
    return Loginservices.getUser();
  };

  $ctrl.isLogged = function () {
    return localStorage.userIsLogged;
  };

  $ctrl.userLogout = function () {
    Loginservices.userLogout();
  };
}

angular
  .module('app')
  .component('navbar', {
    templateUrl: 'app/components/navbar/navbar.html',
    controller: navbarController
  });

