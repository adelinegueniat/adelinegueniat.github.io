function loginController(Loginservices, $scope) {
  var $ctrl = this;
  var $window = window;
  var $console = console;

  $scope.showMessage = false;
  $scope.showSubmitMessage = function () {
    $console.log('calling');
    $scope.showMessage = true;
  };

  $ctrl.userLogin = function (usr, pwd) {
    if (Loginservices.userLogin(usr, pwd)) {
      $window.location = '/projet-fheche_agueniat_2igpt/#!/accueil';
    }
  };
}

angular
  .module('app')
  .component('login', {
    templateUrl: 'app/components/login/login.html',
    controller: loginController
  });

