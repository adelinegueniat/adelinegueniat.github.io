function loginController(Loginservices) {
  var $ctrl = this;
  var $window = window;

  localStorage.userIsLogged = false;

  $ctrl.userLogin = function (usr, pwd) {
    if (Loginservices.userLogin(usr, pwd)) {
      $window.location = '/accueil';
    }
  };
}

angular
  .module('app')
  .component('login', {
    templateUrl: 'app/components/login/login.html',
    controller: loginController
  });

