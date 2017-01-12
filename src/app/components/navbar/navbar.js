function navbarController(Loginservices) {
  var $ctrl = this;

  $ctrl.getUser = function () {
    Loginservices.getUser();
  };

  $ctrl.userLogout = function () {
    Loginservices.userLogout();
  };

  $ctrl.hideBar = function () {
    if (!Loginservices.userIsLogged()) {
      return true;
    }
  };
}

angular
  .module('app')
  .component('navbar', {
    templateUrl: 'app/components/navbar/navbar.html',
    controller: navbarController
  });

