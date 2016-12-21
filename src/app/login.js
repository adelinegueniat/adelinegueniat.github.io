function loginController() {
  var $ctrl = this;
  $ctrl.text = '';
  $ctrl.loggedAs = 'déconnecté'

  $ctrl.loggedAsAdmin = function () {
    $ctrl.isAdmin = true;
    $ctrl.isUser = false;
    $ctrl.loggedAs = 'administrateur';
  };

  $ctrl.loggedAsUser = function () {
    $ctrl.isUser = true;
    $ctrl.isAdmin = false;
    $ctrl.loggedAs = 'utilisateur';
  };


}
angular
  .module('app')
  .component('login', {
    templateUrl: 'app/login.html',
    controller: loginController
  });

