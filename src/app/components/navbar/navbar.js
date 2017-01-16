function navbarController(Loginservices) {
  var $ctrl = this;

  $ctrl.pageLogin = function () {
    return localStorage.user === '';
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

